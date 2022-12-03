import { Controller, useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  HStack,
  InputGroup,
  InputRightAddon,
  Select,
  Textarea,
  Flex,
} from '@chakra-ui/react';

export default function CreateProduct() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        maxW='full'
        pb='1.2rem'
        display='flex'
        alignItems={'start'}
        justifyContent='space-between'
        flexDir={'column'}
        gap='1rem'
      >
        <HStack w='full'>
          <FormControl>
            <FormLabel htmlFor='name' color='black' fontSize={'md'}>
              Product Name
            </FormLabel>
            <Input
              color={'black'}
              id='Product Name'
              placeholder='name'
              {...register('name', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
          </FormControl>
          <FormControl>
            <FormLabel color='black' htmlFor='name'>
              Pricing
            </FormLabel>
            <InputGroup>
              <Input
                color='black'
                id='pricing'
                placeholder='0.0'
                {...register('pricing', {
                  required: 'This is required',
                })}
              />
              <InputRightAddon color='black' backgroundColor='white'>
                <Select
                  outline={'0px'}
                  border='0px'
                  _selected={{ border: '0px' }}
                  _active={{ border: '0px' }}
                  _focus={{ border: '0px' }}
                  color='black'
                  {...register('category', { required: true })}
                >
                  <option value='' color='grey.400'>
                    Select Token
                  </option>
                  <option value='A'>Ethereum</option>
                  <option value='B'>Matic</option>
                </Select>
              </InputRightAddon>
            </InputGroup>
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel htmlFor='name' color='black' fontSize={'md'}>
            Description
          </FormLabel>
          <Textarea
            color={'black'}
            id='description'
            placeholder='description'
            {...register('description', {
              required: 'This is required',
              minLength: { value: 10, message: 'Minimum length should be 10' },
            })}
          />
        </FormControl>
        <Flex
          flexDir={'row'}
          w='full'
          alignItems={'flex-end'}
          justify='flex-end'
        >
          <Button
            mt={4}
            bg='black'
            color='white'
            _hover={{ bg: 'black' }}
            isLoading={isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Flex>
      </Container>
    </form>
  );
}
