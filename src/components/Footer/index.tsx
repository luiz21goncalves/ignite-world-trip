import { Box, Heading } from '@chakra-ui/react';

import { Carousel } from '../Carousel';

export function Footer() {
  return (
    <Box mb={6}>
      <Heading
        textAlign="center"
        fontSize="xl"
        fontWeight="medium"
        color="dark.700"
        mt={6}
        mb={5}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Carousel />
    </Box>
  );
}
