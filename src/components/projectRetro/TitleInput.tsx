import * as S from '@/styles/projectRetro/Modal.styles';

interface TitleInputProps {
  onChange: (title: string) => void;
  placeholder: string;
}

const TitleInput: React.FC<TitleInputProps> = ({ onChange, placeholder }) => {
  return (
    <>
      <S.NameInput placeholder={placeholder} onChange={e => onChange(e.target.value)}></S.NameInput>
    </>
  );
};

export default TitleInput;
