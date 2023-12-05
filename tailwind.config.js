const colors = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#84cc16",
  "#10b981",
  "#0ea5e9",
  "#6366f1",
  "#d946ef",
  "#7c3aed",
];

const safelist = [
  colors.map((color) => `bg-[${color}]`),
  colors.map((color) => `border-[${color}]`),
  colors.map((color) => `text-[${color}]`),
  colors.map(
    (color) => `hover:shadow-[0px_0px_0px_3px_#020617,0px_0px_0px_6px_${color}]`
  ),
  colors.map(
    (color) =>
      `focus-visible:shadow-[0px_0px_0px_3px_#020617,0px_0px_0px_6px_${color}]`
  ),
  colors.map((color) => `[&::-webkit-progress-value]:bg-[${color}]`),
  "grid-cols-4",
  "grid-cols-5",
];

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: safelist.flat(),
};
