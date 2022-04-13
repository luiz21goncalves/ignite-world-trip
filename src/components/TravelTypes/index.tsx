import { Box, Flex, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';

import { TRAVEL_TYPES } from '../../constants';
import { TravelTypeItem } from './TravelTypeItem';

export function TravelTypes() {
  const [isLargerThan768] = useMediaQuery(['(min-width: 768px)']);

  if (isLargerThan768) {
    return (
      <Box
        maxW="1160px"
        w="full"
        mx="auto"
        px={8}
        mt={[20, 20, 20, 20, 32]}
        mb={20}
      >
        <Flex w="full" align="center" gap={4} justify="space-between">
          {TRAVEL_TYPES.map(({ key, label }) => (
            <TravelTypeItem slug={key} label={label} />
          ))}
        </Flex>
      </Box>
    );
  }

  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" py={9} px={12} rowGap={6}>
      {TRAVEL_TYPES.map(({ key, label }, index) => {
        const lastIndex = TRAVEL_TYPES.length - 1;
        const isLast = index === lastIndex;
        const isPair = index % 2 === 0;

        const justifyContent =
          (isLast && 'center') || (isPair && 'flex-start') || 'flex-end';
        const colSpan = isLast ? 2 : 1;

        return (
          <GridItem
            display="flex"
            alignItems="center"
            justifyContent={justifyContent}
            key={key}
            colSpan={colSpan}
          >
            <TravelTypeItem slug={key} label={label} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
