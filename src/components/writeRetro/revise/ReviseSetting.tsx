import { useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { IoIosInformationCircle } from 'react-icons/io';
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
  FormLabel,
  IconButton,
  Input,
  Switch,
  useEditableControls,
} from '@chakra-ui/react';
import DeleteRetrospective from './DeleteRetrospective';
import RetroImageUploader from './RetroImageUploader';
import { RetrospectiveData, RetrospectiveResponse } from '@/api/@types/Retrospectives';
import { MockRetrospective } from '@/api/__mock__/retrospective';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as L from '@/styles/writeRetroStyles/Layout.style';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

const ReviseSetting = () => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const retrospectiveId = Number(query[1]);
  const teamId = Number(query[3]);

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [status, setStatus] = useState<string>();
  const toast = useCustomToast();
  const navigate = useNavigate();
  const [retro, setRetro] = useState<RetrospectiveResponse>();
  const [image, setImage] = useState<string>('/Home.png');
  const [fetch, setFetch] = useState<RetrospectiveData>();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const FetchRetrospective = async () => {
    try {
      const data = await RetrospectiveService.onlyGet({ retrospectiveId: 57 });
      setFetch(data.data);
    } catch (e) {
      toast.error(e);
    }
  };
  useEffect(() => {
    FetchRetrospective();
  }, [fetch?.status]);

  const handlePutRetrospective = async () => {
    try {
      const data = await RetrospectiveService.put({
        retrospectiveId: retrospectiveId,
        title: title,
        teamId: teamId,
        description: description,
        status: 'COMPLETED',
        thumbnail: image,
      });
      setRetro(data);
      console.log(retro);
    } catch (e) {
      console.error(e);
    }
  };

  const handleNavigate = (props: string) => {
    setTimeout(() => {
      navigate('/retrolist');
      toast.info(props);
    }, 1000);
  };

  const SwitchStatus = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      toast.info('회고 완료 처리를 취소하였습니다.');
      console.log('취소');
      console.log(status);
      setStatus('IN_PROGRESS');
    } else {
      toast.success('해당 회고는 최종 완료 처리되었습니다.');
      console.log('성공 ');
      setStatus('COMPLETED');
    }
  };

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
    handlePutRetrospective();
  }, []);

  if (!fetch) return;

  return (
    <S.SettingContainer>
      <RetroImageUploader image={fetch.thumbnail} setImage={setImage} />
      {/* 회고명 */}
      <Flex flexDirection="column">
        <L.reviseTitleText>회고명 </L.reviseTitleText>
        <Input
          placeholder={fetch?.title}
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
        <S.NotTextInput>{MockRetrospective.data.templateId}</S.NotTextInput>

        {/* 회고 템플릿 유형 */}
        <Flex margin="10px 0">
          <L.reviseTitleText>회고 템플릿 유형 </L.reviseTitleText>
          <S.NoteChangeText>변경 불가</S.NoteChangeText>
        </Flex>
        <S.NotTextInput>{fetch.status}</S.NotTextInput>

        {/* 회고리더 */}
        <Flex margin="10px 0">
          <L.reviseTitleText>회고 리더 </L.reviseTitleText>
          <S.NoteChangeText>변경 불가</S.NoteChangeText>
        </Flex>
        <S.ReaderBox>
          <BsPersonCircle size={30} style={{ margin: '5px' }} />
          <p style={{ margin: 'auto 0' }}>{MockRetrospective.data.userId}</p>
        </S.ReaderBox>

        {/* 회고 설명 */}
        <Editable
          textAlign="center"
          defaultValue={fetch?.description}
          fontSize="xl"
          isPreviewFocusable={false}
          margin="10px 0"
        >
          <EditablePreview />
          <Input as={EditableInput} value={description} onChange={e => setDescription(e.target.value)} />
          <EditableControls />
        </Editable>

        {/* 최종완료 */}
        <L.reviseTitleText>회고 최종완료</L.reviseTitleText>
        <S.SettingLine />
        <FormControl display="flex" alignItems="center" onChange={SwitchStatus}>
          <FormLabel htmlFor="email-alerts" mb="0" margin="20px 10px" display="flex">
            <IoIosInformationCircle color="#FF4646" size={20} style={{ margin: 'auto 0' }} />
            <S.SettingDetailText>회고가 최종 완료 단계로 처리되며 더이상 수정이 불가합니다.</S.SettingDetailText>
          </FormLabel>
          <Switch colorScheme="orange" size="lg" isRequired isInvalid={isChecked} />
        </FormControl>

        {/* 회고 삭제 */}
        <DeleteRetrospective retrospectiveId={retrospectiveId} />

        {/* save, cancel */}
        <Flex flexDirection="row-reverse">
          <Button
            colorScheme="grey"
            variant="outline"
            onClick={() => {
              handleNavigate('회고 수정이 정상 처리되었습니다.');
            }}
          >
            SAVE
          </Button>
          <Button
            colorScheme="grey"
            variant="outline"
            margin="auto 20px"
            onClick={() => {
              handleNavigate('회고 수정이 취소되었습니다.');
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
