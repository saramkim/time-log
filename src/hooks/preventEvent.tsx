import { useEffect } from 'react';

export const preventEvent = () => {
  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();
    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

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
