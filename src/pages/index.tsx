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
        <HStack
          alignItems={'center'}
          justify='start'
          w='100%'
          maxW='8xl'
          mx='auto'
        >
          <VStack
            pr={'20rem'}
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
          <Center flexDir='column' w='fit-content' mx='auto' pr='8rem'>
            <Heading
              lineHeight={'110px'}
              maxW='32rem'
              fontWeight={'900'}
              fontSize='120px'
            >
              <ReactTextTransition
                springConfig={presets.stiff}
                style={{ margin: '0 2px', lineHeight: '110px' }}
                inline
              >
                {texts[index % texts.length]}
              </ReactTextTransition>
              DIGITAL
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
                ASSETS
              </Box>
            </Heading>
            <Wrap direction={'row'} maxW='32rem' py='1rem' mx={'auto'}>
              {items.map((item, key) => {
                return (
                  <Center
                    key={key}
                    color='white'
                    border='1px solid white'
                    rounded='full'
                    p='0.4rem 1rem'
                  >
                    {item}
                  </Center>
                );
              })}
            </Wrap>
          </Center>
        </HStack>
      </Container>
    </>
  );
};

export default Home;
