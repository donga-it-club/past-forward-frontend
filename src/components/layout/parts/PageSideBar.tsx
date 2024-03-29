import { PeopleFill, Person, PersonCircle, PersonFill, PlusCircleFill } from 'react-bootstrap-icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import Search_SideBar from './Search_SideBar';
import * as S from '@/styles/layout/layout.style';

const PageSideBar = () => {
  return (
    <S.SideBarBGContainer>
      <S.LogoBox />
      <S.ProfileLink>
        <PersonCircle style={{ width: '100', height: '100', color: '#C3CAD9' }} />
        <a href="/my">
          <S.MainName>Clayton Santos</S.MainName>
          <S.MailName>Clayton@gmail.com</S.MailName>
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
                </div>

                <S.DivingLine />
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
                    <a id="leftside_persnalproject" style={{ color: '#111b47', textDecoration: 'none' }}>
                      Team Retro
                    </a>
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
