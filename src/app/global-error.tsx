'use client';

import React from 'react';

// Global error boundary - catches any errors that escape regular error boundaries
export default function GlobalError({
  error,
  reset



}) {
  return (/*#__PURE__*/
    React.createElement("div", { className: "min-h-screen flex items-center justify-center p-8 font-sans", "data-phoenix-id": "phoenix-7448bc59-1" }, /*#__PURE__*/
    React.createElement("div", { className: "text-center max-w-md", "data-phoenix-id": "phoenix-7448bc59-2" }, /*#__PURE__*/
    React.createElement("h1", { className: "text-2xl font-bold mb-4 text-red-600", "data-phoenix-id": "phoenix-7448bc59-3" }, "Something went wrong!"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-lg mb-8 text-gray-600", "data-phoenix-id": "phoenix-7448bc59-4" }, "The application encountered an unexpected error. This is likely temporary."

    ), /*#__PURE__*/
    React.createElement("div", { className: "flex gap-4 justify-center flex-wrap", "data-phoenix-id": "phoenix-7448bc59-5" }, /*#__PURE__*/
    React.createElement("button", {
      onClick: reset,
      className: "px-6 py-3 bg-blue-500 text-white border-0 rounded-lg cursor-pointer text-base hover:bg-blue-600", "data-phoenix-id": "phoenix-7448bc59-6" },
    "Try Again"

    ), /*#__PURE__*/
    React.createElement("button", {
      onClick: () => window.location.href = '/',
      className: "px-6 py-3 bg-gray-500 text-white border-0 rounded-lg cursor-pointer text-base hover:bg-gray-600", "data-phoenix-id": "phoenix-7448bc59-7" },
    "Go Home"

    )
    ),
    process.env.NODE_ENV === 'development' && /*#__PURE__*/
    React.createElement("details", { className: "mt-8 text-left", "data-phoenix-id": "phoenix-7448bc59-8" }, /*#__PURE__*/
    React.createElement("summary", { className: "cursor-pointer font-bold", "data-phoenix-id": "phoenix-7448bc59-9" }, "Error Details (Development Only)"

    ), /*#__PURE__*/
    React.createElement("pre", { className: "mt-4 p-4 bg-gray-100 rounded-lg text-sm overflow-auto", "data-phoenix-id": "phoenix-7448bc59-10" },
    error.message,
    error.stack && '\n\nStack trace:\n' + error.stack
    )
    )

    )
    ));

}