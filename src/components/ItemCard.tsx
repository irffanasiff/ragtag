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
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { ProductType } from './AppState';
import { WidgetProps } from '@worldcoin/id';
import dynamic from 'next/dynamic';
import * as PushAPI from '@pushprotocol/restapi';
import * as ethers from 'ethers';

const PK = '3d2f355f59e6c057e915e18c7e3187945702dc5c8c0d06d880a6e7e5d403d96d'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async (account: any) => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `Ragtag`,
        body: `NFT minted`,
      },
      payload: {
        title: `Ragtag`,
        body: `One more NFT was minted!`,
        cta: '',
        img: '',
      },
      recipients: `eip155:${account}`, // recipient address
      channel: 'eip155:5:0x04c755E1574F33B6C0747Be92DfE1f3277FCC0A9', // your channel address
      env: 'staging',
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
};

const WorldIDWidget = dynamic<WidgetProps>(
  () => import('@worldcoin/id').then((mod) => mod.WorldIDWidget),
  { ssr: false }
);

const ItemCard = ({ product }: { product: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [worldId, setWorldId] = useState('');

  return (
    <>
      <Modal size={'3xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded='2xl'>
          <ModalHeader color='black'>New Product</ModalHeader>
          <ModalCloseButton color='black' />
          <ModalBody>
            <Center rounded={'xl'} shadow='2xl'>
              <Image
                src={'/img.png'}
                alt='random'
                width={280}
                height={280}
                style={{ borderRadius: '1rem' }}
              />
            </Center>
            <HStack justifyContent={'space-between'} w='full'>
              <Text fontWeight={'500'}>{product.name}</Text>
              <Text color='white'>
                {product.price / 100000000000000000} - matic
              </Text>
            </HStack>
            <HStack justifyContent={'space-between'} w='full'>
              <Wrap>
                <Tag rounded={'full'} colorScheme='purple'>
                  PDF
                </Tag>
              </Wrap>
            </HStack>
            <HStack>
              <WorldIDWidget
                actionId='wid_601f03da24682ed7a2dcf72a4de2c956' // obtain this from developer.worldcoin.org
                signal='hi'
                onSuccess={(verificationResponse) =>
                  //@ts-ignore
                  setWorldId(verificationResponse)
                } // you'll actually want to pass the proof to the API or your smart contract
                onError={(error) => console.error(error)}
              />
              <Button
                bg='black'
                onClick={() => {
                  sendNotification(product.wallet);
                }}
              >
                Buy
              </Button>
              <Button bg='blac'>Rent</Button>
            </HStack>
          </ModalBody>
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
            src={'/img.png'}
            alt='random'
            width={280}
            height={280}
            style={{ borderRadius: '1rem' }}
          />
        </Center>
        <HStack justifyContent={'space-between'} w='full'>
          <Text fontWeight={'500'}>Digital Assets PDF</Text>
          <Text>0.5 Matic</Text>
        </HStack>
        <HStack justifyContent={'space-between'} w='full'>
          <Wrap>
            <Tag rounded={'full'} colorScheme='purple'>
              PDF
            </Tag>
          </Wrap>
        </HStack>
      </Box>
    </>
  );
};

export default ItemCard;
