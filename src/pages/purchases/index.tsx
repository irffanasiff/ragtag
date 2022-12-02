import React from 'react';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import noPurchase from '../../images/NoPurchase.png';

const Purchases = () => {
  return (
    <Container maxW="2xl" bg="white" centerContent justifyContent="center">
      <Box>
        <Stack spacing={6} justifyContent="center" align="center">
          <Heading as="h2" size="xl">
            You have not made any purchase
          </Heading>

          <Heading as="h4" size="md" maxW="md" justifyContent="center">
            You can alsways veiw your assets inside your crypto wallet. Make
            sure you are connected with same public key
          </Heading>
          <Image src={noPurchase} width="516px" height="457px" />
        </Stack>
      </Box>
    </Container>
  );
};

export default Purchases;
