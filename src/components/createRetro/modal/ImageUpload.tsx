import React, { ChangeEvent, useState } from 'react';
import { Input, Box, Image, Button, Center } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

interface ImageUploadProps {
  onChange: (file: File | null, uuid: string) => void; // 파일 객체, uuid 함께 전달
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [_, setImageUUID] = useState<string | null>(null); // 상태를 활용할 수 있도록 수정

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      const uuid = uuidv4();
      onChange(file, uuid); // 파일 객체, 이미지 미리보기 URL, UUID를 전달

      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setImageUUID(uuid);
      };
      reader.readAsDataURL(file);
    }
  };

  // 이미지 제거 함수
  const handleRemoveImage = () => {
    setImagePreview(null);
    setImageUUID(null);
    onChange(null, ''); // 이미지 제거 시 null 및 빈 문자열 전달
  };

  return (
    <>
      <Box>
        {/* 파일 선택 input */}
        <Input type="file" onChange={handleImageChange} accept="image/*" display="none" id="image-upload" />
        <Center>
          <label htmlFor="image-upload">
            <Button as="span" mt={4} variant="outline" borderColor="gray.700" size="md" width="15rem">
              PC에서 이미지 선택
            </Button>
          </label>
        </Center>

        {/* 이미지 미리보기 */}
        {imagePreview && (
          <Center mt={4}>
            <Image src={imagePreview} alt="Selected Image" maxH="200px" />
            <Button variant="outline" borderColor="gray.700" size="md" width="15rem" onClick={handleRemoveImage}>
              이미지 제거
            </Button>
          </Center>
        )}
      </Box>
    </>
  );
};

export default ImageUpload;
