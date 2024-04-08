import { Gear, PersonCircle } from 'react-bootstrap-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button, Drawer, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import LogoBox from './LogoBox';
import MenuBar from './MenuBar';
import PageSideBar from './PageSideBar';
import Alarm from '@/components/alarm/Alarm';
import * as S from '@/styles/layout/layout.style';

const PageNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <S.Container>
        <Button colorScheme="brand" onClick={onOpen}>
          <GiHamburgerMenu />
        </Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <PageSideBar />
          </DrawerContent>
        </Drawer>

        <LogoBox />
        <MenuBar />

        <S.RightBox>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <S.IconStyle border-radius="10px">
              <div
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  alignContent: 'center',
                  margin: '2px',
                }}
              >
                <PersonCircle style={{ width: '30px', margin: 'auto 3px' }} />
                <p style={{ margin: 'auto 10px' }}>Clayton Santos</p>
              </div>
            </S.IconStyle>

            <S.IconStyle border-radius="45%">
              <Gear />
            </S.IconStyle>
            <Alarm />
            <S.Link href="#">Logout</S.Link>
          </div>
        </S.RightBox>
      </S.Container>
    </>
  );
};

export default PageNavBar;
