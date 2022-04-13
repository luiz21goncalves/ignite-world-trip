import { IconButton, Circle } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

type ButtonProps = {
  onClick: () => void;
  enabled: boolean;
};

type DotButtonProps = {
  selected: boolean;
  onClick: () => void;
};

export function DotButton(props: DotButtonProps) {
  const { onClick, selected } = props;

  return (
    <Circle
      onClick={onClick}
      size={[2, 2, 4]}
      bg={selected ? 'highlight.500' : 'dark.500'}
      cursor="pointer"
    />
  );
}

export function PrevButton(props: ButtonProps) {
  const { enabled, onClick } = props;

  return (
    <IconButton
      variant="ghost"
      colorScheme="whiteAlpha"
      position="absolute"
      zIndex="docked"
      top="50%"
      transform="translateY(-50%)"
      bg="transparent"
      border="none"
      w={[8, '60px']}
      h={[8, '60px']}
      p={0}
      m={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      _hover={{ bg: 'transparent', border: 'none' }}
      _focus={{ bg: 'transparent', border: 'none' }}
      onClick={onClick}
      disabled={!enabled}
      type="button"
      aria-label="Previous Slide"
      icon={<ChevronLeftIcon color="highlight.500" w="full" h="full" />}
    />
  );
}

export function NextButton(props: ButtonProps) {
  const { enabled, onClick } = props;

  return (
    <IconButton
      variant="ghost"
      colorScheme="whiteAlpha"
      position="absolute"
      zIndex="docked"
      top="50%"
      right={0}
      transform="translateY(-50%)"
      bg="transparent"
      border="none"
      w={[8, '60px']}
      h={[8, '60px']}
      p={0}
      m={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      _hover={{ bg: 'transparent', border: 'none' }}
      _focus={{ bg: 'transparent', border: 'none' }}
      onClick={onClick}
      disabled={!enabled}
      type="button"
      aria-label="Next Slide"
      icon={<ChevronRightIcon color="highlight.500" w="full" h="full" />}
    />
  );
}
