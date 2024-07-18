import { useState, useEffect } from 'react';
import { CgTimelapse } from 'react-icons/cg'; // ing
import { FaRegCircleCheck } from 'react-icons/fa6'; // done
import { FiPlusCircle } from 'react-icons/fi';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { RiFolder6Fill } from 'react-icons/ri';
import { Center, Spinner } from '@chakra-ui/react';
import { GetRetrospectiveGroupsNodes } from '@/api/@types/Groups';
import { UserData } from '@/api/@types/Users';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { UserServices } from '@/api/services/User';
import Thumbnail from '@/assets/Thumbnail.png';
import Modal from '@/components/projectRetro/Modal';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/projectRetro/GroupList.styles';

interface GroupListProps {
  groups: { totalCount: number; nodes: GetRetrospectiveGroupsNodes[] };
}

const GroupList: React.FC<GroupListProps> = ({ groups }) => {
  // const [data, setData] = useState<GetRetrospectiveGroupsNodes[]>(groups.nodes);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const handlCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleEditModal = () => {
    setIsEditModalOpen(true);
  };

  const data = groups.nodes;

  const toast = useCustomToast();
  const [image, setImage] = useState<{ [key: number]: string }>({});
  const [user, setUser] = useState<UserData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const fetchUser = async () => {
    try {
      const data = await UserServices.get();
      setUser(data.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const filtered = data.filter(item => item.thumbnail !== null); // thumbnail이 null인 항목 필터링
    fetchUser();

    const fetchThumbnailsData = async (item: GetRetrospectiveGroupsNodes) => {
      try {
        if (item.thumbnail) {
          const imageResponse = await postImageToS3({
            filename: item.thumbnail,
            method: 'GET',
          });
          // console.log('s3 사진 받아오기 성공', imageResponse.data.preSignedUrl);
          setImage(prevImage => ({
            ...prevImage,
            [item.id]: imageResponse.data.preSignedUrl,
          }));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (filtered.length) {
      filtered.forEach(item => fetchThumbnailsData(item));
    } else {
      setIsLoading(false);
    }
  }, [data]);
  if (!user) return;

  if (isLoading) {
    return (
      <Center w="100%" h="100%" margin="20px 0">
        <Spinner />
      </Center>
    );
  }

  return (
    <>
      {isEditModalOpen && <Modal isClose={() => setIsEditModalOpen(false)} type="edit" groupId={6} />}
      {isCreateModalOpen && <Modal isClose={() => setIsCreateModalOpen(false)} type="create" />}

      {/* id,title,description,thumbnail 넘겨주기 -> 넘겨받은거 그대로 출력(수정하기 모달), deletemodal에 id 넘겨주기 */}
      <S.Container>
        <S.CreateBox>
          <FiPlusCircle size={40} style={{ color: '#a9a9a9', cursor: 'pointer' }} onClick={handlCreateModal} />
        </S.CreateBox>
        {data.map(group => (
          <S.Box key={group.id}>
            <S.Thumbnail src={group.thumbnail ? image[group.id] : Thumbnail} onLoad={handleImageLoad} />
            <S.InfoBox>
              <S.InnerBox>
                <RiFolder6Fill size={20} style={{ color: '#FFE500' }} />
                <S.TitleText>{group.title}</S.TitleText>
                <MdOutlineMoreHoriz
                  size={25}
                  onClick={handleEditModal}
                  style={{ alignItems: 'start', justifySelf: 'end', cursor: 'pointer', marginLeft: 'auto' }}
                />
              </S.InnerBox>
              {group.status === 'IN_PROGRESS' ? (
                <CgTimelapse
                  size={20}
                  style={{ alignItems: 'start', justifySelf: 'end', marginLeft: 'auto', color: '#57AD5A' }}
                />
              ) : (
                <FaRegCircleCheck
                  size={20}
                  style={{ alignItems: 'start', justifySelf: 'end', marginLeft: 'auto', color: '#FF1818' }}
                />
              )}
            </S.InfoBox>
          </S.Box>
        ))}
      </S.Container>
    </>
  );
};

export default GroupList;
