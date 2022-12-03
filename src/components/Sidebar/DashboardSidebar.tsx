import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Container,
} from '@chakra-ui/react';
import { FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import NextLink from 'next/link';
import Navbar from '../navigation/Navbar';

interface LinkItemProps {
  name: string;
  link: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Products', link: '/products' },
  { name: 'Customers', link: '/customers' },
  { name: 'Purchases', link: '/purchases' },
  { name: 'Analytics', link: '/analytics' },
  { name: 'Profile', link: '/profile' },
];

export default function DashboardSidebar({
  children,
}: {
  children?: ReactNode;
}) {
  return <Container></Container>;
}
