import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

type Item = {
  count: number;
  label: string;
};

type InfoProps = {
  items: Item[];
};

export function Info(props: InfoProps) {
  const { items } = props;

  return (
    <Flex mt="4" align="center" justify="space-between" w="full">
      {items.map(({ count, label }, index) => {
        const isLast = index === items.length - 1;

        return (
          <Box key={count}>
            <Heading
              color="highlight.500"
              fontWeight="semibold"
              fontSize={['2xl', '5xl']}
              lineHeight={['36px', '72px']}
            >
              {count}
            </Heading>
            <Text
              fontSize={['lg', '2xl']}
              color="dark.700"
              lineHeight={['27px', '36px']}
              display="flex"
              alignItems="center"
            >
              {label}
              {isLast && (
                <InfoOutlineIcon
                  w={['10px', '4']}
                  h={['10px', '4']}
                  color="dark.100"
                  ml="1"
                />
              )}
            </Text>
          </Box>
        );
      })}
    </Flex>
  );
}
