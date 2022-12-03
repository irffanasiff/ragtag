import {
  Box,
  Center,
  Container,
  Heading,
  keyframes,
  HStack,
  Wrap,
  VStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ReactTextTransition, { presets } from 'react-text-transition';
import { BsArrowUpRight } from 'react-icons/bs';
import { useRouter } from 'next/router';

const animationKeyframes = keyframes`
    from {
      background-position: 0 0;
    to {
      background-position: 100% 100%;
    }
  `;
const animation1 = `${animationKeyframes} 6s infinite alternate-reverse`;

const Home: NextPage = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const texts = ['BUY', 'SELL', 'RENT'];
  const items = [
    'NFTs',
    'Courses',
    'Art',
    'Thumbnails',
    'Songs',
    'Books',
    'Videos',
    'Designs',
  ];
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <Container
        pt='12rem'
        pb='21.45rem'
        bg='black'
        color='white'
        h='100%'
        maxW='full'
      >
        <Heading
          mx='auto'
          lineHeight={'110px'}
          maxW='32rem'
          fontWeight={'900'}
          fontSize='120px'
        >
          <Box
            bgGradient='linear( to-l, #FFFFFF 4.33%, #D198F6 16.23%, #D1FC3F 27.23%, #FFFFFF 31.64%)'
            bgClip='text'
            backgroundPosition={'-100%'}
            backgroundSize={'300%'}
            animation={animation1}
            lineHeight={'110px'}
            maxW='32rem'
            fontWeight={'900'}
            fontSize='120px'
          >
            WAGMI
          </Box>
        </Heading>
        <Center w='full'>
          <Text fontSize={'xl'}>We are making it 😜</Text>
        </Center>
      </Container>
    </>
  );
};

export default Home;
