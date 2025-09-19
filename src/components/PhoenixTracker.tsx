'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export function PhoenixTracker() {
  useEffect(() => {
    // Dynamically add CSS to head
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/phoenix-tracking.css';
      document.head.appendChild(link);
      
      return () => {
        // Cleanup
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, []);

  return (
    <Script
      src="/phoenix-tracking.js"
      strategy="afterInteractive"
    />
  );
}