import { useCallback, useEffect, useRef, useState } from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Flex } from '@chakra-ui/react';

import { PrevButton, NextButton, DotButton } from './Buttons';
import { Slider } from './Slider';
import { CAROUSEL_ITEMS } from '../../constants';

export function Carousel() {
  const autoplay = useRef(
    Autoplay(
      {
        delay: 3000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      },
      (emblaRoot) => emblaRoot.parentElement,
    ),
  );

  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
    },
    [autoplay.current],
  );

  const [prevButtonEnabled, setPrevButtonEnabled] = useState(false);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla],
  );

  const onScroll = useCallback(() => {
    if (!embla) return;

    setSelectedIndex(embla.selectedScrollSnap());
    setPrevButtonEnabled(embla.canScrollPrev());
    setNextButtonEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    onScroll();
    embla.on('scroll', onScroll);
    setScrollSnaps(embla.scrollSnapList());
  }, [embla, onScroll]);

  return (
    <Box
      position="relative"
      w="full"
      maxW="1240px"
      h={[64, '450px']}
      bg="light.800"
      mx="auto"
    >
      <Box ref={viewportRef} overflow="hidden" w="full" h="full">
        <Flex userSelect="none" ml="-10px">
          {CAROUSEL_ITEMS.map(({ key, description, image_url, name }) => (
            <Slider
              key={key}
              imageUrl={image_url}
              description={description}
              name={name}
            />
          ))}
        </Flex>
      </Box>

      <PrevButton onClick={scrollPrev} enabled={prevButtonEnabled} />
      <NextButton onClick={scrollNext} enabled={nextButtonEnabled} />

      <Flex
        position="absolute"
        gap={[2, 3]}
        w="full"
        align="center"
        justify="center"
        bottom={[3, 6]}
      >
        {scrollSnaps.map((value, index) => (
          <DotButton
            key={value}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Flex>
    </Box>
  );
}
