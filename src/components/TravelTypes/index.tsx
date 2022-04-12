import { Circle, Text, Grid, GridItem } from '@chakra-ui/react';

import { TRAVEL_TYPES } from '../../constants';

export function TravelTypes() {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" py={9} px={12} rowGap={6}>
      {TRAVEL_TYPES.map(({ key, label }, index) => {
        const lastIndex = TRAVEL_TYPES.length - 1;
        const isPair = index % 2 === 0;

        if (lastIndex === index) {
          return (
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="center"
              colSpan={2}
              key={key}
            >
              <Circle size={2} bg="highlight.500" mr={2} />
              <Text>{label}</Text>
            </GridItem>
          );
        }

        if (isPair) {
          return (
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              key={key}
            >
              <Circle size={2} bg="highlight.500" mr={2} />
              <Text>{label}</Text>
            </GridItem>
          );
        }

        return (
          <GridItem
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            key={key}
          >
            <Circle size={2} bg="highlight.500" mr={2} />
            <Text>{label}</Text>
          </GridItem>
        );
      })}
    </Grid>
  );
}
