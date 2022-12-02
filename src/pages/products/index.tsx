import {
  Box,
  Container,
  Heading,
  Stack,
  Button,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Divider,
  ButtonGroup,
  Flex,
  Spacer,
  HStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import noProducts from '../../images/NoProducts.png';
import PostProductModal from '@/components/modals/PostProductModal';
import ProductDetails from '../../data/Product';
import vercel from '../../../public/assets/product.png';
import ProductCard from '@/components/ProductCard';

type IProduct = {
  reviewStars: number;
  reviewCount: number;
  name: string;
  description: string;
  creatorName: string;
  creatorWalletAddress: string;
  price: number;
  currencyLogo: string;
};

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>();
  const { onClose, onOpen, isOpen } = useDisclosure();
  console.log('products', ProductDetails);
  useEffect(() => {
    setProducts(ProductDetails);
  }, []);

  if (products?.length === 0) {
    return (
      <Container maxW="2xl" bg="white" centerContent justifyContent="center">
        <PostProductModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        <Box>
          <Stack spacing={6} justifyContent="center" align="center">
            <Box
              as="button"
              px={4}
              py={2}
              color="white"
              fontWeight="bold"
              borderRadius="md"
              bgGradient="radial(#D1FC3F 8.11%,#000000 75%)"
              _hover={{
                bgGradient: 'linear(to-r, red.500, yellow.500)',
              }}
              onClick={onOpen}
            >
              New Product
            </Box>
            <Heading as="h2" size="xl">
              Upload New Product
            </Heading>

            <Heading as="h4" size="md" maxW="md" justifyContent="center">
              Lorem ipsum dolor sit amet consectetur.
            </Heading>
            <Image src={noProducts} width="516px" height="457px" />
          </Stack>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" p="12">
      <HStack spacing="24px" mb={10}>
        <Box h="10">
          <Heading as="h3" size="md">
            Previous Products
          </Heading>
        </Box>
        <Spacer />
        <Box h="10">
          <Box
            as="button"
            px={4}
            py={2}
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient="radial(#D1FC3F 8.11%,#000000 75%)"
            _hover={{
              bgGradient: 'linear(to-r, red.500, yellow.500)',
            }}
            onClick={onOpen}
          >
            New Product
          </Box>
        </Box>
      </HStack>
      {products?.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </Container>
  );
};

export default Products;
