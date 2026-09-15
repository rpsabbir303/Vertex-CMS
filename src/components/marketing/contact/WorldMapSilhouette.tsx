import landPaths from "./worldMapLandPaths.json";

/** Stylized world landmass silhouettes — decorative product visual, not geographic claims. */
export function WorldMapSilhouette() {
  return (
    <g fill="#146EF5" fillOpacity="0.085" stroke="none">
      {landPaths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </g>
  );
}
