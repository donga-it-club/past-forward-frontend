import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import * as S from '@/styles/my/myPage.style';

const NicknameBox = () => {
  return (
    <>
      <S.MainName>닉네임 </S.MainName>
      <S.DivingLine />
      <Editable defaultValue="Clayton Santos" margin="5px 0" padding="5px" backgroundColor="white" borderRadius="10px">
        <EditablePreview />
        <EditableInput id="mypage_nick" />
      </Editable>
    </>
  );
};

export default NicknameBox;
