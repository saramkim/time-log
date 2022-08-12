import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const preventEvent = () => {
  const process = useSelector((state: RootState) => state.process);

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    if (process !== 'stop') {
      (() => {
        window.addEventListener('beforeunload', preventClose);
      })();
    }
    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, [process]);

  const preventBack = () => {
    window.history.pushState(null, '', window.location.href);
  };

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', preventBack);
    return () => {
      window.removeEventListener('popstate', preventBack);
    };
  }, []);
};
