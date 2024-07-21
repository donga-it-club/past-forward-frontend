import { GetRetrospectiveGroupNodes } from '@/api/@types/Groups';
interface GroupBoardListProps {
  data: GetRetrospectiveGroupNodes[] | null;
}

const GroupBoardList: React.FC<GroupBoardListProps> = ({ data }) => {
  return <>{data && <p>{data[0].title}</p>}</>;
};

export default GroupBoardList;
