import { FC, useEffect, useState } from 'react';
import { PeopleFill, Person, PersonFill, PlusCircleFill } from 'react-bootstrap-icons';
import { IoIosListBox } from 'react-icons/io';
import { RiFolder6Fill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { GetRetrospectiveData } from '@/api/@types/Retrospectives';
import { queryGetRetrospective } from '@/api/retrospectivesApi/getRetrospective';
import DefaultHeader from '@/components/user/DefaultHeader';
import UserEmail from '@/components/user/UserEmail';
import UserNickname from '@/components/user/UserNickname';
import UserProfileImage from '@/components/user/UserProfileImage';
import { userNicknameState } from '@/recoil/user/userAtom';
import * as S from '@/styles/layout/layout.style';

interface Props {
  onClose: () => void;
}

const PageSideBar: FC<Props> = ({ onClose }) => {
  const [userNickname, setUserNickname] = useRecoilState(userNicknameState);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [retro, setRetro] = useState<GetRetrospectiveData['data']>();
  const navigate = useNavigate();

  const navigateToMy = () => {
    navigate('/my');
  };

  const fetchRetrospective = async () => {
    try {
      const data = await queryGetRetrospective({
        page: 0,
        size: 10,
        order: 'NEWEST',
        status: 'ALL',
        keyword: '',
        isBookmarked: false,
      });
      setRetro(data.data);
      console.log('retro', retro);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchRetrospective();
  }, [retro?.totalCount]);

  return (
    <S.SideBarBGContainer>
      <Flex justifyContent="flex-end" margin="5px">
        <Button onClick={onClose}>X</Button>
      </Flex>
      <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <DefaultHeader />
      </div>

      <S.LogoBox />
      <S.ProfileLink onClick={navigateToMy}>
        <UserProfileImage width="100px" />
        <S.MainName onClick={navigateToMy}>
          <UserNickname setUserNickname={setUserNickname} />
          {userNickname}
        </S.MainName>
        <S.MailName onClick={navigateToMy}>
          <UserEmail setUserEmail={setUserEmail} />
          {userEmail}
        </S.MailName>
      </S.ProfileLink>

      <Accordion allowMultiple color="black">
        {/* Project */}
        <AccordionItem border="1px solid gray">
          <AccordionButton>
            <S.MiniBox>
              <Flex alignItems="center" padding="2px 10px">
                <AccordionIcon /> <RiFolder6Fill style={{ marginRight: '5px', color: '#111b47' }} />
                <S.ProjectMenuText id="leftside_teamproject">Project </S.ProjectMenuText>
              </Flex>
            </S.MiniBox>
          </AccordionButton>
        </AccordionItem>

        {/* Personal Retro */}
        <AccordionItem border="1px solid gray">
          <AccordionButton>
            <S.MiniBox>
              <Flex alignItems="center" padding="2px 10px">
                <AccordionIcon />
                <Person style={{ marginRight: '5px' }} />
                <S.MenuText id="leftside_personaltoggle">Personal Retrospect</S.MenuText>
              </Flex>
              <S.DivingLine />
            </S.MiniBox>
          </AccordionButton>

          {retro &&
            retro.nodes
              .filter(item => item.teamId === null)
              .map(id => (
                <AccordionPanel pb={4}>
                  <a
                    id="leftside_persnalproject"
                    href={`sections?retrospectiveId=${id.id}&teamId=${id.teamId}`}
                    style={{ color: '#939393', textDecoration: 'none' }}
                  >
                    <Flex alignItems="center" padding="0 20px">
                      <PersonFill style={{ marginRight: '5px', color: '#939393' }} />
                      {id.title}
                    </Flex>
                  </a>
                </AccordionPanel>
              ))}
        </AccordionItem>

        {/* Team Retro */}
        <AccordionItem border="1px solid gray">
          <AccordionButton>
            <S.MiniBox>
              <Flex alignItems="center" padding="2px 10px">
                <AccordionIcon /> <PeopleFill style={{ marginRight: '5px' }} />
                <S.MenuText id="leftside_teamproject">Team Retrospect </S.MenuText>
              </Flex>

              <S.DivingLine />
            </S.MiniBox>
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Accordion allowMultiple>
              <AccordionItem>
                {retro &&
                  retro.nodes
                    .filter(item => item.teamId)
                    .map(id => (
                      <a
                        id="leftside_personaltoggle"
                        href={`sections?retrospectiveId=${id.id}&teamId=${id.teamId}`}
                        style={{ color: 'gray', textDecoration: 'none' }}
                      >
                        <AccordionButton>
                          <Flex alignItems="center" padding="2px 10px">
                            <PeopleFill style={{ marginRight: '5px', color: 'gray' }} />

                            {id.title}
                          </Flex>
                        </AccordionButton>
                      </a>
                    ))}
              </AccordionItem>
              {/* <Search_SideBar /> */}
            </Accordion>
          </AccordionPanel>

          {/* Create New Retro */}
        </AccordionItem>

        <AccordionItem border="1px solid gray">
          <Link to="/create">
            <AccordionButton>
              <Flex alignItems="center" padding="2px 10px">
                <PlusCircleFill style={{ marginRight: '5px' }} />
                <a style={{ color: '#111b47', textDecoration: 'none' }}>Create New Retrospective</a>
              </Flex>
            </AccordionButton>
          </Link>
        </AccordionItem>
        <AccordionItem borderBottom="1px solid gray">
          <Link to="/retrolist">
            <AccordionButton>
              <Flex alignItems="center" padding="2px 10px">
                <IoIosListBox style={{ marginRight: '5px' }} />
                <a style={{ color: '#111b47', textDecoration: 'none' }}>Go to Retrospect List</a>
              </Flex>
            </AccordionButton>
          </Link>
        </AccordionItem>
      </Accordion>
    </S.SideBarBGContainer>
  );
};

export default PageSideBar;
