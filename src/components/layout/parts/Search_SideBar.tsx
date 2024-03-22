import { List, PersonFill, PersonLinesFill } from 'react-bootstrap-icons';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

const Search_SideBar = () => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <div style={{ padding: '2px 10px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <PersonFill style={{ marginRight: '5px', color: '#939393' }} />
                <a id="leftside_seomem" style={{ color: '#939393', textDecoration: 'none' }}>
                  First Retro
                </a>
              </div>
            </div>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <div style={{ padding: '2px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <List style={{ margin: '0 5px' }} />
            <a id="leftside_persnalproject" style={{ color: '#111b47', textDecoration: 'none' }}>
              List of Members
            </a>
          </div>
          <div style={{ display: 'flex' }}>
            <InputGroup colorScheme="brand">
              <InputLeftElement pointerEvents="none">
                <PersonLinesFill color="gray.300" style={{ margin: 'auto 3px' }} />
              </InputLeftElement>
              <Input type="tel" placeholder="멤버명을 입력하세요" size="sm" />
            </InputGroup>
          </div>
        </div>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Search_SideBar;
