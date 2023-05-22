import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const handleOnline = () => {
      setStatus('online');
    };

    const handleOffline = () => {
      setStatus('offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [status]);

  return (
    <div className={`status ${status === 'offline' ? 'status_offline' : null}`}>
      {status === 'online' ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;
