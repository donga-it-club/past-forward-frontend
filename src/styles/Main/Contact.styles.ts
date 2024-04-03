import styled from 'styled-components';

interface RadioInputProps {
  imageURL: string;
}

export const Container = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: 0.3fr 1.5fr 3fr 0.3fr;
  grid-template-rows: 1fr 6.5fr 1fr;
`;

export const TitleContainer = styled.div`
  align-self: center;
  &:nth-child(1) {
    grid-column: 2/3;
    grid-row: 1/2;
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
`;

export const CircleBig = styled.div`
  width: 180px;
  height: 180px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.5;
  position: absolute;
  right: -10%;
  bottom: -10%;
`;

export const CircleSmall = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.5;
  position: absolute;
  right: 10%;
  bottom: 12%;
`;

export const TextContainer = styled.div`
  &:nth-child(3) {
    grid-column: 3/4;
    grid-row: 2/4;
  }
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
`;

export const EmailTitle = styled.span`
  color: #8d8d8d;
  font-size: medium;
`;

export const EmailInput = styled.input`
  margin-top: 10px;
  display: block;
  border: none;
  padding-bottom: 5px;
  border-bottom: 1px solid #8d8d8d;
  margin-bottom: 10px;
`;
export const EmailContainer = styled.div`
  flex: 1;
`;

export const SubjectContainer = styled.div`
  flex: 1;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const SubjectTitle = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const RadioContainer = styled.div`
  align-items: center;
  margin-top: 10px;
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
`;

export const ContentTitle = styled.span`
  color: black;
  font-size: medium;
`;

export const ContentInput = styled.input`
  display: block;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ContentTextBoxContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContentTextTitle = styled.span`
  flex: 1;
  display: block;
  color: #8d8d8d;
  font-size: medium;
`;

export const ContentTextBox = styled.input`
  flex: 6;
  color: #555;
  background: #f5f5f5;
  border: none;
  border-radius: 3px;
`;

export const ButtonContainer = styled.div`
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
