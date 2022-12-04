import {
  Center,
  Container,
  HStack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { useAccount } from 'wagmi';
import AppContext from '../components/appContext';
import ItemCard from '../components/ItemCard';
import { subgraphQuery } from '../util/getAllNFTs';

const Marketplace = () => {
  const [product, setProduct] = useState([]);
  //const { product } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    function FETCH_TOKENS() {
      return ` query MyQuery {
         users {
           id
           price
           rentPrice
           rentable
           supply
           tokenAddress
           tokenId
           tokenURI
           address
       }
     }`;
    }
    subgraphQuery(FETCH_TOKENS())
      .then((res) => {
        setProduct(res.users);
      })
      .catch((err) => {
        console.log('graph error - ', err);
      });
  }, []);

  return (
    <Container bg='black' color='white' maxW='full'>
      <Center py='8rem' mx='auto' maxW='5xl'>
        <Wrap alignItems={'start'} gap='3rem'>
          {product?.map((product, key) => {
            console.log('product on market place -', product);
            return <ItemCard key={key} product={product} />;
          })}
        </Wrap>
      </Center>
    </Container>
  );
};

export default Marketplace;
