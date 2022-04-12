import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

export function Banner() {
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

  return (
    <Flex
      w="full"
      p={[7, 20]}
      pl={[4, '140px']}
      pb={[7, '70px']}
      flexDir="column"
      position="relative"
    >
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
      <Flex maxW="1160px" w="full" mx="auto" position="relative">
        <Box>
          <Heading
            color="light.800"
            fontSize={['xl', '4xl']}
            fontWeight="medium"
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="light.500"
            fontSize={['sm', 'xl']}
            fontWeight="normal"
            mt={2}
            maxW="524px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        {isLargerThan1200 && (
          <Image
            src="/assets/airplane.svg"
            w="418p"
            h="270px"
            position="absolute"
            right={0}
            bottom="-105px"
          />
        )}
      </Flex>
    </Flex>
  );
}
