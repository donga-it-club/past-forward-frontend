import * as S from '@/styles/projectRetro/Modal.styles';

interface TitleInputProps {
  onChange: (title: string) => void;
}

const TitleInput: React.FC<TitleInputProps> = ({ onChange }) => {
  return (
    <>
      <S.NameInput placeholder="Project Name *" onChange={e => onChange(e.target.value)}></S.NameInput>
    </>
  );
};

export default TitleInput;
