import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadInput = styled.input`
  margin-top: 20px;
`;

const PreviewImage = styled.img`
  margin-top: 20px;
  max-width: 300px;
  max-height: 300px;
`;

const UploadPhoto: React.FC = () => {
  const [previewURL, setPreviewURL] = useState<string | undefined>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPreviewURL(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewURL(undefined);
    }
  };

  return (
    <>
      {previewURL && <PreviewImage src={previewURL} alt="Preview" />}
      <UploadForm>
        <label htmlFor="fileUpload"></label>
        <UploadInput type="file" id="fileUpload" name="fileUpload" accept="image/*" onChange={handleFileChange} />
      </UploadForm>
    </>
  );
};

export default UploadPhoto;
