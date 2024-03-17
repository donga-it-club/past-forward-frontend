import * as S from '@/styles/my/myPage.style';
import { Asterisk } from 'react-bootstrap-icons';
import CurrentPasswordInput from '@/components/my/component/CurrentPasswordInput';
import NewPasswordInput from '@/components/my/component/NewPasswordInput';
import ChangePWButton from '@/components/my/component/ChangePWButton';

const PasswordBox = () => {
  return (
    <>
      <S.PWBox>
        <S.MainName>비밀번호 </S.MainName>
        <S.DivingLine />
        <S.SubName fontSize="13px">
          비밀번호를 변경하면 이 장치에서는 로그인 상태로 유지되지만 다른 장치에서는 로그아웃될 수 있습니다.
        </S.SubName>
        <S.PWFont>
          <div style={{ display: 'flex' }}>
            <Asterisk style={{ width: '5px', color: 'red', margin: '0 2px' }} />
            현재 비밀번호
          </div>
        </S.PWFont>
        <CurrentPasswordInput />
        <S.PWFont>
          <div style={{ display: 'flex' }}>
            <Asterisk style={{ width: '5px', color: 'red', margin: '0 2px' }} />새 비밀번호
          </div>
        </S.PWFont>
        <NewPasswordInput />

        <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
          <ChangePWButton />
        </div>
      </S.PWBox>
    </>
  );
};

export default PasswordBox;
