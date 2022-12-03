import { Container, HStack } from '@chakra-ui/react';

import Navbar from './navigation/Navbar';
import Sidebar from './Sidebar';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxW='full' p='0' minH={'100vh'}>
      <Navbar />
      <Container
        p='0'
        display={'flex'}
        flexDirection='row'
        minH='100%'
        maxW='full'
        h='100%'
      >
        {children}
      </Container>
    </Container>
  );
};

export default Layout;
