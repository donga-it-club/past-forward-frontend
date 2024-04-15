import { useState } from 'react';
import Background from '@/assets/Background.png';
import Image1 from '@/assets/Template4-1.png';
import Image2 from '@/assets/Template4-2.png';
import * as S from '@/styles/Main/Template4.styles';

const Template4: React.FC = () => {
  const images = [Image1, Image2]; // 이미지 파일명에 따라 수정하세요
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>미리보기</S.Title>
      </S.TitleBox>
      <S.Line></S.Line>
      <S.SubtitleBox>
        <S.SubTitle>세부 설명이 포함된 Preview</S.SubTitle>
      </S.SubtitleBox>
      <S.SliderContainer>
        <S.BackgroundImg src={Background} />
        <S.DotContainer>
          {images.map((_, index) => (
            <S.Dot key={index} active={index === activeIndex} onClick={() => handleDotClick(index)} />
          ))}
        </S.DotContainer>
        {images.map((image, index) => (
          <S.Img key={index} src={image} active={index === activeIndex} />
        ))}
      </S.SliderContainer>
    </S.Container>
  );
};

export default Template4;
