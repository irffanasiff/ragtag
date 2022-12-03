import { Button, Center, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { IoWallet } from 'react-icons/io5';
import { useRouter } from 'next/router';
//import { useAuthStore } from '../../store/useAuthStore';

const WalletButton = () => {
  // const { setAuth } = useAuthStore();
  const router = useRouter();
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        // if (connected) {
        //   setAuth(true);
        //   router.push('/dashboard');
        // } else {
        //   setAuth(false);
        // }

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                border: '2px solid red',
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    leftIcon={<IoWallet size={'28px'} />}
                    onClick={openConnectModal}
                    variant='outline'
                    border={'none'}
                    _hover={{
                      bg: 'none',
                    }}
                    _active={{
                      bg: 'none',
                    }}
                    fontSize='18px'
                    gap='0.5rem'
                    color='white'
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button variant={'unstyled'} onClick={openChainModal}>
                    Wrong network
                  </Button>
                );
              }

              return (
                <HStack>
                  <Center as='button' onClick={openChainModal}>
                    {chain.hasIcon && (
                      <Center background={chain.iconBackground} rounded='full'>
                        {chain.iconUrl && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 26, height: 26 }}
                          />
                        )}
                      </Center>
                    )}
                  </Center>
                  <Button
                    variant={'unstyled'}
                    onClick={openAccountModal}
                    fontSize='18px'
                  >
                    {account.displayName}
                  </Button>
                </HStack>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default WalletButton;
