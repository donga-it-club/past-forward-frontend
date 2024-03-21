import styled from 'styled-components';

type ActivePartType = 'board' | 'list' | null;

interface ViewButtonProps {
  activePart: ActivePartType;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ViewButton = styled.button<ViewButtonProps>`
  display: inline-flex;
  border: 1px solid #949494;
  background: white;
  padding: 0;
  text-align: center;
  font-size: 50px;
  cursor: pointer;

  span {
    width: 140px;
    height: 40px;
    padding: 10px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .board-part {
    background-color: ${props => (props.activePart === 'board' ? '#111B47E6' : 'white')};
    color: ${props => (props.activePart === 'board' ? 'white' : '#505f98')};
    border-right: 1px solid #949494;
  }

  .list-part {
    background-color: ${props => (props.activePart === 'list' ? '#111B47E6' : 'white')};
    color: ${props => (props.activePart === 'list' ? 'white' : '#505f98')};
  }
`;

export const Text = styled.span`
  font-size: 13px;
  font-weight: bold;
  padding-left: 10px;
`;

export const Icon = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
