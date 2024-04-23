import { ChangeEventHandler, FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
import { Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import * as S from '@/styles/my/myPage.style';

interface Props {
  initialImage: string | null;
  onChange: (image: File | null, uuid: string) => void;
}

const ImageUploader: FC<Props> = ({ initialImage, onChange }) => {
  const [preview, setPreview] = useState<string | null>(initialImage);
  const [_, setImageUUID] = useState<string | null>(null);

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
    } else {
      // 이미지  제거할 때 파일을 null로 설정하고 UUID를 빈 문자열로 설정
      onChange(null, '');
      setPreview(null); // 미리보기 이미지를 null로 설정
      setImageUUID(null); // UUID를 null로 설정
    }
  };

  const DeleteImage: MouseEventHandler<HTMLButtonElement> = () => {
    setPreview(null);
    setImageUUID(null);
    onChange(null, '');
  };

  useEffect(() => {
    setPreview(initialImage);
  }, []);

  return (
    <>
      <S.MainName>프로필 사진 </S.MainName>
      <S.DivingLine />
      <S.ProfileBox>
        {preview ? (
          <S.UploadImage src={preview} width="100px" height="100px" />
        ) : initialImage ? (
          <S.UploadImage src={initialImage} width="100px" height="100px" />
        ) : (
          <PersonCircle style={{ width: '100px', height: 'auto' }} />
        )}
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
