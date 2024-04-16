import { useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { IoIosInformationCircle } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { MdModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
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
import { onlyGetRetrospectiveResponse, RetrospectiveResponse } from '@/api/@types/Retrospectives';
import { MockRetrospective } from '@/api/__mock__/retrospective';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as L from '@/styles/writeRetroStyles/Layout.style';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

const ReviseSetting = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [status, setStatus] = useState<string>();
  const toast = useCustomToast();
  const navigate = useNavigate();
  const [retro, setRetro] = useState<RetrospectiveResponse>();
  const [image, setImage] = useState<string>('/Home.png');
  const [fetch, setFetch] = useState<onlyGetRetrospectiveResponse>();

  const FetchRetrospective = async () => {
    try {
      const data = await RetrospectiveService.onlyGet({ retrospectiveId: 1 });
      if (!data) return;
      setFetch(data);
      console.log(fetch);
    } catch (e) {
      toast.error(e);
    }
  };

  const handlePutRetrospective = async () => {
    try {
      const data = await RetrospectiveService.put({
        retrospectiveId: 1,
        title: 'gg',
        teamId: 1,
        description: 'ggggg',
        status: 'COMPLETED',
        thumbnail: '/Home.png',
      });
      if (!data) return;
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
      setStatus('COMPLETED');
      console.log(status);
    } else {
      toast.success('해당 회고는 최종 완료 처리되었습니다.');
      console.log('성공 ');
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
    FetchRetrospective();
  }, []);

  return (
    <S.SettingContainer>
      <RetroImageUploader image={image} setImage={setImage} />
      {/* 회고명 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <L.TaskText style={{ fontSize: '20px' }}>회고명 </L.TaskText>
        <Input placeholder={MockRetrospective.data.title} />

        {/* 회고 유형 */}
        <div style={{ display: 'flex', margin: '10px 0' }}>
          <L.TaskText style={{ fontSize: '20px', minWidth: 'auto', margin: 'auto 0' }}>회고 유형 </L.TaskText>
          <S.NoteChangeText>변경 불가</S.NoteChangeText>
        </div>
        <S.NotTextInput>{MockRetrospective.data.templateId}</S.NotTextInput>

        {/* 회고 템플릿 유형 */}
        <div style={{ display: 'flex', margin: '10px 0' }}>
          <L.TaskText style={{ fontSize: '20px', minWidth: 'auto', margin: 'auto 0' }}>회고 템플릿 유형 </L.TaskText>
          <S.NoteChangeText>변경 불가</S.NoteChangeText>
        </div>
        <S.NotTextInput>{MockRetrospective.data.templateId}</S.NotTextInput>

        {/* 회고리더 */}
        <div style={{ display: 'flex', margin: '10px 0' }}>
          <L.TaskText style={{ fontSize: '20px', minWidth: 'auto', margin: 'auto 0' }}>회고 리더 </L.TaskText>
          <S.NoteChangeText>변경 불가</S.NoteChangeText>
        </div>
        <S.ReaderBox>
          <BsPersonCircle size={30} style={{ margin: '5px' }} />
          <p style={{ margin: 'auto 0' }}>{MockRetrospective.data.userId}</p>
        </S.ReaderBox>

        {/* 회고 설명 */}
        <Editable
          textAlign="center"
          defaultValue={MockRetrospective.data.createdDate}
          fontSize="xl"
          isPreviewFocusable={false}
          margin="10px 0"
        >
          <EditablePreview />
          <Input as={EditableInput} />
          <EditableControls />
        </Editable>

        {/* 최종완료 */}
        <L.TaskText style={{ fontSize: '20px' }}>회고 최종완료</L.TaskText>
        <S.SettingLine />
        <FormControl display="flex" alignItems="center" onChange={SwitchStatus}>
          <FormLabel htmlFor="email-alerts" mb="0" margin="20px 10px" display="flex">
            <IoIosInformationCircle color="#FF4646" size={20} style={{ margin: 'auto 0' }} />
            <S.SettingDetailText>회고가 최종 완료 단계로 처리되며 더이상 수정이 불가합니다.</S.SettingDetailText>
          </FormLabel>
          <Switch colorScheme="orange" size="lg" isRequired isInvalid={isChecked} />
        </FormControl>

        {/* 회고 삭제 */}
        <L.TaskText style={{ fontSize: '20px' }}>회고 삭제</L.TaskText>
        <S.SettingLine />
        <div style={{ margin: '20px 10px', display: 'flex' }}>
          <IoIosInformationCircle color="#FF4646" size={20} style={{ margin: 'auto 0' }} />
          <S.SettingDetailText>삭제 후 복구할 수 없습니다.</S.SettingDetailText>
        </div>
        <Flex flexDirection="row-reverse" margin="30px">
          <DeleteRetrospective />
        </Flex>

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
      </div>
    </S.SettingContainer>
  );
};

export default ReviseSetting;
