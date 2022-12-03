import { Controller, useForm } from "react-hook-form";
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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
//@ts-ignore
import lighthouse from "@lighthouse-web3/sdk";
import { Web3Storage } from "web3.storage";

export default function CreateProduct() {
  const {
    control,
    handleSubmit,
    register,
    reset,
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

  const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const inputType = (uploadType: any) => {
    uploadType === "file" && document.getElementById("file")?.click();
    uploadType === "folder" && document.getElementById("folder")?.click();
  };

  const getEventFile = (e: any) => {
    console.log(e);
    setUploadedFiles(e);
  };

  const progressCallback = (progressData: any) => {
    // let percentageDone =
    //   100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    // currentProgressFunction(percentageDone);
  };

  const uploadedFile = async (uploadedFiles: any) => {
    console.log("first", uploadedFiles);

    uploadedFiles.persist();
    const uploadResponse = await lighthouse.upload(
      uploadedFiles,
      "e425247e-3e3e-4773-9d9a-5ae216ce5b3a",
      progressCallback
    );

    console.log("uploadResponse", uploadResponse);
    reset();
    return uploadResponse;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        maxW="full"
        pb="1.2rem"
        display="flex"
        alignItems={"start"}
        justifyContent="space-between"
        flexDir={"column"}
        gap="1rem"
      >
        <HStack w="full">
          <FormControl>
            <FormLabel htmlFor="name" color="black" fontSize={"md"}>
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
            <FormLabel color="black" htmlFor="name">
              Pricing
            </FormLabel>
            <InputGroup>
              <Input
                color="black"
                id="pricing"
                placeholder="0.0"
                {...register("pricing", {
                  required: "This is required",
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
                  {...register("tokenType", { required: true })}
                >
                  <option value="" color="grey.400">
                    Select Token
                  </option>
                  <option value="USDT">USDT</option>
                  <option value="USDC">USDC</option>
                  <option value="matic">Matic</option>
                </Select>
              </InputRightAddon>
            </InputGroup>
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel htmlFor="name" color="black" fontSize={"md"}>
            Description
          </FormLabel>
          <Textarea
            color={"black"}
            id="description"
            placeholder="description"
            {...register("description", {
              required: "This is required",
              minLength: { value: 10, message: "Minimum length should be 10" },
            })}
          />
        </FormControl>

        {/* <FormControl>
          <FormLabel htmlFor="name" color="black" fontSize={"md"}>
            File upload
          </FormLabel>
          <Input
            color={"black"}
            id="fileUpload"
            type="file"
            placeholder="fileUpload"
            onChange={(e) => getEventFile(e, "file")}
            // {...register("fileUpload", {
            //   required: "This is required",
            //   // minLength: { value: 10, message: "Minimum length should be 10" },
            // })}
          />
        </FormControl> */}

        {/* <input type="file" id="file" onChange={(e) => getEventFile(e)} /> */}
        <input
          type="file"
          id="file"
          {...register("file", {
            onChange: (e) => {
              getEventFile(e);
            },
          })}
        />
        <Button onClick={() => inputType("file")}>Upload file</Button>
        <Flex
          flexDir={"row"}
          w="full"
          alignItems={"flex-end"}
          justify="flex-end"
        >
          <Button
            mt={4}
            bg="black"
            color="white"
            _hover={{ bg: "black" }}
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Flex>
      </Container>
    </form>
  );
}
