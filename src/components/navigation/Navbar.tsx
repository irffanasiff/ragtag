import {
  background,
  Center,
  Container,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import WalletButton from '../buttons/WalletButton';

const Navbar = () => {
  const [colors, setColors] = useState({ background: 'black', text: 'white' });
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/' || '/marketplace') {
      setColors({ background: 'black', text: 'white' });
    } else {
      setColors({ background: 'white', text: 'black' });
    }
  }, [router]);

  return (
    <Container
      py='1.6rem'
      bg={colors.background}
      color={colors.text}
      maxW='full'
    >
      <HStack
        maxW={'8xl'}
        mx='auto'
        justify='space-between'
        alignItems={'center'}
      >
        <Text
          as='button'
          onClick={() => {
            router.push('/');
          }}
          fontSize={'2xl'}
          fontWeight='600'
        >
          ragtag
        </Text>
        <WalletButton />
      </HStack>
    </Container>
  );
};

export default Navbar;
