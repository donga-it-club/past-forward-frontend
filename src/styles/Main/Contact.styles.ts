import styled from 'styled-components';

interface RadioInputProps {
  imageURL: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  padding-top: 120px;
  /* margin-top: 120px; */
  display: grid;
  grid-template-columns: 0.3fr 1.5fr 3fr 0.3fr;
  grid-template-rows: 1fr 6.5fr 1fr;
  @media (max-width: 800px) {
    margin-top: 50px;
  }
`;

export const TitleContainer = styled.div`
  align-self: center;
  &:nth-child(1) {
    grid-column: 2/3;
    grid-row: 1/1;
  }
`;

export const Title = styled.span`
  color: black;
  font-size: xx-large;
`;

export const Poster = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #00063f;
  padding-top: 30px;
  &:nth-child(2) {
    grid-column: 2/3;
    grid-row: 2/4;
  }
  position: relative;
  @media (max-width: 800px) {
    width: 100vw;
    height: 200px;
    &:nth-child(2) {
      grid-column: 1/4;
      grid-row: 3/4;
    }
  }
`;

export const PosterTitle = styled.span`
  color: white;
  font-size: x-large;
  margin-left: 30px;
`;

export const PosterText = styled.div`
  color: white;
  font-size: large;
  margin-left: 30px;
  font-weight: lighter;
  max-width: 80%;
`;

export const CircleBig = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.5;
  position: absolute;
  right: -10%;
  bottom: -10%;
  @media (max-width: 800px) {
    width: 180px;
    height: 180px;
    right: 10%;
  }
`;

export const CircleSmall = styled.div`
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.5;
  position: absolute;
  right: 15%;
  bottom: 12%;
  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
    right: 10%;
    top: 10%;
  }
`;

export const TextContainer = styled.div`
  &:nth-child(3) {
    grid-column: 3/4;
    grid-row: 2/4;
  }
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
  @media (max-width: 800px) {
    &:nth-child(3) {
      grid-column: 1/4;
      grid-row: 2/2;
    }
  }
`;

export const EmailTitle = styled.span`
  color: #8d8d8d;
  font-size: medium;
`;

export const EmailInput = styled.input`
  width: 320px;
  margin-top: 10px;
  display: block;
  border: none;
  padding-left: 5px;
  padding-bottom: 2px;
  border-bottom: 1px solid #8d8d8d;
  margin-bottom: 10px;
`;

export const EmailContainer = styled.div`
  flex: 1;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

export const SubjectContainer = styled.div`
  flex: 1;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    margin-bottom: 15px;
  }
`;
export const SubjectTitle = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const RadioContainer = styled.div`
  align-items: center;
  margin-top: 10px;
`;

export const RadioStyle = styled.div`
  width: 130px;
  height: auto;
  /* background-color: red; */
  display: inline-block;
  margin-bottom: 10px;
`;

export const RadioInput = styled.input<RadioInputProps>`
  vertical-align: middle;
  background-color: #e0e0e0;
  appearance: none;
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  cursor: pointer;
  &:checked {
    background-image: url(${props => props.imageURL});
    background-size: 100% 100%;
  }
`;

export const RadioLabel = styled.label`
  display: inline;
  margin-right: 20px;
  margin-left: 10px;
`;

export const ContentTitleContainer = styled.div`
  flex: 1;
  flex-direction: column;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

export const ContentTitle = styled.span`
  color: black;
  font-size: medium;
`;

export const ContentInput = styled.input`
  width: 52vw;
  display: block;
  border: none;
  border-bottom: 1px solid black;
  padding-left: 5px;
  padding-bottom: 2px;
  margin-bottom: 10px;
  margin-top: 10px;
  @media (max-width: 800px) {
    width: 80vw;
    height: auto;
    margin-bottom: 10px;
  }
`;

export const ContentTextBoxContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    margin-bottom: 15px;
  }
`;

export const ContentTextTitle = styled.span`
  flex: 1;
  display: block;
  color: #8d8d8d;
  font-size: medium;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

export const ContentTextBox = styled.textarea`
  width: auto;
  height: auto;
  flex: 6;
  color: #555;
  background: #f5f5f5;
  border: none;
  border-radius: 3px;
  padding: 10px;
  /* resize: none;
  overflow-y: hidden; */
  ::placeholder {
    color: #9ca6ba;
  }
  @media (max-width: 800px) {
    width: 80vw;
    min-height: 50px;
  }
`;

export const ButtonContainer = styled.div`
  z-index: 3;
  flex: 1;
  margin-top: 10px;
  flex-direction: column;
  align-self: flex-end;
  justify-content: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: black;
  color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const ButtonText = styled.span`
  color: red;
  font-size: small;
  display: block;
  margin-top: 5px;
`;

export const ContactButtonContainer = styled.div`
  z-index: 1;
  position: relative;
  bottom: -50px;
  width: 100vw;
  height: 80px;
  background-color: #ececec;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    bottom: -350px;
    position: absolute;
  }
`;

export const ContactButton = styled.button`
  width: 300px;
  height: 50px;
  color: white;
  background-color: #111b47;
  border-radius: 3px;
  margin-top: 15px;
`;
