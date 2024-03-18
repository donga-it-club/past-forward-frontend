import React, { ChangeEvent, useState } from 'react';
import { Input, Box, Image, Button, Center } from '@chakra-ui/react';

const ImageUpload: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // 파일이 선택되면 실행되는 함수
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 첫 번째 파일만 선택
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // 이미지 미리보기 업데이트
        setSelectedImage(file); // 선택된 파일 업데이트
      };
      reader.readAsDataURL(file); // 파일을 읽어서 base64 형식으로 변환하여 미리보기에 사용
    }
  };

  // 이미지 업로드를 위한 input 컴포넌트 렌더링
  return (
    <>
      <Box>
        {/* 파일 선택 input */}
        <Input type="file" onChange={handleImageChange} accept="image/*" display="none" id="image-upload" />
        <Center>
          <label htmlFor="image-upload">
            <Button as="span" mt={4} variant="outline" borderColor="gray.700" size="md" width="15rem">
              PC에서 업로드
            </Button>
          </label>
        </Center>

        {/* 이미지 미리보기 */}
        <Center>
          {imagePreview && (
            <Box mt={4}>
              <Image src={imagePreview} alt="Selected Image" maxH="200px" />
            </Box>
          )}
        </Center>

        {/* 이미지 업로드 버튼 */}
        {/* {selectedImage && (
          <Center mt={4}>
            <Button colorScheme="blue" onClick={() => console.log('Upload', selectedImage)}>
              Upload
            </Button>
          </Center>
        )} */}
      </Box>
    </>
  );
};

export default ImageUpload;
