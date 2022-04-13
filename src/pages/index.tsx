import type { NextPage } from 'next';

import { Center, Box } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { Footer } from '../components/Footer';

const Home: NextPage = () => (
  <>
    <Header />
    <Banner />
    <TravelTypes />
    <Center>
      <Box w={[16, 24]} h={['1px', '2px']} bg="dark.700" />
    </Center>
    <Footer />
  </>
);

export default Home;
