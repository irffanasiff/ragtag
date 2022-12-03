import {
  Container,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Text,
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
            pt='2rem'
            pr='10rem'
            gap='0.7rem'
            alignItems={'start'}
          >
            <Text fontWeight={'500'} fontSize='18px'>
              Items
            </Text>
            <Tab
              color='black'
              fontSize='16px'
              p='2 4'
              _selected={{ bg: 'gray.100', borderRadius: '4px' }}
            >
              Products
            </Tab>
            <Tab
              fontSize='16px'
              p='2 4'
              _selected={{ bg: 'gray.100', borderRadius: '4px' }}
            >
              Customers
            </Tab>
            <Tab
              fontSize='16px'
              p='2 4'
              _selected={{ bg: 'gray.100', borderRadius: '4px' }}
            >
              Analytics
            </Tab>
            <Text fontWeight={'500'} fontSize='18px'>
              Profile
            </Text>
            <Tab
              fontSize='16px'
              p='2 4'
              _selected={{ bg: 'gray.100', borderRadius: '4px' }}
            >
              Profile
            </Tab>{' '}
            <Tab
              fontSize='16px'
              p='2 4'
              _selected={{ bg: 'gray.100', borderRadius: '4px' }}
            >
              Setting
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
