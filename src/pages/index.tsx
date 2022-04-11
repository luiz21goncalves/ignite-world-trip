import type { NextPage } from 'next';

import { Divider, Center, Heading } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';

const Home: NextPage = () => (
  <>
    <Header />
    <Banner />
    <TravelTypes />
    <Center>
      <Divider w={16} borderColor="dark.700" />
    </Center>
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
  </>
);

export default Home;
