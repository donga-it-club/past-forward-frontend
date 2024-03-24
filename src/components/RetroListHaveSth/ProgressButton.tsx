import { useState } from 'react';
import ArrowDown from '@/assets/ArrowDown.png';
import ArrowUp from '@/assets/ArrowUp.png';
import ProgressAll from '@/assets/Progress_All.png';
import ProgressBefore from '@/assets/Progress_Before.png';
import ProgressDone from '@/assets/Progress_Done.png';
import ProgressIng from '@/assets/Progress_Ing.png';
import * as S from '@/styles/RetroListHaveSth/ProgressButton.style';

const ProgressButton: React.FC = () => {
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
    setSelectedOption(option);
    setIsOpen(false);
  };

  const availableOptions = options.filter(option => option !== selectedOption);

  return (
    <div>
      <S.Box isOpen={isOpen}>
        <S.Button onClick={handleToggle}>
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
