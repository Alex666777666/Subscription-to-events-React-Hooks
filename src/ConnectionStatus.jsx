import React, { useState, useEffect } from 'react'

function ConnectionStatus() {
  const [status, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
    }

    const handleOffline = () => {
      setIsOnline(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <div className={status ? 'status' : 'status status_offline'}>
      <p>Status: {status ? 'Online' : 'Offline'}</p>
    </div>
  )
}

export default ConnectionStatus
