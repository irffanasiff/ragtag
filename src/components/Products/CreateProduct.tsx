import { Controller, useForm } from 'react-hook-form';
import {
  Center,
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
  Text,
  Image,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
//@ts-ignore
import lighthouse from "@lighthouse-web3/sdk";
import { Web3Storage } from "web3.storage";
import { MdCloudUpload } from 'react-icons/md';

export default function CreateProduct() {
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  function getAccessToken() {
    console.log(process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN);
    return process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN;
  }

  function makeStorageClient() {
    const accessToken = getAccessToken() as string;
    console.log("accessToken", accessToken);
    return new Web3Storage({ token: accessToken });
  }

  const onSubmit = async (values: any) => {
    console.log(values);
    let uploadResponse;
    if (uploadedFiles?.target?.files.length > 0) {
      uploadResponse = await uploadedFile(uploadedFiles);
      console.log("uploadResponse", uploadResponse);
    }
    values.file = uploadResponse?.data?.Hash;
    console.log("valuesssss", values);
    const client = makeStorageClient();
    const obj = {
      name: values.name,
      description: values.description,
      category: values.category,
      // thumbnail: values.img,
    };
    const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });

    const files = [new File([blob], "metadata.json")];
    console.log(files);
    const metadata_cid = await client.put(files);

    console.log("stored files with cid:", metadata_cid);
    // return cid;
  };

  const inputType = (uploadType: any) => {
    uploadType === 'file' && document.getElementById('file')?.click();
    uploadType === 'folder' && document.getElementById('folder')?.click();
  };

  const getEventFile = (e: any) => {
    setUploadedFiles(e);
  };

  const progressCallback = (progressData: any) => {
    // let percentageDone =
    //   100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    // currentProgressFunction(percentageDone);
  };

  useEffect(() => {
    console.log('watch - ', watch('thumbnail'));
  }, [watch]);

  const uploadedFile = async (uploadedFiles: any) => {
    console.log('first', uploadedFiles);

    uploadedFiles.persist();
    const uploadResponse = await lighthouse.upload(
      uploadedFiles,
      'e425247e-3e3e-4773-9d9a-5ae216ce5b3a',
      progressCallback
    );
    reset();
    return uploadResponse;
  };

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
        <FormControl>
          <FormLabel htmlFor='file' color='black' fontSize={'md'}>
            Content File
          </FormLabel>
          <Center
            rounded='md'
            width={'100%'}
            h='8rem'
            border='1px solid #ebecf0'
            bg='blackAlpha.200'
          >
            <Input
              h='8rem'
              opacity={'0'}
              display={'flex'}
              alignItems='center'
              justifyContent={'center'}
              background={'blackAlpha.200'}
              type='file'
              id='file'
              {...register('file', {
                onChange: (e) => {
                  getEventFile(e);
                },
              })}
            />
            <Center flexDir={'column'} position={'absolute'}>
              <MdCloudUpload
                color='#9c9c9c'
                style={{ width: '4rem', height: 'auto' }}
              />
              <Text fontSize={'md'} color='blackAlpha.600'>
                {watch('file')?.length > 0 ? 'Uploading...' : 'Upload File'}
              </Text>
            </Center>
          </Center>
        </FormControl>
        <HStack w='full'>
          <FormControl>
            <FormLabel htmlFor='name' color='black' fontSize={'md'}>
              Product Name
            </FormLabel>
            <InputGroup>
              <Input
                color={"black"}
                id="Product Name"
                placeholder="name"
                {...register("name", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <InputRightAddon color="black" backgroundColor="white">
                <Select
                  outline={"0px"}
                  border="0px"
                  _selected={{ border: "0px" }}
                  _active={{ border: "0px" }}
                  _focus={{ border: "0px" }}
                  color="black"
                  {...register("category", { required: true })}
                >
                  <option value="" color="grey.400">
                    Category
                  </option>
                  <option value="book">book</option>
                  <option value="PDF">PDF</option>
                  <option value="image">image</option>
                  <option value="video">video</option>
                </Select>
              </InputRightAddon>
            </InputGroup> 
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
                  {...register('tokenType', { required: true })}
                >
                  <option value='' color='grey.400'>
                    Select Token
                  </option>
                  <option value='eth'>Ethereum</option>
                  <option value='matic'>Matic</option>
                </Select>
              </InputRightAddon>
            </InputGroup>
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel htmlFor='name' color='black' fontSize={'md'}>
            Thumbnail
          </FormLabel>
          <Input
            display={'flex'}
            alignItems='center'
            _placeholder={{
              border: '1px solid red',
              color: 'white',
            }}
            justifyContent={'start'}
            type='file'
            sx={{
              '::file-selector-button': {
                opacity: '0',
                width: '0px',
                border: 'none',
                outline: 'none',
                mr: 2,
              },
            }}
            // value={watch('thumbnail')}
            color={'black'}
            id='thumbnail'
            placeholder='Thumbnail'
            {...register('thumbnail', {
              required: 'This is required',
            })}
          />
        </FormControl>
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
