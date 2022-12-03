import { Center, Container, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import WalletButton from '../buttons/WalletButton';

const Navbar = () => {
  return (
    <Container py='1.6rem' bg='black' color='white' maxW='full'>
      <HStack
        maxW={'8xl'}
        mx='auto'
        justify='space-between'
        alignItems={'center'}
      >
        <Text fontSize={'2xl'} fontWeight='600'>
          ragtag
        </Text>
        <WalletButton />
      </HStack>
    </Container>
  );
};

export default Navbar;
