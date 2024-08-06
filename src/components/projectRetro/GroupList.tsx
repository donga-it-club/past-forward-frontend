import { useState, useEffect } from 'react';
import { CgTimelapse } from 'react-icons/cg'; // ing
import { FaRegCircleCheck } from 'react-icons/fa6'; // done
import { FiPlusCircle } from 'react-icons/fi';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { RiFolder6Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';
import { GetRetrospectiveGroupsNodes } from '@/api/@types/Groups';
import { UserData } from '@/api/@types/Users';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { UserServices } from '@/api/services/User';
import Thumbnail from '@/assets/Thumbnail.png';
import Modal from '@/components/projectRetro/Modal';
import * as S from '@/styles/projectRetro/GroupList.styles';

interface GroupListProps {
  groups: { totalCount: number; nodes: GetRetrospectiveGroupsNodes[] };
}

interface GroupData {
  id: number;
  title: string;
  description: string;
  thumbnail: string | null;
  status: string;
}

const GroupList: React.FC<GroupListProps> = ({ groups }) => {
  const data = groups.nodes;
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [image, setImage] = useState<{ [key: number]: string }>({});
  const [user, setUser] = useState<UserData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [seletedGroupData, setSelectedGroupData] = useState<GroupData>({
    id: 0,
    title: '',
    description: '',
    thumbnail: '',
    status: 'IN_PROGRESS',
  });

  const handleGroupData = (
    id: number,
    title: string,
    description: string,
    thumbnail: string | null,
    status: string,
  ) => {
    setSelectedGroupData({ id, title, description, thumbnail, status });
  };

  const handlCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const fetchUser = async () => {
    try {
      const data = await UserServices.get();
      setUser(data.data);
    } catch (error) {
      console.error(error);
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
      {isEditModalOpen && (
        <Modal isClose={() => setIsEditModalOpen(false)} type="edit" selectedGroupData={seletedGroupData} />
      )}
      {isCreateModalOpen && <Modal isClose={() => setIsCreateModalOpen(false)} type="create" />}
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
                <S.TitleText onClick={() => navigate(`/group-boards?id=${group.id}`)}>{group.title}</S.TitleText>
                <MdOutlineMoreHoriz
                  size={25}
                  style={{ alignItems: 'start', justifySelf: 'end', cursor: 'pointer', marginLeft: 'auto' }}
                  onClick={() => {
                    handleEditModal();
                    handleGroupData(group.id, group.title, group.description, group.thumbnail, group.status);
                  }}
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
