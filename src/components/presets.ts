export const presets = [
  { name: "APatch Green", color: "#3ddc84" },
  { name: "Material Red", color: "#F44336" },
  { name: "Material Blue", color: "#2196F3" },
  { name: "Material Purple", color: "#9C27B0" },
  { name: "Material Orange", color: "#FF9800" },
  { name: "Material Teal", color: "#009688" },
  { name: "Material Pink", color: "#E91E63" },
  { name: "Material Indigo", color: "#3F51B5" },
  { name: "Material Cyan", color: "#00BCD4" },
  { name: "Material Amber", color: "#FFC107" },
  { name: "Deep Green", color: "#237c4b" },
  { name: "Lime", color: "#CDDC39" },
  { name: "Deep Purple", color: "#673AB7" },
  { name: "Light Blue", color: "#03A9F4" },
  { name: "Coral", color: "#FF7043" },
  { name: "Brown", color: "#795548" },
];

export type GradientType = "linear" | "radial";

export interface GradientTemplate {
  id: string;
  name: string;
  type: GradientType;
  attrs: Record<string, string>;
}

export const gradientTemplates: GradientTemplate[] = [
  {
    id: "horizontal",
    name: "Horizontal",
    type: "linear",
    attrs: { x1: "0%", y1: "50%", x2: "100%", y2: "50%" },
  },
  {
    id: "vertical",
    name: "Vertical",
    type: "linear",
    attrs: { x1: "50%", y1: "0%", x2: "50%", y2: "100%" },
  },
  {
    id: "diagonal",
    name: "Diagonal",
    type: "linear",
    attrs: { x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
  },
  {
    id: "diagonal-reverse",
    name: "Diagonal Reverse",
    type: "linear",
    attrs: { x1: "100%", y1: "0%", x2: "0%", y2: "100%" },
  },
  {
    id: "radial-center",
    name: "Radial",
    type: "radial",
    attrs: { cx: "50%", cy: "50%", r: "50%", fx: "50%", fy: "50%" },
  },
  {
    id: "radial-top",
    name: "Radial Top",
    type: "radial",
    attrs: { cx: "50%", cy: "0%", r: "70%", fx: "50%", fy: "0%" },
  },
];

export interface GradientPreset {
  name: string;
  colors: [string, string];
}

export const gradientPresets: GradientPreset[] = [
  { name: "Sunset", colors: ["#FF6B35", "#FFC145"] },
  { name: "Ocean", colors: ["#0077B6", "#00B4D8"] },
  { name: "Neon", colors: ["#FF00FF", "#00FFFF"] },
  { name: "Forest", colors: ["#2D6A4F", "#95D5B2"] },
  { name: "Berry", colors: ["#7B2D8E", "#F72585"] },
  { name: "Ember", colors: ["#DC2626", "#F97316"] },
  { name: "Aurora", colors: ["#4361EE", "#4CC9F0"] },
  { name: "Lavender", colors: ["#9D4EDD", "#E0AAFF"] },
  { name: "Cherry", colors: ["#D00000", "#FFB3C1"] },
  { name: "Mint", colors: ["#06D6A0", "#B5EAD7"] },
];
