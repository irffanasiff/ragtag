import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useAuthStore } from 'src/app/store/auth/authStore';
import WalletButton from '../walletButton';
import DashboardSidebar from './DashboardSidebar';
import LandingPageSidebar from './LandingPageSidebar';

const Sidebar = () => {
  const { isAuth } = useAuthStore();

  if (!isAuth) {
    return (
      <LandingPageSidebar>
        <WalletButton />
      </LandingPageSidebar>
    );
  } else {
    return (
      <DashboardSidebar>
        {/* <Button>connect wallet</Button> */}
      </DashboardSidebar>
    );
  }
};

export default Sidebar;
