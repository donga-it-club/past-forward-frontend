import { useEffect, useState } from 'react';
import { PeopleFill, Person, PersonFill, PlusCircleFill } from 'react-bootstrap-icons';
import { IoArrowUndoSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { GetRetrospectiveData } from '@/api/@types/Retrospectives';
import { queryGetRetrospective } from '@/api/retrospectivesApi/getRetrospective';
import UserEmail from '@/components/user/UserEmail';
import UserNickname from '@/components/user/UserNickname';
import UserProfileImage from '@/components/user/UserProfileImage';
import { userNicknameState } from '@/recoil/user/userAtom';
import * as S from '@/styles/layout/layout.style';

const PageSideBar = () => {
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
      <S.LogoBox />
      <S.ProfileLink onClick={navigateToMy}>
        <UserProfileImage width="100px" />
        {/* <PersonCircle style={{ width: '100', height: '100', color: '#C3CAD9' }} /> */}
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
                  <Flex alignItems="center" padding="0 20px">
                    <PersonFill style={{ marginRight: '5px', color: '#939393' }} />
                    <a
                      id="leftside_persnalproject"
                      href={`sections?retrospectiveId=${id.id}&teamId=${id.teamId}`}
                      style={{ color: '#939393', textDecoration: 'none' }}
                    >
                      {id.title}
                    </a>
                  </Flex>
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
                      <AccordionButton>
                        <Flex alignItems="center" padding="2px 10px">
                          <PeopleFill style={{ marginRight: '5px', color: 'gray' }} />

                          <a
                            id="leftside_personaltoggle"
                            href={`sections?retrospectiveId=${id.id}&teamId=${id.teamId}`}
                            style={{ color: 'gray', textDecoration: 'none' }}
                          >
                            {id.title}
                          </a>
                        </Flex>
                      </AccordionButton>
                    ))}
              </AccordionItem>
              {/* <Search_SideBar /> */}
            </Accordion>
          </AccordionPanel>

          {/* Create New Retro */}
        </AccordionItem>
        <AccordionItem border="1px solid gray">
          <AccordionButton>
            <Flex alignItems="center" padding="2px 10px">
              <IoArrowUndoSharp style={{ marginRight: '10px' }} size={15} />
              <a href="/retrolist" style={{ color: '#111b47', textDecoration: 'none' }}>
                Move to the List
              </a>
            </Flex>
          </AccordionButton>
        </AccordionItem>
        <AccordionItem border="1px solid gray">
          <AccordionButton>
            <Flex alignItems="center" padding="2px 10px">
              <PlusCircleFill style={{ marginRight: '5px' }} />
              <a id="leftside_personaltoggle" href="/create" style={{ color: '#111b47', textDecoration: 'none' }}>
                Create New Retro
              </a>
            </Flex>
          </AccordionButton>
        </AccordionItem>
      </Accordion>
    </S.SideBarBGContainer>
  );
};

export default PageSideBar;
