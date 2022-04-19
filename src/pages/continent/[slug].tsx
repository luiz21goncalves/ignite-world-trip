import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Flex, Spinner } from '@chakra-ui/react';

import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';
import { CONTINENTS } from '../../constants';
import { Section } from '../../components/Section';
import { Cites } from '../../components/Cities';

type Info = {
  count: number;
  label: string;
};

type Continent = {
  name: string;
  paragraph: string;
  cover: string;
  info: Info[];
  city: {
    name: string;
    country: string;
    image_url: string;
    flag: string;
  };
};

const Continent: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as {
    slug:
      | 'europa'
      | 'asia'
      | 'america-do-norte'
      | 'america-do-sul'
      | 'asia'
      | 'oceania';
  };
  const [continent, setContinent] = useState<Continent | null>(null);

  useEffect(() => {
    setContinent(CONTINENTS[slug] as Continent);
  }, [slug]);

  if (!continent) {
    return (
      <Flex w="full" h="100vh" align="center" justify="center">
        <Spinner />
      </Flex>
    );
  }

  const cities = Array.from(
    { length: Math.round(Math.random() * 15) },
    () => continent.city,
  );

  return (
    <>
      <Head>
        <title>WorldTrip | {continent.name}</title>
      </Head>
      <Header isBackButton />
      <ContinentBanner image={continent.cover} title={continent.name} />
      <Section text={continent.paragraph} info={continent.info} />
      <Cites cities={cities} />
    </>
  );
};

export default Continent;
