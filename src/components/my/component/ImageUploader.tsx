import * as S from '@/styles/my/myPage.style';
import { ChangeEventHandler, FC, MouseEventHandler, useRef } from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
import styled from 'styled-components';

interface Props {
  image: string;
  setImage: (image: string) => void;
}

const ImageUploader: FC<Props> = ({ image, setImage }) => {
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <>
      <S.MainName>프로필 사진 </S.MainName>
      <S.DivingLine />
      <S.ProfileBox>
        {image ? <UploadImage src={image} /> : <PersonCircle style={{ width: '100px', height: 'auto' }} />}
      </S.ProfileBox>
      <S.ImageButtonBox>
        <div>
          <S.OrdinaryButton color="#111B47" onClick={handleUploadButtonClick}>
            이미지 편집
            <input type="file" ref={inputRef} onChange={handleImageChange} accept="image/*" hidden></input>
          </S.OrdinaryButton>
        </div>
        <S.OrdinaryButton color="#111B47" onClick={DeleteImage}>
          이미지 제거
        </S.OrdinaryButton>
      </S.ImageButtonBox>
    </>
  );
};

export default ImageUploader;

export const UploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1/1;
`;
