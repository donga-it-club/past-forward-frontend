import * as S from '@/styles/projectRetro/GroupList.styles';

export interface RetroGroup {
  id: number;
  title: string;
  description: string;
  status: 'ING' | 'DONE';
}

interface GroupListProps {
  groups: RetroGroup[];
}

const GroupList: React.FC<GroupListProps> = ({ groups }) => {
  return (
    <S.Container>
      {groups.map(group => (
        <div key={group.id}>
          <p>{group.title}</p>
          <p>{group.description}</p>
        </div>
      ))}
    </S.Container>
  );
};

export default GroupList;
