import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex w="full" align="center" justify="center" py={4}>
      <Image src="assets/logo.svg" w={20} h={5} alt="logo" />
    </Flex>
  );
}
