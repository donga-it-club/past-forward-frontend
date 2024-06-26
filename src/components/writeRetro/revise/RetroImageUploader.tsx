import { ChangeEventHandler, FC, MouseEventHandler, useRef } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';
import { Button, Image } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import defaultImage from '@/../public/defaultImage.png';

interface Props {
  image: string;
  onChange: (image: File | null, uuid: string) => void;
  setImageUUID: (uuid: string | null) => void;
  setPreview: (preview: string | null) => void;
  preview: string | null;
  imageUUID: string | null;
}

const RetroImageUploader: FC<Props> = ({ image, onChange, setImageUUID, setPreview, preview, imageUUID }) => {
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
      <Image
        src={preview ?? image}
        maxWidth={200}
        margin="20px auto"
        h="auto"
        aspectRatio="1/1"
        objectFit="contain"
        borderRadius="10%"
      />

      <div style={{ margin: '0 auto' }}>
        <Button colorScheme="brand" variant="outline" margin="0 30px 20px" onClick={handleUploadButtonClick}>
          <MdOutlineFileUpload style={{ margin: '0 5px' }} />
          {imageUUID ? '이미지 변경하기' : '이미지 첨부하기'}
          <input type="file" ref={inputRef} onChange={handleImageChange} accept="image/*" hidden></input>
        </Button>
        {imageUUID && (
          <Button colorScheme="brand" variant="outline" margin="0 30px 20px" onClick={DeleteImage}>
            삭제하기
          </Button>
        )}
      </div>
    </>
  );
};

export default RetroImageUploader;
