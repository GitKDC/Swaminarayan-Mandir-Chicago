// src/components/sections/home/about/types.ts
export type AboutTab =
  | "temple"
  | "blessings"
  | "sampraday"
  | "biography"
  | "accomplishments"
  | "isssv";

export const ABOUT_TABS: { id: AboutTab; label: string }[] = [
  { id: "temple", label: "About Temple" },
  { id: "blessings", label: "Blessings" },
  { id: "sampraday", label: "Swaminarayan Sect" },
  { id: "biography", label: "Biography" },
  { id: "accomplishments", label: "Accomplishments" },
  { id: "isssv", label: "ISSSV" },
];
