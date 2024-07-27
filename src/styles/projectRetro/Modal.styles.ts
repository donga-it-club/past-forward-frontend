import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 250;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  width: 500px;
  height: auto;
  padding: 15px 25px;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: auto;
    padding: 10px 20px 10px 20px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectText = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111b47;
  color: white;
  padding: 2px 20px;
`;

export const TitleText = styled.div`
  color: #6c6c6c;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 10px 0px;
`;

export const ImageText = styled.p`
  color: #676767;
  font-size: small;
`;
export const NameInput = styled.input`
  margin: 10px 0px;
  border-bottom: 1px solid #949494;
  outline: none;
  width: 200px;
  height: 30px;
  &::placeholder {
    color: #676767;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  color: #8d8d8d;
`;

export const DescriptionBox = styled.div`
  margin: 10px 0px;
`;

export const DescriptionInput = styled.input`
  width: 100%;
  border-bottom: 1px solid #949494;
  outline: none;
  height: 30px;
  &::placeholder {
    color: #676767;
  }
`;

export const StatusBox = styled.div`
  margin: 10px 0px;
`;

export const Button = styled.button`
  border: 1px solid #8d8d8d;
  border-radius: 3px;
  margin-right: auto;
  width: 160px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

interface StatusTextProps {
  option: string | undefined;
}

export const StatusText = styled.p<StatusTextProps>`
  color: ${props => (props.option === 'ING' ? '#57AD5A' : '#FF1818')};
  font-weight: bold;
`;

export const StatusEditText = styled.p<StatusTextProps>`
  color: ${props => (props.option === 'IN_PROGRESS' ? '#57AD5A' : '#FF1818')};
  font-weight: bold;
  margin-left: 5px;
`;

export const DefaultText = styled.p`
  color: #8d8d8d;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const DeleteButton = styled.button`
  color: #ff0000;
  border-radius: 5px;
  border: 1px solid #ff0000;
  padding: 3px 20px;
`;
export const SubmitButton = styled.button`
  margin-left: 20px;
  color: white;
  background-color: #4991e4;
  padding: 3px 20px;
  border-radius: 5px;
`;
