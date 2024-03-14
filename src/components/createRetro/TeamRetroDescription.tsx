import React from 'react';
import * as S from '@/styles/createRetro/Description.style';

const TeamRetroDescription: React.FC = () => {
  return (
    <>
      <S.DescriptionBorder>
        <li>팀원들 간의 의사소통 강화, 협력 촉진</li>
        <li>문제와 성과를 공유하고 각자의 관점 이해</li>
        <li>문제 식별하고 이에 대한 해결책 공유</li>
        <li>회고를 통해 미래 대응, 지속적인 개선 가능</li>
        <li>피드백으로 지속적인 개선 가능</li>
      </S.DescriptionBorder>
    </>
  );
};

export default TeamRetroDescription;
