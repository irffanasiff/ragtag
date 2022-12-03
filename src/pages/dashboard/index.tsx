import {
  Container,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from '@chakra-ui/react';
import React from 'react';
import Products from '../../components/Products';
import Profile from '../../components/Profile';

const index = () => {
  return (
    <Container bg='white' maxW='full' p='0'>
      <Container p='0' maxW='8xl'>
        <Tabs orientation='vertical' variant='unstyled'>
          <TabList
            background='white'
            color='black'
            pb='30rem'
            pt='5rem'
            pr='10rem'
            gap='1rem'
            alignItems={'start'}
          >
            <Tab
              color='black'
              fontSize='20px'
              p='0'
              borderBottom={'2px solid white'}
              _selected={{ borderBottomColor: 'black' }}
            >
              Products
            </Tab>
            <Tab
              fontSize='20px'
              p='0'
              borderBottom={'2px solid white'}
              _selected={{ borderBottomColor: 'black' }}
            >
              Customers
            </Tab>
            <Tab
              fontSize='20px'
              p='0'
              borderBottom={'2px solid white'}
              _selected={{ borderBottomColor: 'black' }}
            >
              Analytics
            </Tab>
            <Tab
              fontSize='20px'
              p='0'
              borderBottom={'2px solid white'}
              _selected={{ borderBottomColor: 'black' }}
            >
              Profile
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Products />
            </TabPanel>
            <TabPanel>Customers</TabPanel>
            <TabPanel>Analytics</TabPanel>
            <TabPanel>
              <Profile />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Container>
  );
};

export default index;
