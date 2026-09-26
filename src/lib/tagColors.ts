// Pastel tag colors, shared across components that render topic tags.
// Colored backgrounds tinted from the requested palette. Text uses a saturated dark shade
// of the same hue in light mode and a saturated light shade in dark mode, so it stays
// legible against the tinted pill background regardless of theme.
export const TAG_COLORS = [
    { bg: 'bg-[#DD9BE9]/30 dark:bg-[#DD9BE9]/35', text: 'text-[#741485] dark:text-[#E7B1F1]' }, // Orchid
    { bg: 'bg-[#FF9AC8]/30 dark:bg-[#FF9AC8]/35', text: 'text-[#990046] dark:text-[#FFA3CD]' }, // Pink
    { bg: 'bg-[#FFAC9A]/30 dark:bg-[#FFAC9A]/35', text: 'text-[#991B00] dark:text-[#FFB4A3]' }, // Peach
    { bg: 'bg-[#FFCF73]/35 dark:bg-[#FFCF73]/40', text: 'text-[#996500] dark:text-[#FFE0A3]' }, // Gold
    { bg: 'bg-[#F9F871]/40 dark:bg-[#F9F871]/45', text: 'text-[#999800] dark:text-[#FEFDA5]' }, // Pale Yellow
    { bg: 'bg-[#928CDE]/30 dark:bg-[#928CDE]/35', text: 'text-[#221A7F] dark:text-[#B9B5ED]' }, // Periwinkle Purple
    { bg: 'bg-[#9A76CA]/30 dark:bg-[#9A76CA]/35', text: 'text-[#472376] dark:text-[#CEBBE8]' }, // Violet
    { bg: 'bg-[#26C196]/20 dark:bg-[#26C196]/40', text: 'text-[#128767] dark:text-[#B0F2E0]' }, // Teal Green
];

// Manual overrides for tags that should always use a specific color, regardless of hash.
const TAG_COLOR_OVERRIDES: Record<string, { bg: string; text: string }> = {
    'LLM-based Agents': { bg: 'bg-[#34D399]/30 dark:bg-[#34D399]/35', text: 'text-[#065F46] dark:text-[#A7F3D0]' }, // Green
    'Multimodal State Recognition': { bg: 'bg-[#38BDF8]/30 dark:bg-[#38BDF8]/35', text: 'text-[#075985] dark:text-[#BAE6FD]' }, // Blue
};

// Deterministic color per tag string, so the same tag always gets the same color.
export function getTagColor(tag: string) {
    if (TAG_COLOR_OVERRIDES[tag]) {
        return TAG_COLOR_OVERRIDES[tag];
    }

    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
        hash = (hash * 31 + tag.charCodeAt(i)) >>> 0;
    }
    return TAG_COLORS[hash % TAG_COLORS.length];
}
