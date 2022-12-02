import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import vercel from '../../public/assets/product.png';
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
const ProductCard = (props: any) => {
  const { product } = props;
  console.log('product', product);
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      key={props.key}
    >
      <Image
        objectFit="cover"
        // maxW={{ base: '100%', sm: '200px' }}
        src={vercel}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{product.name}</Heading>

          <Text py="2">{product.description}</Text>
        </CardBody>

        <CardFooter>
          <Flex w="full">
            <Box px="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {product.creatorName}
              </Box>

              <Box>{product.creatorWalletAddress}</Box>
            </Box>
            <Spacer />
            <Box p="4">{product.price}</Box>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProductCard;
