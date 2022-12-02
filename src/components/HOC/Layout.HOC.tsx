import { Container } from '@chakra-ui/react';

import Navbar from '../navigation/navbar';
import Sidebar from '../navigation/sidebar';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container
      background={'white'}
      display="flex"
      // flexDirection="column"
      justifyContent="space-between"
      maxW="full"
      p="0"
      zIndex="1"
    >
      {/* <Navbar /> */}
      <Sidebar />
      {children}
    </Container>
  );
};

export default Layout;
