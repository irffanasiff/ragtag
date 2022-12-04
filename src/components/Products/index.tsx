import {
  Button,
  Center,
  Container,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import AppContext from '../appContext';
import { ProductType } from '../AppState';
import ItemCard from '../ItemCard';
import CreateProduct from './CreateProduct';

const Products = () => {
  const { product } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW='full' color='black'>
      {product?.length! > 0 ? (
        product?.map((product: ProductType, key) => {
          return <ItemCard key={key} product={product as ProductType} />;
        })
      ) : (
        <Container py='6rem' pr='10rem' maxW='full'>
          <Modal size={'3xl'} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent rounded='2xl'>
              <ModalHeader color='black'>New Product</ModalHeader>
              <ModalCloseButton color='black' />
              <ModalBody>
                <CreateProduct />
              </ModalBody>
            </ModalContent>
          </Modal>
          <Center gap='2rem' flexDir={'column'} mx={'auto'}>
            <Button onClick={onOpen}>New Product</Button>
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
