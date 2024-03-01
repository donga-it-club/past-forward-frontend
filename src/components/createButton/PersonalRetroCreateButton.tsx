import React from 'react';
import styled from 'styled-components';
import PlusIconImg from '../../assets/PlusIcon_dark.png';

interface TextProps {
  color: string;
  weight?: string;
}

const CreateButtonBorder = styled.div`
  width: 25rem;
  height: 13rem;
  border-radius: 1rem;
  border: 2px solid rgba(17, 27, 71, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateButtonBg = styled.div`
  width: 24rem;
  height: 12rem;
  border-radius: 1rem;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid rgba(17, 27, 71, 1);
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PlusIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

const Text = styled.div<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight || 'normal'};
  margin-top: 1rem;
`;

const PersonalRetroCreateButton: React.FC = () => {
  return (
    <>
      <CreateButtonBorder>
        <CreateButtonBg>
          <CenteredContainer>
            <PlusIcon src={PlusIconImg} />
            <Text color='rgba(17, 27, 71, 1)'>Personal Retrospect</Text>
            <Text color='rgba(119, 119, 119, 1)' weight='100'>
              Keep / Problem / To Improve / Action Items
            </Text>
          </CenteredContainer>
        </CreateButtonBg>
      </CreateButtonBorder>
    </>
  );
};

export default PersonalRetroCreateButton;
