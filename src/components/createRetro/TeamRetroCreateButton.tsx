import React, { useState } from 'react';
import styled from 'styled-components';
import PlusIconImg from '@/assets/PlusIcon_light.png';

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

const CreateButtonBackground = styled.div`
  width: 24rem;
  height: 12rem;
  border-radius: 1rem;
  background-color: rgba(17, 27, 71, 1);
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
  color: ${props => props.color};
  font-weight: ${props => props.weight || 'normal'};
  margin-top: 1rem;
`;

const TeamRetroCreateButton: React.FC = () => {
  return (
    <>
      <CreateButtonBorder>
        <CreateButtonBackground>
          <CenteredContainer>
            <PlusIcon src={PlusIconImg} />
            <Text color="white">Team Retrospect</Text>
            <Text color="rgba(175, 175, 175, 1)" weight="100">
              Kudos / Went Well / To Improve / Action Items
            </Text>
          </CenteredContainer>
        </CreateButtonBackground>
      </CreateButtonBorder>
    </>
  );
};

export default TeamRetroCreateButton;
