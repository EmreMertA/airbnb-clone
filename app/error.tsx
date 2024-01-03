'use client';

import { useEffect } from 'react';
import EmptyState from './components/EmptyState';

interface ErrorProps {
  error: Error;
}

const ErrorState: React.FC<ErrorProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyState
      title='Something went wrong'
      subtitle='Please try again later'
    />
  );
};

export default ErrorState;
