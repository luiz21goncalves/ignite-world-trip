import { Box, Flex, Image, Text } from '@chakra-ui/react';

type CityCardProps = {
  city: {
    name: string;
    country: string;
    image_url: string;
    flag: string;
  };
};

export function CityCard(props: CityCardProps) {
  const {
    city: { country, flag, image_url, name },
  } = props;

  return (
    <Box
      minW="256px"
      w="full"
      h="279px"
      borderRadius={4}
      borderWidth="1px"
      borderColor="highlight.100"
      borderStyle="solid"
    >
      <Image src={image_url} w="full" h="173px" borderTopRadius={4} />
      <Flex align="center" justify="space-between" pt="18px" px="6">
        <Box>
          <Text
            fontSize="xl"
            lineHeight="25px"
            fontFamily="Barlow"
            fontWeight="semibold"
            mb="3"
            color="dark.700"
          >
            {name}
          </Text>
          <Text
            fontSize="md"
            lineHeight="26px"
            fontWeight="medium"
            fontFamily="Barlow"
            color="dark.500"
          >
            {country}
          </Text>
        </Box>
        <Image
          src={flag}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
