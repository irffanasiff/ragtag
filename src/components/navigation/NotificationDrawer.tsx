import React from 'react';
import {
  Center,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { MdNotificationsActive } from 'react-icons/md';
import { FaEthereum } from 'react-icons/fa';
import * as PushAPI from '@pushprotocol/restapi';

const EthNotificationCard = () => {
  return (
    <HStack
      _hover={{ transform: 'scale(1.01)', transition: 'all 0.2s' }}
      transition='all 0.2s'
      bg={'yellow.100'}
      p='0.5rem'
      w='full'
      rounded={'xl'}
      color='black'
    >
      <Center bg={'purple.100'} rounded='full' p='1rem'>
        <FaEthereum color='red.800' />
      </Center>
      <VStack w='full' alignItems={'start'} gap='0.1rem' spacing='0'>
        <Text p='0' fontSize={'sm'}>
          You received a New Payment
        </Text>
        <HStack w='100%' justify={'space-between'}>
          <Text p='0' fontSize={'xs'}>
            Payer: <b>0x3jf..9uk</b>
          </Text>
          <Text p='0' fontSize={'xs'}>
            <b>0.5</b> eth
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
const MaticNotificationCard = () => {
  return (
    <HStack
      _hover={{ transform: 'scale(1.01)', transition: 'all 0.2s' }}
      transition='all 0.2s'
      bg={'blackAlpha.50'}
      p='0.5rem'
      w='full'
      rounded={'xl'}
      color='black'
    >
      <Center bg={'green.100'} rounded='full' p='1rem'>
        <MdNotificationsActive color='red.800' />
      </Center>
      <VStack w={'full'} alignItems={'start'} gap='0.1rem' spacing='0'>
        <Text p='0' fontSize={'sm'}>
          Received Royalty on resale
        </Text>
        <HStack w='100%' justify={'space-between'}>
          <Text p='0' fontSize={'xs'}>
            Payer: <b>0x45f..5uo</b>
          </Text>
          <Text p='0' fontSize={'xs'}>
            <b>0.005</b> eth
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
const NotificationDrawer = ({ onClose, isOpen }: any) => {
  const fetch = async (account: any) => {
    const spams = await PushAPI.user.getFeeds({
      user: `eip155:5:${account}`, // user address in CAIP
      spam: true,
      env: 'staging',
    });
    console.log(spams);
  };
  return (
    <Drawer isOpen={isOpen} placement='right' size={'sm'} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          color='black'
          onClick={() => {
            onClose();
          }}
        />
        <DrawerHeader color='black'>Notifications</DrawerHeader>
        <DrawerBody>
          <VStack
            p='1rem'
            rounded='2xl'
            alignItems='center'
            justify={'start'}
            gap='0.2rem'
          >
            <EthNotificationCard />
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <Text>Powered By Push Protocol</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NotificationDrawer;
