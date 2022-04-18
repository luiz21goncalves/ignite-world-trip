import { useRouter } from 'next/router';

import { Box, Flex, IconButton, Image, useMediaQuery } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

type HeaderProps = {
  isBackButton?: boolean;
};

export function Header(props: HeaderProps) {
  const { isBackButton = false } = props;

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
  const router = useRouter();

  return (
    <Box w="full" maxW="1160px" mx="auto">
      <Flex
        w="full"
        align="center"
        justify={isBackButton ? 'space-between' : 'center'}
        py={[4, 7]}
        px={isLargerThan1200 ? 0 : 4}
      >
        {isBackButton && (
          <IconButton
            variant="ghost"
            size="sm"
            p={0}
            aria-label="back button"
            icon={<ChevronLeftIcon w="full" h="full" color="dark.700" />}
            onClick={() => router.back()}
          />
        )}
        <Image src="/assets/logo.svg" w={[20, 48]} h={[5, 12]} alt="logo" />
        {isBackButton && <div />}
      </Flex>
    </Box>
  );
}
