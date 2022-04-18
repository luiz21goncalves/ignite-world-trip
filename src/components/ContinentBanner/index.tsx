import { Box, Flex, Heading, Image, useMediaQuery } from '@chakra-ui/react';

type ContinentBanner = {
  title: string;
  image: string;
};

export function ContinentBanner(props: ContinentBanner) {
  const { image, title } = props;

  const [isLargeThan768] = useMediaQuery(['(min-width: 768px)']);

  return (
    <Box w="full" h={['150px', '150px', '500px']} position="relative">
      <Image src={image} w="full" h="full" />
      <Flex
        align={isLargeThan768 ? 'flex-end' : 'center'}
        justify={isLargeThan768 ? 'flex-start' : 'center'}
        w="full"
        h="full"
        position="absolute"
        top={0}
        left={0}
        right={0}
        px={isLargeThan768 ? '140px' : 0}
        py={isLargeThan768 ? '60px' : 0}
      >
        <Heading textShadow="2px 2px 12px  #000000a8" color="light.800">
          {title}
        </Heading>
      </Flex>
    </Box>
  );
}
