function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = /*#__PURE__*/React.forwardRef(




  ({ className, inset, children, ...props }, ref) => /*#__PURE__*/
  React.createElement(DropdownMenuPrimitive.SubTrigger, _extends({
    ref: ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ) },
  props, { "data-phoenix-id": "phoenix-7448bc59-1" }),

  children, /*#__PURE__*/
  React.createElement(ChevronRight, { className: "ml-auto h-4 w-4", "data-phoenix-id": "phoenix-7448bc59-2" })
  )
);
DropdownMenuSubTrigger.displayName =
DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = /*#__PURE__*/React.forwardRef(


  ({ className, ...props }, ref) => /*#__PURE__*/
  React.createElement(DropdownMenuPrimitive.SubContent, _extends({
    ref: ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ) },
  props, { "data-phoenix-id": "phoenix-7448bc59-3" })
  )
);
DropdownMenuSubContent.displayName =
DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = /*#__PURE__*/React.forwardRef(


  ({ className, sideOffset = 4, ...props }, ref) => /*#__PURE__*/
  React.createElement(DropdownMenuPrimitive.Portal, { "data-phoenix-id": "phoenix-7448bc59-4" }, /*#__PURE__*/
  React.createElement(DropdownMenuPrimitive.Content, _extends({
    ref: ref,
    sideOffset: sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ) },
  props, { "data-phoenix-id": "phoenix-7448bc59-5" })
  )
  )
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = /*#__PURE__*/React.forwardRef(




  ({ className, inset, ...props }, ref) => /*#__PURE__*/
  React.createElement(DropdownMenuPrimitive.Item, _extends({
    ref: ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ) },
  props, { "data-phoenix-id": "phoenix-7448bc59-6" })
  )
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = /*#__PURE__*/React.forwardRef(


  ({ className, children, checked, ...props }, ref) => /*#__PURE__*/
  React.createElement(DropdownMenuPrimitive.CheckboxItem, _extends({
    ref: ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked: checked },
  props, { "data-phoenix-id": "phoenix-7448bc59-7" }), /*#__PURE__*/

  React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", "data-phoenix-id": "phoenix-7448bc59-8" }, /*#__PURE__*/
  React.createElement(DropdownMenuPrimitive.ItemIndicator, { "data-phoenix-id": "phoenix-7448bc59-9" }, /*#__PURE__*/
  React.createElement(Check, { className: "h-4 w-4", "data-phoenix-id": "phoenix-7448bc59-10" })
  )
  ),
  children
  )
);
DropdownMenuCheckboxItem.displayName =
DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = /*#__PURE__*/React.forwardRef(


  ({ className, children, ...props }, ref) => /*#__PURE__*/
  React.createElement(DropdownMenuPrimitive.RadioItem, _extends({
    ref: ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ) },
  props, { "data-phoenix-id": "phoenix-7448bc59-11" }), /*#__PURE__*/

  React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", "data-phoenix-id": "phoenix-7448bc59-12" }, /*#__PURE__*/
  React.createElement(DropdownMenuPrimitive.ItemIndicator, { "data-phoenix-id": "phoenix-7448bc59-13" }, /*#__PURE__*/
  React.createElement(Circle, { className: "h-2 w-2 fill-current", "data-phoenix-id": "phoenix-7448bc59-14" })
  )
  ),
  children
  )
);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = /*#__PURE__*/React.forwardRef(




  ({ className, inset, ...props }, ref) => /*#__PURE__*/
  React.createElement(DropdownMenuPrimitive.Label, _extends({
    ref: ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ) },
  props, { "data-phoenix-id": "phoenix-7448bc59-15" })
  )
);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = /*#__PURE__*/React.forwardRef(


  ({ className, ...props }, ref) => /*#__PURE__*/
  React.createElement(DropdownMenuPrimitive.Separator, _extends({
    ref: ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className) },
  props, { "data-phoenix-id": "phoenix-7448bc59-16" })
  )
);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return (/*#__PURE__*/
    React.createElement("span", _extends({
      className: cn("ml-auto text-xs tracking-widest opacity-60", className) },
    props, { "data-phoenix-id": "phoenix-7448bc59-17" })
    ));

};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup };