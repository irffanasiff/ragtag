import {
  Center,
  Container,
  HStack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const Marketplace = () => {
  const router = useRouter();
  return (
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
        <VStack pr={'20rem'} alignItems='start' fontSize={'20px'} gap='0.6rem'>
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
        <Center
          flexDir='column'
          w='fit-content'
          mx='auto'
          pr='8rem'
          border={'2px solid red'}
              >
                  <HStack>
                      
                  </HStack>
        </Center>
      </HStack>
    </Container>
  );
};

export default Marketplace;
