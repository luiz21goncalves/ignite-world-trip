import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

type SliderProps = {
  name: string;
  description: string;
  imageUrl: string;
};

export function Slider(props: SliderProps) {
  const { imageUrl, name, description } = props;

  return (
    <Box position="relative" minW="100%" pl="10px">
      <Box position="relative" overflow="hidden" h={64}>
        <Image
          src={imageUrl}
          alt={`paisagem de ${name}`}
          position="absolute"
          display="block"
          w="auto"
          minH="100%"
          minW="100%"
          maxW="none"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
        <Flex
          position="absolute"
          w="full"
          h="full"
          zIndex="banner"
          align="center"
          justify="center"
          flexDir="column"
        >
          <Heading
            fontSize="2xl"
            textAlign="center"
            fontWeight="bold"
            color="light.800"
            textShadow="2px 2px 12px  #000000a8"
          >
            {name}
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="bold"
            textAlign="center"
            color="light.800"
            textShadow="2px 2px 12px  #000000a8"
          >
            {description}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
