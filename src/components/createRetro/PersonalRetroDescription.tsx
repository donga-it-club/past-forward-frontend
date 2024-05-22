import React from 'react';
import * as S from '@/styles/createRetro/Description.style';

const PersonalRetroDescription: React.FC = () => {
  return (
    <>
      <S.DescriptionBorder>
        <li>
          <span style={{ fontWeight: 'bold' }}>KPT 템플릿</span> : Keep / Problem / Try
        </li>
        <li style={{ color: '#6C6C6C' }}>
          <span style={{ fontWeight: 'bold' }}>Keep</span>: 유지하고 싶은 좋은 습관이나 성과
        </li>
        <li style={{ color: '#6C6C6C' }}>
          <span style={{ fontWeight: 'bold' }}>Problem</span>: 프로젝트 중 발생한 문제점이나 개선이 필요한 부분
        </li>
        <li style={{ color: '#6C6C6C' }}>
          <span style={{ fontWeight: 'bold' }}>Try</span>: ‘Problem’에서 도출된 문제를 해결하기 위한 새로운 제안
        </li>
        <li style={{ color: '#6C6C6C' }}>
          <span style={{ fontWeight: 'bold' }}>Action Items</span>: 실제 개선을 이루기 위한 구체적인 행동 계획
        </li>
      </S.DescriptionBorder>
    </>
  );
};

export default PersonalRetroDescription;
