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

  return (/*#__PURE__*/
    React.createElement(Script, {
      src: "/phoenix-tracking.js",
      strategy: "afterInteractive", "data-phoenix-id": "phoenix-7448bc59-1" }
    ));

}