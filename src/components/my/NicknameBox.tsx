import { useState, useEffect } from 'react';
import { Input, Button } from '@aws-amplify/ui-react';
import { fetchUserAttributes, updateUserAttributes } from 'aws-amplify/auth';
import { useRecoilState } from 'recoil';
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
      await updateUserAttributes({
        userAttributes: {
          nickname: newNickname,
        },
      });
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
          <S.UpdateButton>
            <Button size="small" onClick={() => handleUpdateNicknameAttributes(newNickname)}>
              닉네임 변경
            </Button>
          </S.UpdateButton>
        </S.NicknameUpdateBox>
      </S.NicknameContainer>
    </>
  );
};

export default NicknameBox;
