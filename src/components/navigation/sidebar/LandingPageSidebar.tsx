import { Container, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const LandingPageSidebar = ({ children }: { children: ReactNode }) => {
  return (
    <Container bg="black">
      <Text>LandingPageSidebar</Text>
      {children}
    </Container>
  );
};

export default LandingPageSidebar;
