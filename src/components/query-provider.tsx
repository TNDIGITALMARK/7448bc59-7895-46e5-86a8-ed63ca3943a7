"use client";
import React from 'react';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function QueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (/*#__PURE__*/
    React.createElement(QueryClientProvider, { client: queryClient, "data-phoenix-id": "phoenix-7448bc59-1" },
    children
    ));

}