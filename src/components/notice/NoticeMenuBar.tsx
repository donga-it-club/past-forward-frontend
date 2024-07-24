import { RiImageAddLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NoticeServices } from '@/api/services/NoticeBoard';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/notice/noticeWrite.style';

interface NoticeMenuBarProps {
  title: string;
  content: string;
}

export const NoticeMenuBar = ({ title, content }: NoticeMenuBarProps) => {
  const TemporarySaveCount = 88;

  const toast = useCustomToast();
  const navigate = useNavigate();

  // url의 쿼리 문자열에서 게시물 Id 값 가져오기
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const NoticeShowId = Number(query[1]);

  // 임시 게시글 작성 api 연결
  const handleNoticeWriteTemp = async () => {
    try {
      await NoticeServices.tempSave({
        title: title,
        content: content,
        status: 'TEMP',
        thumbnail: '',
      });
      toast.success('게시글이 임시저장 되었습니다.');
    } catch (e) {
      toast.error(e);
    }
  };

  // 게시글 작성 api 연결
  const handleNoticeWrite = async () => {
    try {
      await NoticeServices.create({
        title: title,
        content: content,
        status: 'PUBLISHED',
        thumbnail: '',
      });
      toast.success('공지사항이 추가되었습니다.');
      navigate('/');
    } catch (e) {
      toast.error(e);
    }
  };

  // 게시글 수정 api 연결
  const handleNoticeRevise = async () => {
    try {
      await NoticeServices.revise({
        id: NoticeShowId,
        title: title,
        content: content,
        status: 'PUBLISHED',
        thumbnail: '',
      });
      toast.success('공지사항이 수정되었습니다.');
      navigate(`/noticeShow?id=${NoticeShowId}`);
    } catch (e) {
      toast.error(e);
    }
  };

  // 게시물 작성 취소
  const handleCancel = () => {
    navigate('/');
  };

  // 게시물 이미지 api 연결
  const handleNoticeImg = () => {
    console.log('게시물 이미지를 등록합니다.');
    console.log(NoticeShowId);
  };

  return (
    <>
      {/* 메뉴바 */}
      <S.NoticeMenuBarStyle>
        <S.NoticeMenuTitle>공지사항</S.NoticeMenuTitle>{' '}
        <S.NoticeWriteButtonContainer>
          {isNaN(NoticeShowId) ? (
            <>
              {/* 게시물 임시저장 */}
              <S.NoticeTempSaveButton
                onClick={handleNoticeWriteTemp}
              >{`저장 | ${TemporarySaveCount}`}</S.NoticeTempSaveButton>

              {/* 게시물 저장 */}
              <S.NoticeSaveButton onClick={handleNoticeWrite}>저장</S.NoticeSaveButton>
            </>
          ) : (
            <>
              {/* 게시물 수정 */}
              <S.NoticeReviseButton onClick={handleNoticeRevise}>수정</S.NoticeReviseButton>
            </>
          )}
          {/* 게시물 작성 취소 */}
          <S.NoticeCancelButton onClick={handleCancel}>취소</S.NoticeCancelButton>
        </S.NoticeWriteButtonContainer>
        {/* 게시물 객체 추가란*/}
        <S.NoticeAddObjectsContainer>
          <S.NoticeMenuLine></S.NoticeMenuLine>
          <div style={{ padding: '0px 2vw' }}>
            {/* 게시물 사진 추가하기 */}
            <S.NoticeAddObjectsStyle onClick={handleNoticeImg}>
              <S.NoticeAddObjectsIcon>
                <RiImageAddLine size={50} color="#cfcfcf" />
              </S.NoticeAddObjectsIcon>
              <S.NoticeAddObjectsText>사진</S.NoticeAddObjectsText>
            </S.NoticeAddObjectsStyle>
          </div>
        </S.NoticeAddObjectsContainer>
      </S.NoticeMenuBarStyle>
    </>
  );
};
