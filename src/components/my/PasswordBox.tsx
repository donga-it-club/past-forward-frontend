// import { Asterisk } from 'react-bootstrap-icons';
import { AccountSettings } from '@aws-amplify/ui-react';
// import { updatePassword, type UpdatePasswordInput } from 'aws-amplify/auth';
// import ChangePWButton from '@/components/my/component/ChangePWButton';
// import CurrentPasswordInput from '@/components/my/component/CurrentPasswordInput';
// import NewPasswordInput from '@/components/my/component/NewPasswordInput';
import * as S from '@/styles/my/myPage.style';

const PasswordBox = () => {
  const handleSuccess = () => {
    alert('비밀번호가 성공적으로 변경되었습니다.');
  };

  return (
    <>
      <S.PWBox>
        <S.MainName>비밀번호 </S.MainName>
        <S.DivingLine />
        <S.SubName fontSize="13px">
          비밀번호를 변경하면 이 장치에서는 로그인 상태로 유지되지만 다른 장치에서는 로그아웃될 수 있습니다.
        </S.SubName>
        <AccountSettings.ChangePassword
          onSuccess={handleSuccess}
          displayText={{
            currentPasswordFieldLabel: '현재 비밀번호를 입력해주세요.',
            newPasswordFieldLabel: '새 비밀번호를 입력해주세요.',
            confirmPasswordFieldLabel: '한 번 더 입력해주세요.',
            updatePasswordButtonText: '비밀번호 변경',
          }}
        />
      </S.PWBox>
    </>
  );
};

export default PasswordBox;
