import React from 'react';
import * as S from '@/styles/createRetro/Description.style';

const TeamRetroDescription: React.FC = () => {
  return (
    <>
      <S.DescriptionBorder>
        <li>
          <span style={{ fontWeight: 'bold' }}>Kudos 템플릿</span> : Kudos / Went Well / To Improve / Action Itmes
        </li>
        <li style={{ color: '#6C6C6C' }}>
          <span style={{ fontWeight: 'bold' }}>Kudos</span>: 팀원 서로에게 감사의 마음이나 긍정적 피드백 전달
        </li>
        <li style={{ color: '#6C6C6C' }}>
          <span style={{ fontWeight: 'bold' }}>Went Well</span>: 프로젝트나 스프린트 동안 잘 진행된 사항 공유
        </li>
        <li style={{ color: '#6C6C6C' }}>
          <span style={{ fontWeight: 'bold' }}>To Improve</span>: 개선이 필요한 부분을 솔직하게 공유
        </li>
        <li style={{ color: '#6C6C6C' }}>
          <span style={{ fontWeight: 'bold' }}>Action Items</span>: ‘To Improve’에서 도출된 문제를 해결하기 위한
          구체적인 행동 계획
        </li>
      </S.DescriptionBorder>
    </>
  );
};

export default TeamRetroDescription;
