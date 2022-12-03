import {
  Center,
  Container,
  HStack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { useAccount } from 'wagmi';
import ItemCard from '../components/ItemCard';

const Marketplace = () => {
  const router = useRouter();

  return (
    <Container bg='black' color='white' maxW='full'>
      <Center py='8rem' mx='auto' maxW='5xl'>
        <Wrap border='2px solid red' alignItems={'start'} gap='3rem'>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </Wrap>
      </Center>
    </Container>
  );
};

export default Marketplace;
