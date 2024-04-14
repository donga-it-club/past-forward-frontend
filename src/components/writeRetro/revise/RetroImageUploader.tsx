import { ChangeEventHandler, FC, MouseEventHandler, useRef } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';
import { Button, Image } from '@chakra-ui/react';

interface Props {
  image: string;
  setImage: (image: string) => void;
}

const RetroImageUploader: FC<Props> = ({ image, setImage }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleUploadButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    inputRef.current?.click();
  };

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = async event => {
    const files = event.target.files;
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
      <Image
        src={image ?? '/Home.png'}
        maxWidth={300}
        margin="20px auto"
        h="auto"
        aspectRatio="1/1"
        objectFit="contain"
      ></Image>
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
