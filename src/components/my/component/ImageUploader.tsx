import { ChangeEventHandler, FC, MouseEventHandler, useRef } from 'react';
import { Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import defaultImage from '@/../public/defaultImage.png';
import * as S from '@/styles/my/myPage.style';

interface Props {
  image: string;
  onChange: (image: File | null, uuid: string) => void;
  setImageUUID: (imageUUID: string | null) => void;
  setPreview: (preview: string | null) => void;
  preview: string | null;
}

const ImageUploader: FC<Props> = ({ image, onChange, setImageUUID, preview, setPreview }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    inputRef.current?.click();
  };

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = async event => {
    const files = event.target.files?.[0];

    if (files) {
      const reader = new FileReader();
      const uuid = uuidv4();
      onChange(files, uuid);

      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        setImageUUID(uuid);
      };
      reader.readAsDataURL(files);
    }
  };

  const DeleteImage: MouseEventHandler<HTMLButtonElement> = () => {
    setPreview(defaultImage);
    setImageUUID(null);
    onChange(null, '');
  };

  return (
    <>
      <S.MainName>프로필 사진 </S.MainName>
      <S.DivingLine />
      <S.ProfileBox>
        {image ? <S.UploadImage src={preview ?? image} width="100px" height="100px" /> : null}
      </S.ProfileBox>
      <S.ImageButtonBox>
        <S.OrdinaryButton id="mypage_editimg" color="#111B47" onClick={handleUploadButtonClick}>
          이미지 편집
          <input type="file" ref={inputRef} onChange={handleImageChange} accept="image/*" hidden></input>
        </S.OrdinaryButton>
        <S.OrdinaryButton id="mypage_rmimg" color="#111B47" onClick={DeleteImage}>
          이미지 제거
        </S.OrdinaryButton>
      </S.ImageButtonBox>
      <S.ImageDescription>
        <Text fontSize="xs">이미지 제거 버튼은 이미지 편집시 선택한 사진만 제거됩니다.</Text>
        <Text fontSize="xs">이미지를 저장하려면 페이지 하단의 SAVE 버튼을 눌러주세요.</Text>
      </S.ImageDescription>
    </>
  );
};

export default ImageUploader;
