import { ChangeEventHandler, FC, MouseEventHandler, useRef, useState } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';
import { Button, Image } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  image: string;
  setImage: (image: File | null, uuid: string) => void;
}

const RetroImageUploader: FC<Props> = ({ image, setImage }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [_, setImageUUID] = useState<string | null>(null); // 상태를 활용할 수 있도록 수정

  const inputRef = useRef<HTMLInputElement>(null);
  const handleUploadButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    inputRef.current?.click();
  };

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = async event => {
    const files = event.target.files?.[0];

    if (files) {
      const reader = new FileReader();
      const uuid = uuidv4();
      setImage(files, uuid);

      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        setImageUUID(uuid);
      };
      reader.readAsDataURL(files);
    }
  };

  const DeleteImage: MouseEventHandler<HTMLButtonElement> = () => {
    setPreview(null);
    setImageUUID(null);
    setImage(null, '');
  };

  return (
    <>
      <Image src={preview ?? image} maxWidth={400} margin="20px auto" h="auto" aspectRatio="1/1" objectFit="contain" />

      <div style={{ margin: '0 auto' }}>
        <Button colorScheme="brand" variant="outline" margin="0 30px" onClick={handleUploadButtonClick}>
          <MdOutlineFileUpload style={{ margin: '0 5px' }} />
          변경하기
          <input type="file" ref={inputRef} onChange={handleImageChange} accept="image/*" hidden></input>
        </Button>
        <Button colorScheme="brand" variant="outline" margin="0 30px" onClick={DeleteImage}>
          삭제하기
        </Button>
      </div>
    </>
  );
};

export default RetroImageUploader;
