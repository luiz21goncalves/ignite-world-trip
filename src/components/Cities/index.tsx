import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';

import { CityCard } from './CityCard';

type City = {
  name: string;
  country: string;
  image_url: string;
  flag: string;
};

type CitiesProps = {
  cities: City[];
};

export function Cites(props: CitiesProps) {
  const { cities } = props;

  return (
    <>
      <Box
        maxW="1160px"
        w="full"
        mx="auto"
        px={['4', 0]}
        mb={['20px', '10']}
        mt={['8', '3']}
      >
        <Heading
          fontWeight="medium"
          fontSize={['2xl', '4xl']}
          lineHeight={['36px', '54px']}
          color="dark.700"
        >
          Cidades +100
        </Heading>
      </Box>

      <SimpleGrid
        maxW="1160px"
        w="full"
        mx="auto"
        columns={[1, 2, 2, 4]}
        gap="12"
        pb={['4', '12']}
        px={['60px', 0]}
      >
        {cities.map((city) => (
          <Center key={Math.random()}>
            <CityCard city={city} />
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
}
