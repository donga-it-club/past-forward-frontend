import { IoMdCheckmarkCircle } from 'react-icons/io';

const NotTeamMemberModal = () => {
  return (
    <div style={{ width: '450px', margin: '0 auto', display: 'flex', padding: '0 auto' }}>
      <IoMdCheckmarkCircle size={100} color="green" />
      <div style={{ margin: 'auto 20px' }}>
        <p>Personal 회고에서는 팀원 관리 창이 없습니다.</p>
      </div>
    </div>
  );
};

export default NotTeamMemberModal;
