import { useState } from 'react';
import { PeopleFill, Person, PersonCircle, PersonFill, PlusCircleFill } from 'react-bootstrap-icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import Search_SideBar from './Search_SideBar';
import UserEmail from '@/components/user/UserEmail';
import UserNickname from '@/components/user/UserNickname';
import { userNicknameState } from '@/recoil/user/userAtom';
import * as S from '@/styles/layout/layout.style';

const PageSideBar = () => {
  const [userNickname, setUserNickname] = useRecoilState(userNicknameState);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  return (
    <S.SideBarBGContainer>
      <S.LogoBox />
      <S.ProfileLink>
        <PersonCircle style={{ width: '100', height: '100', color: '#C3CAD9' }} />
        <a href="/my">
          <S.MainName>
            <UserNickname setUserNickname={setUserNickname} />
            {userNickname}
          </S.MainName>
          <S.MailName>
            <UserEmail setUserEmail={setUserEmail} />
            {userEmail}
          </S.MailName>
        </a>
      </S.ProfileLink>

      <Accordion defaultIndex={[0]} allowMultiple color="black">
        {/* Personal Retro */}
        <AccordionItem border="1px solid gray">
          <h2>
            <AccordionButton>
              <S.MiniBox>
                <div style={{ padding: '2px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <AccordionIcon />
                    <Person style={{ marginRight: '5px' }} />
                    <a id="leftside_personaltoggle" style={{ color: '#111b47', textDecoration: 'none' }}>
                      Personal Retro
                    </a>
                  </div>
                  <S.DivingLine />
                </div>
              </S.MiniBox>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div style={{ padding: '2px 10px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <PersonFill style={{ marginRight: '5px', color: '#939393' }} />
                <a
                  id="leftside_persnalproject"
                  href="/WriteRetroTeamPage"
                  style={{ color: '#939393', textDecoration: 'none' }}
                >
                  Personal Project
                </a>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>

        {/* Team Retro */}
        <AccordionItem border="1px solid gray">
          <h2>
            <AccordionButton>
              <S.MiniBox>
                <div style={{ padding: '2px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <AccordionIcon /> <PeopleFill style={{ marginRight: '5px' }} />
                    <S.MenuText id="leftside_teamproject">Team Retro </S.MenuText>
                  </div>
                </div>
                <S.DivingLine />
              </S.MiniBox>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <div style={{ padding: '2px 10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <PersonFill style={{ marginRight: '5px', color: 'gray' }} />
                        <a
                          id="leftside_personaltoggle"
                          href="/WriteRetroTeamPage"
                          style={{ color: 'gray', textDecoration: 'none' }}
                        >
                          Team Project
                        </a>
                      </div>
                    </div>
                  </AccordionButton>
                </h2>
              </AccordionItem>
              <Search_SideBar />
            </Accordion>
          </AccordionPanel>

          {/* Create New Retro */}
        </AccordionItem>
        <AccordionItem border="1px solid gray">
          <h2>
            <AccordionButton>
              <div style={{ padding: '2px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <PlusCircleFill style={{ marginRight: '5px' }} />
                  <a
                    id="leftside_personaltoggle"
                    href="/WriteRetroTeamPage"
                    style={{ color: '#111b47', textDecoration: 'none' }}
                  >
                    Create New Retro
                  </a>
                </div>
              </div>
            </AccordionButton>
          </h2>
        </AccordionItem>
      </Accordion>
    </S.SideBarBGContainer>
  );
};

export default PageSideBar;
