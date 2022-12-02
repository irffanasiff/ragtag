// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Select,
//   Text,
//   Textarea,
// } from '@chakra-ui/react';
// import { ErrorMessage } from '@hookform/error-message';
// import React from 'react';
// import { useForm } from 'react-hook-form';

// const PostProductModal = ({ isOpen, onClose }: any) => {
//   const {
//     handleSubmit,
//     register,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm({});

//   const submit = (data: any) => {
//     console.log('dataaa', data);
//   };
//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent
//         // p="1rem"
//         pb="2rem"
//         zIndex={100}
//         w={{ base: '90vw', sm: '80vw' }}
//         // mt={{ base: '10px', sm: '40px', xl: '5%' }}
//         maxWidth="100vw"
//       >
//         <ModalHeader>New Product</ModalHeader>
//         <ModalCloseButton />
//         <form onSubmit={handleSubmit(submit)}>
//           <ModalBody>
//             <FormControl
//               minW={'250px'}
//               isRequired
//               w={{ base: '100%', md: '45%' }}
//             >
//               <FormLabel htmlFor="name">Name</FormLabel>
//               <Input
//                 size={{ base: 'sm', lg: 'md' }}
//                 isRequired
//                 id="name"
//                 placeholder="Name"
//                 {...register('name', {
//                   required: 'This is required',
//                   minLength: {
//                     value: 4,
//                     message: 'Minimum length should be 4',
//                   },
//                   pattern: {
//                     value: /^[^\s]+(?:$|.*[^\s]+$)/,
//                     message:
//                       'Entered value cant start/end or contain only white spacing',
//                   },
//                 })}
//               />
//             </FormControl>

//             {/* <FormControl
//               minW={'250px'}
//               isRequired
//               w={{ base: '100%', md: '45%' }}
//             >
//               <FormLabel htmlFor="name">Name</FormLabel>
//               <Input
//                 size={{ base: 'sm', lg: 'md' }}
//                 isRequired
//                 id="name"
//                 placeholder="Name"
//                 {...register('name', {
//                   required: 'This is required',
//                   minLength: {
//                     value: 4,
//                     message: 'Minimum length should be 4',
//                   },
//                   pattern: {
//                     value: /^[^\s]+(?:$|.*[^\s]+$)/,
//                     message:
//                       'Entered value cant start/end or contain only white spacing',
//                   },
//                 })}
//               />
//               <ErrorMessage
//                 errors={errors}
//                 name="name"
//                 render={({ message }) => (
//                   <Text fontSize="sm" color="red.500" py="0.5rem">
//                     {message}
//                   </Text>
//                 )}
//               />
//             </FormControl>
//             <FormControl
//               minW={'250px'}
//               isRequired
//               w={{ base: '100%', md: '45%' }}
//             >
//               <FormLabel htmlFor="pricing">Pricing</FormLabel>

//               <InputGroup size="md">
//                 <Input pr="4.5rem" type="number" placeholder="Enter pricing" />
//                 <InputRightElement width="4.5rem">
//                   <FormControl>
//                     <Select placeholder="Select Token">
//                       <option>Matic</option>
//                       <option>Moonbeam</option>
//                     </Select>
//                   </FormControl>
//                 </InputRightElement>
//               </InputGroup>

//               <ErrorMessage
//                 errors={errors}
//                 name="pricing"
//                 render={({ message }) => (
//                   <Text fontSize="sm" color="red.500" py="0.5rem">
//                     {message}
//                   </Text>
//                 )}
//               />
//             </FormControl>
//             <FormControl
//               minW={'250px'}
//               isRequired
//               w={{ base: '100%', md: '45%' }}
//             >
//               <FormLabel htmlFor="description">Description</FormLabel>
//               <Textarea
//                 id="description"
//                 h={{ base: '120px', md: '150px' }}
//                 placeholder="Write minimum 50 character description"
//                 {...register('description', {
//                   required: 'This is Required',
//                   minLength: {
//                     value: 50,
//                     message:
//                       'write at least 50 letter description about the job',
//                   },
//                 })}
//               />
//               <ErrorMessage
//                 errors={errors}
//                 name="description"
//                 render={({ message }) => (
//                   <Text fontSize="sm" color="red.500" py="0.5rem">
//                     {message}
//                   </Text>
//                 )}
//               />
//             </FormControl> */}
//           </ModalBody>
//         </form>

