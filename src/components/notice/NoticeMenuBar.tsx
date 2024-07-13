import { useNavigate } from 'react-router-dom';
import { NoticeServices } from '@/api/services/NoticeBoard';
import { useCustomToast } from '@/hooks/useCustomToast';

import * as S from '@/styles/notice/noticeWrite.style';

interface NoticeMenuBarProps {
  title: string;
  content: string;
}

export const NoticeMenuBar = ({ title, content }: NoticeMenuBarProps) => {
  const TemporarySaveCount = 3;

  const toast = useCustomToast();
  const navigate = useNavigate();

  const handleNoticeWrite = async () => {
    try {
      await NoticeServices.create({
        title: title,
        content: content,
      });
      toast.success('공지사항이 추가되었습니다.');
    } catch (e) {
      toast.error(e);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
      {/* 메뉴바 */}
      <S.NoticeMenuBarStyle>
        <S.NoticeMenuTitle>공지사항</S.NoticeMenuTitle>
        <div style={{ textAlign: 'right' }}>
          <div style={{ marginTop: '27px', marginRight: '5vw' }}>
            <S.NoticeTemporarySaveButton>
              <span>저장 |</span>
              <span style={{ marginLeft: '5px' }}>{TemporarySaveCount}</span>
            </S.NoticeTemporarySaveButton>
            <S.NoticeSaveButton onClick={handleNoticeWrite}>저장</S.NoticeSaveButton>
            <S.NoticeCancelButton onClick={handleCancel}>취소</S.NoticeCancelButton>
          </div>
        </div>
      </S.NoticeMenuBarStyle>
    </>
  );
};
