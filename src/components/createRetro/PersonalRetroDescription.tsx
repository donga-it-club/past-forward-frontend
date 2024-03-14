import React from 'react';
import * as S from '@/styles/createRetro/Description.style';

const PersonalRetroDescription: React.FC = () => {
  return (
    <>
      <S.DescriptionBorder>
        <li>회고를 통해 자기평가 및 학습 가능</li>
        <li>강점/약점을 인식하고 지속적인 성장을 이끌어냄</li>
        <li>목표 추적/목표 달성에 대한 효율 증가</li>
        <li>자기개발 계획 수립</li>
        <li>자신에 대한 이해를 얻는 것에 기여</li>
      </S.DescriptionBorder>
    </>
  );
};

export default PersonalRetroDescription;
