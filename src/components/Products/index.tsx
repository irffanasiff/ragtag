import { Button, Center, Container, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const products = [];

const Products = () => {
  return (
    <Container maxW='full' color='black'>
      {products.length > 0 ? (
        'full'
      ) : (
        <Container py='6rem' maxW='full'>
          <Center gap='2rem' flexDir={'column'} mx={'auto'}>
            <Button>New Product</Button>
            <VStack>
              <Text fontSize={'20px'} fontWeight='600'>
                Upload new Product
              </Text>
              <Text color='blackAlpha.500'>Hello World</Text>
            </VStack>
            <Image src='/img.png' alt='lfg' width={500} height={500} />
          </Center>
        </Container>
      )}
    </Container>
  );
};

export default Products;
