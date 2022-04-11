import { Flex, Heading, Image } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex w="full" p={7} pl={4} flexDir="column" position="relative">
      <Image
        w="full"
        h="full"
        src="/assets/background.png"
        zIndex="hide"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
      />
      <Heading color="light.800" fontSize="xl" fontWeight="medium">
        5 Continentes,
        <br />
        infinitas possibilidades.
      </Heading>
      <Heading color="light.500" fontSize="sm" fontWeight="normal" mt={2}>
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Heading>
    </Flex>
  );
}
