import Link from 'next/link';

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

type SliderProps = {
  slug: number;
  name: string;
  description: string;
  imageUrl: string;
};

export function Slider(props: SliderProps) {
  const { slug, imageUrl, name, description } = props;

  return (
    <Box position="relative" minW="100%" pl="10px">
      <Box position="relative" overflow="hidden" h={[64, '450px']}>
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
        <Link href={`/continent/${slug}`} passHref>
          <a>
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
                fontSize={['2xl', '5xl']}
                lineHeight={['36px', '72px']}
                textAlign="center"
                fontWeight="bold"
                color="light.800"
                textShadow="2px 2px 12px  #000000a8"
              >
                {name}
              </Heading>
              <Text
                fontSize={['sm', '2xl']}
                lineHeight={['21px', '36px']}
                fontWeight="bold"
                textAlign="center"
                color="light.800"
                textShadow="2px 2px 12px  #000000a8"
              >
                {description}
              </Text>
            </Flex>
          </a>
        </Link>
      </Box>
    </Box>
  );
}
