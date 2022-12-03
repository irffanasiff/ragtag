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
import React from 'react';
import CreateProduct from './CreateProduct';

const products = [];

const Products = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW='full' color='black'>
      {products.length > 0 ? (
        'full'
      ) : (
        <Container py='6rem' maxW='full'>
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
