import type { NextPage } from 'next';

import { Divider, Center } from '@chakra-ui/react';

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
      <Divider w={16} borderColor="dark.700" />
    </Center>
    <Footer />
  </>
);

export default Home;
