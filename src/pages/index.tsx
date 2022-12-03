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
  Flex,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
// @ts-ignore
import CircleType from 'circletype';
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
    const circleType = new CircleType(document.getElementById('circularText'));
    circleType.radius(36).dir(-1);
  }, []); //empty array will run only once (after the initial render)

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
          <Box
            display={'flex'}
            h='30rem'
            alignItems={'end'}
            justifyContent='end'
            pl='10rem'
          >
            <Text
              fontWeight={'700'}
              fontSize={{ base: '7px', md: '13px' }}
              textTransform={'uppercase'}
              className='text'
              textColor={'white'}
              id='circularText'
            >
              {' '}
              SELL ASSETS AS NFTS • SELL ASSETS AS NFTS •{' '}
              {/* {props.roundedText}{' '}•{' '} {props.roundedText}{' '}•{' '} */}
            </Text>
          </Box>
        </HStack>
      </Container>
    </>
  );
};

export default Home;
