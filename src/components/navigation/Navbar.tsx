import { Container, HStack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import WalletButton from '../buttons/WalletButton';

const Navbar = () => {
  const [colors, setColors] = useState({ background: 'black', text: 'white' });
  const router = useRouter();
  const { address, isConnecting, isDisconnected } = useAccount();

  useEffect(() => {
    console.log('path name - ', router.pathname);
    if (
      router.pathname === '/' ||
      router.pathname === '/marketplace' ||
      router.pathname === '/community' ||
      router.pathname === '/404'
    ) {
      setColors({ background: 'black', text: 'white' });
    } else {
      setColors({ background: 'white', text: 'black' });
    }
  }, [router]);

  useEffect(() => {
    console.log('useeffect');
    if (address) {
      router.push('/dashboard');
    }
  }, [address]);

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
