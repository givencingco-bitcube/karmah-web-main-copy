export function colorPaletteGen({
  color,
  defaultColor = 500,
  ranges,
}: {
  color: string;
  defaultColor?: number;
  ranges: number[];
}) {
  const colorRange = ranges.reduce(
    (acc, range) => {
      acc[range] = `var(--${color}-${range})`;
      acc[`${range}-foreground`] = `var(--${color}-${range}-foreground)`;
      return acc;
    },
    {} as Record<string, string>,
  );

  const colorPalette = {
    DEFAULT: `var(--${color}-${defaultColor})`,
    foreground: `var(--${color}-${defaultColor}-foreground)`,
    ...colorRange,
  };

  return { [color]: colorPalette };
}
