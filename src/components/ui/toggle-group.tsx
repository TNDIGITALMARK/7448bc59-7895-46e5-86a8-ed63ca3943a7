function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";


import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = /*#__PURE__*/React.createContext(

  {
    size: "default",
    variant: "default"
  });

const ToggleGroup = /*#__PURE__*/React.forwardRef(



  ({ className, variant, size, children, ...props }, ref) => /*#__PURE__*/
  React.createElement(ToggleGroupPrimitive.Root, _extends({
    ref: ref,
    className: cn("flex items-center justify-center gap-1", className) },
  props, { "data-phoenix-id": "phoenix-7448bc59-1" }), /*#__PURE__*/

  React.createElement(ToggleGroupContext.Provider, { value: { variant, size }, "data-phoenix-id": "phoenix-7448bc59-2" },
  children
  )
  )
);

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = /*#__PURE__*/React.forwardRef(



  ({ className, children, variant, size, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);

    return (/*#__PURE__*/
      React.createElement(ToggleGroupPrimitive.Item, _extends({
        ref: ref,
        className: cn(
          toggleVariants({
            variant: context.variant || variant,
            size: context.size || size
          }),
          className
        ) },
      props, { "data-phoenix-id": "phoenix-7448bc59-3" }),

      children
      ));

  });

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };