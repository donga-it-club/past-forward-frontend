import { useState, useEffect } from 'react';
import { Input, Button, Text } from '@aws-amplify/ui-react';
import { fetchUserAttributes, updateUserAttributes } from 'aws-amplify/auth';
import { useRecoilState } from 'recoil';
import { PutUsersRequest } from '@/api/@types/User';
import putUser from '@/api/imageApi/putUser';
import { userNicknameState } from '@/recoil/user/userAtom';
import * as S from '@/styles/my/myPage.style';

const NicknameBox = () => {
  // const [userNickname, setUserNickname] = useState<string | null>(null);
  const [userNickname, setUserNickname] = useRecoilState(userNicknameState);
  const [newNickname, setNewNickname] = useState<string>('');

  async function handleFetchUserAttributes() {
    try {
      const userAttributes = await fetchUserAttributes();
      console.log(userAttributes);
      setUserNickname(userAttributes.nickname || null);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleFetchUserAttributes();
  }, []);

  async function handleUpdateNicknameAttributes(updatedNickname: string) {
    try {
      const requestData: PutUsersRequest = {
        thumbnail: null,
        username: updatedNickname,
      };

      await updateUserAttributes({
        userAttributes: {
          nickname: newNickname,
        },
      });

      await putUser(requestData);

      alert('닉네임이 수정되었습니다.');
      setUserNickname(updatedNickname);
      setNewNickname('');
      // console.log(updatedNickname);
    } catch (error) {
      console.log(error);
    }
  }
  const handleNewNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(event.target.value);
  };

  return (
    <>
      <S.MainName>닉네임</S.MainName>
      <S.DivingLine />
      <S.NicknameContainer>
        <S.NicknameUpdateBox>
          <Input
            variation="quiet"
            placeholder={userNickname || ''}
            value={newNickname}
            onChange={handleNewNicknameChange}
          />
          <S.NicknameDescription>
            <Text fontSize="xs">닉네임 작성 후 해당 버튼을 누를 시 닉네임이 변경됩니다.</Text>
          </S.NicknameDescription>
          <S.UpdateButton>
            <Button size="small" onClick={() => handleUpdateNicknameAttributes(newNickname)} id="mypage_nick">
              닉네임 변경
            </Button>
          </S.UpdateButton>
        </S.NicknameUpdateBox>
      </S.NicknameContainer>
    </>
  );
};

export default NicknameBox;
