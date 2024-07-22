import * as S from '@/styles/projectRetro/Modal.styles';

interface DescriptionInputProps {
  onChange: (description: string) => void;
  placeholder: string | undefined;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({ onChange, placeholder }) => {
  return (
    <>
      <S.DescriptionInput placeholder={placeholder} onChange={e => onChange(e.target.value)}></S.DescriptionInput>
    </>
  );
};

export default DescriptionInput;
