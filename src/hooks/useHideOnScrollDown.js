import { useEffect, useState, useRef } from 'react';
import throttle from 'lodash.throttle';
import { isModalOpen } from 'helpers';

const THROTTLE_DELAY = 150;

export const useHideOnScrollDown = (
  visibility = true,
  { delay = THROTTLE_DELAY } = {}
) => {
  const [visible, setVisible] = useState(visibility);
  const [onTop, setOnTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleDocumentScroll = () => {
      if (isModalOpen()) return;
      const { scrollY } = window;
      setOnTop(scrollY === 0);
      setVisible(lastScrollY.current > scrollY);
      lastScrollY.current = scrollY;
    };

    document.addEventListener(
      'scroll',
      throttle(handleDocumentScroll, THROTTLE_DELAY)
    );
  }, []);

  return [visible, onTop];
};
