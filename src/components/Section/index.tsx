import { Box, Flex, Grid, Text, useMediaQuery } from '@chakra-ui/react';

import { Info } from './Info';

type Info = {
  count: number;
  label: string;
};

type SectionProps = {
  text: string;
  info: Info[];
};

export function Section(props: SectionProps) {
  const { text, info } = props;

  const [isLargeThan1024] = useMediaQuery(['(min-width: 1024px)']);

  if (isLargeThan1024) {
    return (
      <Box w="full" maxW="1160px" mx="auto" mt="20">
        <Grid w="full" templateColumns="repeat(2, 1fr)" gap="70px">
          <Text
            fontSize={['sm', '2xl']}
            lineHeight={['21px', '36px']}
            color="dark.700"
            textAlign="justify"
            w="full"
          >
            {text}
          </Text>
          <Info items={info} />
        </Grid>
      </Box>
    );
  }

  return (
    <Flex px="4" pt="6" flexDir="column">
      <Text
        fontSize="sm"
        lineHeight="21px"
        color="dark.700"
        textAlign="justify"
      >
        {text}
      </Text>
      <Info items={info} />
    </Flex>
  );
}