//         <ModalFooter>
//           <Button colorScheme="gray" mr={3} onClick={onClose}>
//             Cancel
//           </Button>
//           <Button
//             size={{ base: 'sm', md: 'md', lg: 'lg' }}
//             fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
//             isLoading={isSubmitting}
//             type="submit"
//             colorScheme="blue"
//             mr={3}
//           >
//             Create Job
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default PostProductModal;

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  Stack,
  Radio,
  RadioGroup,
  HStack,
  CheckboxGroup,
  Checkbox,
  useToast,
  chakra,
  Select,
  InputRightAddon,
  Tooltip,
  InputRightElement,
} from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useProfileStore } from 'src/app/store/profile/profileStore';

const PostProductModal = ({ isOpen, onOpen, onClose }: any) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({});

  const submit = async (data: any) => {
    console.log('data', data);
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        p="1rem"
        pb="2rem"
        zIndex={100}
        w={{ base: '90vw', sm: '80vw' }}
        mt={{ base: '10px', sm: '40px', xl: '5%' }}
        maxWidth="100vw"
      >
        <ModalHeader
          fontWeight={'600'}
          fontSize={{ base: '2rem', lg: '2.2rem', xl: '2.5rem' }}
        >
          Job Details
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(submit)}>
          <ModalBody
            display="flex"
            fontSize={['10px !important']}
            flexDirection={'row'}
            gap="1rem"
            pb={6}
            flexWrap="wrap"
            justifyContent={'space-between'}
          >
            {/* Job Title */}
            <FormControl
              minW={'250px'}
              isRequired
              w={{ base: '100%', md: '45%' }}
            >
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                size={{ base: 'sm', lg: 'md' }}
                isRequired
                id="name"
                placeholder="Name"
                {...register('name', {
                  required: 'This is required',
                  minLength: {
                    value: 4,
                    message: 'Minimum length should be 4',
                  },
                  pattern: {
                    value: /^[^\s]+(?:$|.*[^\s]+$)/,
                    message:
                      'Entered value cant start/end or contain only white spacing',
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => (
                  <Text fontSize="sm" color="red.500" py="0.5rem">
                    {message}
                  </Text>
                )}
              />
            </FormControl>

            <FormControl
              minW={'250px'}
              isRequired
              w={{ base: '100%', md: '45%' }}
            >
              <FormLabel htmlFor="pricing">Pricing</FormLabel>

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type="number"
                  placeholder="Enter pricing"
                  {...register('pricing', {
                    required: 'This is Required',
                  })}
                />
                <InputRightElement width="4.5rem">
                  <FormControl>
                    <Select placeholder="Select Token">
                      <option>Matic</option>
                      <option>Moonbeam</option>
                    </Select>
                  </FormControl>
                </InputRightElement>
              </InputGroup>

              <ErrorMessage
                errors={errors}
                name="pricing"
                render={({ message }) => (
                  <Text fontSize="sm" color="red.500" py="0.5rem">
                    {message}
                  </Text>
                )}
              />
            </FormControl>

            {/*location */}
            <FormControl
              minW={'250px'}
              isRequired
              w={{ base: '100%', md: '45%' }}
            >
              <FormLabel htmlFor="location">Location</FormLabel>
              <Input
                size={{ base: 'sm', lg: 'md' }}
                isRequired
                type="text"
                id="location"
                placeholder="Location"
                {...register('location', {
                  required: 'This is Required',
                  minLength: {
                    value: 4,
                    message: 'minimum number of character for location is 4',
                  },
                  pattern: {
                    value: /^[^\s]+(?:$|.*[^\s]+$)/,
                    message: 'Location can not contain only white spacing',
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="location"
                render={({ message }) => (
                  <Text fontSize="sm" color="red.500" py="0.5rem">
                    {message}
                  </Text>
                )}
              />
            </FormControl>

            {/*Description*/}
            <FormControl minW={'280px'} isRequired w={{ base: '100%' }}>
              <FormLabel htmlFor="description">Job Description</FormLabel>

              <Textarea
                id="description"
                h={{ base: '120px', md: '150px' }}
                placeholder="Write minimum 50 character description"
                {...register('description', {
                  required: 'This is Required',
                  minLength: {
                    value: 50,
                    message:
                      'write at least 50 letter description about the job',
                  },
                })}
              />

              <ErrorMessage
                errors={errors}
                name="description"
                render={({ message }) => (
                  <Text fontSize="sm" color="red.500" py="0.5rem">
                    {message}
                  </Text>
                )}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter p="0rem 1rem">
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              isLoading={isSubmitting}
              type="submit"
              colorScheme="blue"
              mr={3}
            >
              Add
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default PostProductModal;
