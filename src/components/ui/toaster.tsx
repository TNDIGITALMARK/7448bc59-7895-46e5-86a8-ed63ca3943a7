"use client";

import React from 'react';

function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport } from
"@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (/*#__PURE__*/
    React.createElement(ToastProvider, { "data-phoenix-id": "phoenix-7448bc59-1" },
    toasts.map(function ({ id, title, description, action, ...props }) {
      return (/*#__PURE__*/
        React.createElement(Toast, _extends({ key: id }, props, { "data-phoenix-id": "phoenix-7448bc59-2" }), /*#__PURE__*/
        React.createElement("div", { className: "grid gap-1", "data-phoenix-id": "phoenix-7448bc59-3" },
        title && /*#__PURE__*/React.createElement(ToastTitle, { "data-phoenix-id": "phoenix-7448bc59-4" }, title),
        description && /*#__PURE__*/
        React.createElement(ToastDescription, { "data-phoenix-id": "phoenix-7448bc59-5" }, description)

        ),
        action, /*#__PURE__*/
        React.createElement(ToastClose, { "data-phoenix-id": "phoenix-7448bc59-6" })
        ));

    }), /*#__PURE__*/
    React.createElement(ToastViewport, { "data-phoenix-id": "phoenix-7448bc59-7" })
    ));

}