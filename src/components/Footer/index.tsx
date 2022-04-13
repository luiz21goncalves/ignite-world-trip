import { Box, Heading } from '@chakra-ui/react';

import { Carousel } from '../Carousel';

export function Footer() {
  return (
    <Box mb={[6, 10]}>
      <Heading
        textAlign="center"
        fontSize={['xl', '4xl']}
        lineHeight={['30px', '54px']}
        fontWeight="medium"
        color="dark.700"
        my={[6, 14]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Carousel />
    </Box>
  );
}
