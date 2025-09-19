'use client';

import React from 'react';

// Global error boundary - catches any errors that escape regular error boundaries
export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 font-sans" data-phoenix-id="phoenix-7448bc59-1">
      <div className="text-center max-w-md" data-phoenix-id="phoenix-7448bc59-2">
        <h1 className="text-2xl font-bold mb-4 text-red-600" data-phoenix-id="phoenix-7448bc59-3">
          Something went wrong!
        </h1>
        <p className="text-lg mb-8 text-gray-600" data-phoenix-id="phoenix-7448bc59-4">
          The application encountered an unexpected error. This is likely temporary.
        </p>
        <div className="flex gap-4 justify-center flex-wrap" data-phoenix-id="phoenix-7448bc59-5">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-500 text-white border-0 rounded-lg cursor-pointer text-base hover:bg-blue-600"
            data-phoenix-id="phoenix-7448bc59-6"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gray-500 text-white border-0 rounded-lg cursor-pointer text-base hover:bg-gray-600"
            data-phoenix-id="phoenix-7448bc59-7"
          >
            Go Home
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left" data-phoenix-id="phoenix-7448bc59-8">
            <summary className="cursor-pointer font-bold" data-phoenix-id="phoenix-7448bc59-9">
              Error Details (Development Only)
            </summary>
            <pre className="mt-4 p-4 bg-gray-100 rounded-lg text-sm overflow-auto" data-phoenix-id="phoenix-7448bc59-10">
              {error.message}
              {error.stack && '\n\nStack trace:\n' + error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}