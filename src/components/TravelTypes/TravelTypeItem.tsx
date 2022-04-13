import { Circle, Flex, useMediaQuery, Image, Text } from '@chakra-ui/react';

type TravelTypeItemProps = {
  slug: string;
  label: string;
};

export function TravelTypeItem(props: TravelTypeItemProps) {
  const { slug, label } = props;

  const [isLargerThan768] = useMediaQuery(['(min-width: 768px)']);

  return (
    <Flex align="center" flexDir={isLargerThan768 ? 'column' : 'row'}>
      {isLargerThan768 ? (
        <Image src={`/assets/travel-type-${slug}.svg`} mb={6} />
      ) : (
        <Circle size={2} bg="highlight.500" mr={2} />
      )}

      <Text
        fontSize={['lg', '2xl']}
        fontWeight={['medium', 'semibold']}
        color="dark.700"
      >
        {label}
      </Text>
    </Flex>
  );
}
