import {
  Box,
  Center,
  HStack,
  Tag,
  Text,
  useDisclosure,
  Wrap,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import { ProductType } from './AppState';

const ItemCard = ({ product }: { product: ProductType }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal size={'3xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded='2xl'>
          <ModalHeader color='black'>New Product</ModalHeader>
          <ModalCloseButton color='black' />
          <ModalBody>Hello</ModalBody>
        </ModalContent>
      </Modal>
      <Box
        onClick={onOpen}
        as='button'
        display='flex'
        alignItems={'start'}
        justifyContent='space-between'
        flexDir={'column'}
        rounded={'xl'}
        gap='1rem'
        w={'fit-content'}
        padding='0.8rem'
        bg='white'
        color='black'
        transition='all 0.3s'
        _hover={{
          transform: 'scale(1.02)',
          transition: 'all 0.5s',
        }}
      >
        <Center rounded={'xl'} shadow='2xl'>
          <Image
            src={product.thumbnail!}
            alt='random'
            width={280}
            height={280}
            style={{ borderRadius: '1rem' }}
          />
        </Center>
        <HStack justifyContent={'space-between'} w='full'>
          <Text fontWeight={'500'}>{product.name}</Text>
          <Text>
            {product.cost} {product.token}
          </Text>
        </HStack>
        <HStack justifyContent={'space-between'} w='full'>
          <Wrap>
            <Tag rounded={'full'} colorScheme='purple'>
              {product.category}
            </Tag>
          </Wrap>
        </HStack>
      </Box>
    </>
  );
};

export default ItemCard;
