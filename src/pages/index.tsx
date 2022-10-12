import { Button, Flex, FormControl, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Input from "../components/form/Input";

const Signin: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth="360"
        bg="gray.800"
        p="8"
        borderRadius="8px"
        flexDirection="column"
      >
        {/*  stack é para dar espaçamentos entre os itens */}
        <Stack spacing="2">
          <Input name="email" type="email" label="Email" />

          <FormControl>
            <Input name="password" type="password" label="Password" />
          </FormControl>

          <Button type="submit" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Signin;
