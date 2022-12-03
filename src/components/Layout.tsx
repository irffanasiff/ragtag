import { Container, HStack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Navbar from './navigation/Navbar';
import { BsArrowUpRight } from 'react-icons/bs';
import { use, useEffect, useState } from 'react';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ children }) => {
  const [colors, setColors] = useState('black');
  const router = useRouter();
  useEffect(() => {
    console.log('path name - ', router.pathname);
    if (
      router.pathname === '/' ||
      router.pathname === '/marketplace' ||
      router.pathname === '/community' ||
      router.pathname === '/404'
    ) {
      setColors('black');
    } else {
      setColors('white');
    }
  }, [router]);
  return (
    <Container bg={colors} maxW='full' p='0' minH={'100vh'}>
      <Navbar />
      <Container p='0' display={'flex'} flexDirection='row' maxW={'8xl'}>
        {router.pathname === '/' || router.pathname === '/marketplace' ? (
          <VStack
            pt='20rem'
            pr={'10rem'}
            alignItems='start'
            fontSize={'20px'}
            gap='0.6rem'
          >
            <HStack
              as='button'
              onClick={() => {
                router.push('/marketplace');
              }}
              borderBottom={'1px solid black'}
              _hover={{ borderColor: 'white' }}
            >
              <Text>Marketplace</Text>
              <BsArrowUpRight width={12} />
            </HStack>
            <HStack
              as='button'
              onClick={() => {
                router.push('/community');
              }}
              borderBottom={'1px solid black'}
              _hover={{ borderColor: 'white' }}
            >
              <Text>Community</Text>
              <BsArrowUpRight width={12} />
            </HStack>
            <HStack
              as='button'
              onClick={() => {
                router.push('/about');
              }}
              borderBottom={'1px solid black'}
              _hover={{ borderColor: 'white' }}
            >
              <Text>About</Text>
              <BsArrowUpRight width={12} />
            </HStack>
          </VStack>
        ) : (
          <></>
        )}
        {children}
      </Container>
    </Container>
  );
};

export default Layout;
