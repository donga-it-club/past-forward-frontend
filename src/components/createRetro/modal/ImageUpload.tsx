import React, { ChangeEvent, useState } from 'react';
import { Input, Box, Image, Button, Center } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

interface ImageUploadProps {
  onChange: (image: string, uuid: string) => void; // 이미지 파일의 URL, uuid를 외부로 전달하는 함수
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [, setImageUUID] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        const uuid = uuidv4(); // UUID 생성
        setImageUUID(uuid); // 생성된 UUID 설정
        setImagePreview(result); // 이미지 미리보기 업데이트
        onChange(result, uuid);
        console.log(uuid);
      };
      reader.readAsDataURL(file);
    }
  };

  // 이미지 제거 함수
  const handleRemoveImage = () => {
    setImagePreview(null);
    setImageUUID(null);
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
        <Center>
          {imagePreview && (
            <Box mt={4}>
              <Center>
                <Image src={imagePreview} alt="Selected Image" maxH="200px" />
              </Center>
              <Center mt={2}>
                <Button variant="outline" borderColor="gray.700" size="md" width="15rem" onClick={handleRemoveImage}>
                  이미지 제거
                </Button>
              </Center>
            </Box>
          )}
        </Center>
      </Box>
    </>
  );
};

export default ImageUpload;
