import { useState } from 'react';
import ArrowDown from '@/assets/ArrowDown.png';
import ArrowUp from '@/assets/ArrowUp.png';
import NewestIcon from '@/assets/Newest.png';
import OldestIcon from '@/assets/Oldest.png';
import * as S from '@/styles/RetroListHaveSth/OrderButton.styles';

const OrderButton: React.FC = () => {
  const order = ['Newest', 'Oldest'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(order[0]);

  const orderImage: Record<string, string> = {
    Newest: NewestIcon,
    Oldest: OldestIcon,
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOrder(option);
    setIsOpen(false);
  };

  const availableOrders = order.filter(option => option !== selectedOrder);
  return (
    <>
      <S.Container>
        <S.Box isOpen={isOpen}>
          <S.Button onClick={handleToggle}>
            <S.OrderIcon src={orderImage[selectedOrder]} /> <S.Text>{selectedOrder}</S.Text>
            <S.ArrowIcon src={isOpen ? ArrowUp : ArrowDown} />
          </S.Button>
        </S.Box>
        {isOpen && (
          <S.ListBox>
            {availableOrders.map((option, index) => (
              <S.DropBox key={index} onClick={() => handleOptionClick(option)}>
                <S.OrderIcon src={orderImage[option]} />
                <S.Text> {option}</S.Text>
              </S.DropBox>
            ))}
          </S.ListBox>
        )}
      </S.Container>
    </>
  );
};

export default OrderButton;
