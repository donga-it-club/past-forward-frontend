import { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { IoIosInformationCircle } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { MdModeEdit, MdOutlineFileUpload } from 'react-icons/md';
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
  Image,
  Input,
  Switch,
  useEditableControls,
} from '@chakra-ui/react';
import { MockRetrospective } from '@/api/__mock__/retrospective';
import * as L from '@/styles/writeRetroStyles/Layout.style';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

const ReviseSetting = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>('/Home.png');

  const handleUploadButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    inputRef.current?.click();
  };

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = async event => {
    const files = event.target.files;

    if (!files || files.length === 0) return;

    if (!files) return;

    if (files) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      const imageUrlString: string = imageUrl;
      setImage(imageUrlString);
    }
  };

  const DeleteImage: MouseEventHandler<HTMLButtonElement> = () => {
    setImage('');
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
  return (
    <S.SettingContainer>
      <Image
        src={image ?? '/Home.png'}
        maxWidth={500}
        margin="20px auto"
        h="auto"
        aspectRatio="1/1"
        objectFit="contain"
      ></Image>
      <div style={{ margin: '0 auto' }}>
        <Button colorScheme="brand" variant="outline" margin="0 30px" onClick={handleUploadButtonClick}>
          <MdOutlineFileUpload style={{ margin: '0 5px' }} />
          변경하기
          <input type="file" ref={inputRef} onChange={handleImageChange} accept="image/*" hidden></input>
        </Button>
        <Button colorScheme="brand" variant="outline" margin="0 30px" onClick={DeleteImage}>
          삭제하기
        </Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <L.TaskText style={{ fontSize: '20px' }}>회고명 </L.TaskText>
        <Input placeholder={MockRetrospective.data.title} />
        <div style={{ display: 'flex', margin: '10px 0' }}>
          <L.TaskText style={{ fontSize: '20px', minWidth: 'auto', margin: 'auto 0' }}>회고 유형 </L.TaskText>
          <S.NoteChangeText>변경 불가</S.NoteChangeText>
        </div>

        <S.NotTextInput>{MockRetrospective.data.templateId}</S.NotTextInput>
        <div style={{ display: 'flex', margin: '10px 0' }}>
          <L.TaskText style={{ fontSize: '20px', minWidth: 'auto', margin: 'auto 0' }}>회고 템플릿 유형 </L.TaskText>
          <S.NoteChangeText>변경 불가</S.NoteChangeText>
        </div>
        <S.NotTextInput>Kudos</S.NotTextInput>

        <div style={{ display: 'flex', margin: '10px 0' }}>
          <L.TaskText style={{ fontSize: '20px', minWidth: 'auto', margin: 'auto 0' }}>회고 리더 </L.TaskText>
          <S.NoteChangeText>변경 불가</S.NoteChangeText>
        </div>

        <S.ReaderBox>
          <BsPersonCircle size={30} style={{ margin: '5px' }} />
          <p style={{ margin: 'auto 0' }}> Chae yeon 선애조아</p>
        </S.ReaderBox>
        <Editable
          textAlign="center"
          defaultValue="회고 설명을 적어주세요."
          fontSize="xl"
          isPreviewFocusable={false}
          margin="10px 0"
        >
          <EditablePreview />
          {/* Here is the custom input */}
          <Input as={EditableInput} />
          <EditableControls />
        </Editable>
        <L.TaskText style={{ fontSize: '20px' }}>회고 최종완료</L.TaskText>
        <S.SettingLine />

        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0" margin="20px 10px" display="flex">
            <IoIosInformationCircle color="#FF4646" size={20} style={{ margin: 'auto 0' }} />
            <S.SettingDetailText>최종 완료 시, Done으로 표시되며 참여자는 수정이 불가합니다.</S.SettingDetailText>
          </FormLabel>
          <Switch id="email-alerts" colorScheme="red" size="lg" />
        </FormControl>
        <L.TaskText style={{ fontSize: '20px' }}>회고 삭제</L.TaskText>
        <S.SettingLine />
        <div style={{ margin: '20px 10px', display: 'flex' }}>
          <IoIosInformationCircle color="#FF4646" size={20} style={{ margin: 'auto 0' }} />
          <S.SettingDetailText>최종 완료 시, Done으로 표시되며 참여자는 수정이 불가합니다.</S.SettingDetailText>
        </div>
        <Flex flexDirection="row-reverse" margin="30px">
          <Button colorScheme="red" variant="outline">
            회고 삭제
          </Button>
        </Flex>
        <Flex flexDirection="row-reverse">
          <Button colorScheme="grey" variant="outline">
            SAVE
          </Button>
          <Button colorScheme="grey" variant="outline" margin="auto 20px">
            CANCEL
          </Button>
        </Flex>
      </div>
    </S.SettingContainer>
  );
};

export default ReviseSetting;
