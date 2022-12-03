import { Button, Center, Text } from '@chakra-ui/react';
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
                  <button onClick={openChainModal} type='button'>
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type='button'
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button onClick={openAccountModal} type='button'>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default WalletButton;
