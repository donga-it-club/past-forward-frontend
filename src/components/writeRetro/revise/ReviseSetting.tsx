import { FC, useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { MdModeEdit } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormControl,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useEditableControls,
} from '@chakra-ui/react';
import axios from 'axios';
import DeleteRetrospective from './DeleteRetrospective';
import RetroImageUploader from './RetroImageUploader';
import { RetrospectiveData } from '@/api/@types/Retrospectives';
import { TemplateNameData } from '@/api/@types/TeamController';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import { TeamControllerServices } from '@/api/services/TeamController';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as L from '@/styles/writeRetroStyles/Layout.style';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

interface Props {
  retro: RetrospectiveData;
  status: string;
  setStatus: (status: string) => void;
}

const ReviseSetting: FC<Props> = ({ retro, status, setStatus }) => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const retrospectiveId = Number(query[1]);
  const teamId = Number(query[3]);

  //image
  const [image, setImage] = useState<Blob | null>(null);
  const [imageURL, setImageURL] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  //revise
  const [templateName, setTemplateName] = useState<TemplateNameData[]>();
  const [description, setDescription] = useState<string>('');
  const [imageUUID, setImageUUID] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const toast = useCustomToast();
  const navigate = useNavigate();

  const fetchRetrospectiveImage = async () => {
    if (retro) {
      try {
        const data = await postImageToS3({ filename: retro.thumbnail, method: 'GET' });
        setImageURL(data.data.preSignedUrl);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const fetchRetrospectiveTemplate = async () => {
    try {
      if (retro) {
        const data = await TeamControllerServices.TemplateNameGet({ templateId: retro.templateId });
        setTemplateName(data.data);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handlePutRetrospective = async () => {
    try {
      if (teamId) {
        await RetrospectiveService.putTeam({
          retrospectiveId: retro.retrospectiveId,
          title: title ? title : retro.title,
          teamId: teamId,
          description: description ? description : retro.description,
          thumbnail: imageUUID,
          status: status,
        });
        navigate('/retrolist');
        toast.info('회고 수정이 정상 처리되었습니다.');
      } else {
        await RetrospectiveService.putPersonal({
          retrospectiveId: retro.retrospectiveId,
          title: title ? title : retro.title,
          description: description ? description : retro.description,
          thumbnail: imageUUID,
          status: status,
        });
        navigate('/retrolist');
        toast.info('회고 수정이 정상 처리되었습니다.');
      }

      if (imageURL && retro.thumbnail !== imageURL) {
        const response = await postImageToS3({
          filename: imageURL,
          method: 'PUT',
        });

        await axios.put(response.data.preSignedUrl, image, {
          headers: {
            'Content-Type': image?.type,
          },
        });
      }
    } catch {
      toast.error('회고 수정이 정상 처리되지 않았습니다.');
    }
  };

  //description edit icon
  function EditableControls() {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton aria-label="Search database" icon={<FaCheck />} {...getSubmitButtonProps()} />
        <IconButton aria-label="Search database" icon={<IoClose />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton aria-label="Search database" size="sm" icon={<MdModeEdit />} {...getEditButtonProps()} />
      </Flex>
    );
  }

  useEffect(() => {
    fetchRetrospectiveTemplate();
    fetchRetrospectiveImage();
  }, [imageURL]);

  if (!fetch) return;

  return (
    <S.SettingContainer>
      <Flex flexDirection="row-reverse" margin="10px 5px">
        변경 전 사진이 없으면 사진이 보이지 않습니다.
      </Flex>
      <RetroImageUploader
        image={imageURL}
        onChange={(files, imageUUID) => {
          imageUUID && setImageURL(imageUUID);
          setImage(files);
        }}
        setImageUUID={setImageUUID}
        preview={preview}
        setPreview={setPreview}
      />

      {/* 회고명 */}
      <Flex flexDirection="column">
        <L.reviseTitleText>회고명 </L.reviseTitleText>
        <Input
          placeholder={retro.title}
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
          marginBottom="20px"
          marginTop="5px"
        />

        {/* 회고 유형 */}
        <Flex margin="10px 0">
          <L.reviseTitleText>회고 유형 </L.reviseTitleText>
          <S.NoteChangeText>변경 불가</S.NoteChangeText>
        </Flex>
        <S.NotTextInput>{retro.type === 'TEAM' ? '팀' : '개인'}</S.NotTextInput>

        {/* 회고 템플릿 유형 */}
        <Flex margin="10px 0">
          <L.reviseTitleText>회고 템플릿 유형 </L.reviseTitleText>
          <S.NoteChangeText>변경 불가</S.NoteChangeText>
        </Flex>
        <S.NotTextInput>{templateName && templateName[0].name === 'Keep' ? 'KPT' : 'KUDOS'}</S.NotTextInput>

        {/* 회고리더 */}
        <Flex margin="10px 0">
          <L.reviseTitleText>회고 리더 </L.reviseTitleText>
          <S.NoteChangeText>변경 불가</S.NoteChangeText>
        </Flex>
        <S.ReaderBox>
          <BsPersonCircle size={30} style={{ margin: '5px' }} />
          <p style={{ margin: 'auto 0' }}>
            {retro.leaderName ?? <S.NotMemberInfo> (회고 리더 이름없음)</S.NotMemberInfo>}
          </p>
        </S.ReaderBox>

        {/* 회고 설명 */}
        <Editable
          textAlign="center"
          defaultValue={retro?.description}
          fontSize="xl"
          isPreviewFocusable={false}
          margin="10px 0"
        >
          <EditablePreview />
          <Input as={EditableInput} value={description} onChange={e => setDescription(e.target.value)} />
          <EditableControls />
        </Editable>

        {/* 최종완료 */}
        <L.reviseTitleText>회고 진행 단계</L.reviseTitleText>
        <S.SettingLine />
        <FormControl display="flex" alignItems="center" flexDirection="column" margin="20px auto">
          <Flex>
            <RadioGroup onChange={setStatus} value={status} colorScheme="brand">
              <Stack direction="row" spacing="24px">
                <Radio value="NOT_STARTED">진행 전</Radio>
                <Radio value="IN_PROGRESS">진행 중</Radio>
                <Radio value="COMPLETED">진행 완료</Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </FormControl>

        {/* 회고 삭제 */}
        <DeleteRetrospective retrospectiveId={retrospectiveId} />

        {/* save, cancel */}
        <Flex flexDirection="row-reverse">
          <Button colorScheme="grey" variant="outline" onClick={handlePutRetrospective}>
            SAVE
          </Button>
          <Button
            colorScheme="grey"
            variant="outline"
            margin="auto 20px"
            onClick={() => {
              setTimeout(() => {
                navigate('/retrolist');
                toast.info('회고 수정이 취소되었습니다.');
              }, 1000);
            }}
          >
            CANCEL
          </Button>
        </Flex>
      </Flex>
    </S.SettingContainer>
  );
};

export default ReviseSetting;
