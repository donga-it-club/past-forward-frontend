import { useState } from 'react';
import ArrowDown from '@/assets/ArrowDown.png';
import ArrowUp from '@/assets/ArrowUp.png';
import ProgressAll from '@/assets/Progress_All.png';
import ProgressBefore from '@/assets/Progress_Before.png';
import ProgressDone from '@/assets/Progress_Done.png';
import ProgressIng from '@/assets/Progress_Ing.png';
import * as S from '@/styles/RetroList/ProgressButton.style';

interface StatusProps {
  handleStatus: (option: 'ALL' | 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED') => void;
}

const ProgressButton: React.FC<StatusProps> = ({ handleStatus }) => {
  const options = ['ALL', 'Before', 'Ing', 'Done'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const progressImage: Record<string, string> = {
    ALL: ProgressAll,
    Before: ProgressBefore,
    Ing: ProgressIng,
    Done: ProgressDone,
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    const status: { [key: string]: string } = {
      ALL: 'ALL',
      Before: 'NOT_STARTED',
      Ing: 'IN_PROGRESS',
      Done: 'COMPLETED',
    };
    setSelectedOption(option);
    handleStatus(status[option] as 'ALL' | 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED');
    setIsOpen(false);
  };

  const availableOptions = options.filter(option => option !== selectedOption);

  return (
    <div>
      <S.Box isOpen={isOpen}>
        <S.Button onClick={handleToggle} id="rl_all">
          <S.ProgressIcon src={progressImage[selectedOption]} />
          <S.Text>{selectedOption}</S.Text>
          <S.ArrowIcon src={isOpen ? ArrowUp : ArrowDown} />
        </S.Button>
      </S.Box>
      {isOpen && (
        <S.ListBox>
          {availableOptions.map((option, index) => (
            <S.DropBox key={index} onClick={() => handleOptionClick(option)}>
              <S.ProgressIcon src={progressImage[option]} />
              <S.Text>{option}</S.Text>
            </S.DropBox>
          ))}
        </S.ListBox>
      )}
    </div>
  );
};

export default ProgressButton;
