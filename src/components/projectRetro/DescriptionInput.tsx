import * as S from '@/styles/projectRetro/Modal.styles';

interface DescriptionInputProps {
  onChange: (description: string) => void;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({ onChange }) => {
  return (
    <>
      <S.DescriptionInput
        placeholder="프로젝트에 대한 설명을 입력해 주세요."
        onChange={e => onChange(e.target.value)}
      ></S.DescriptionInput>
    </>
  );
};

export default DescriptionInput;
