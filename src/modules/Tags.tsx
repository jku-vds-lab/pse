export enum TagsColorsIndex {
  "numerical", "categorical", "boolean",
  "tabular", "graph",
  "temporal", "groups", "clusters",
  "games", "medicine", "science",
  "MDS", "PCA", "t-SNE",
  "single-run", "multiple-runs", "same-origins", "different-origins",
  "progressing", "stagnating", "oscillation", "intersections", "sparse", "dense", "regular", "irregular",
  "cluster", "transition", "cycle", "U-turn", "outlier", "alternation",
  "dense starting points", "sparse starting points", "dense intermediate points", "sparse intermediate points", "dense end points", "sparse end points", "bundles", "bundles with different directions", "bundles with different velocities", "similar shapes"
}

const makeRepeated = (arr: string[], repeats: number) =>
  Array.from({ length: repeats }, () => arr).flat();

export const tagColors = makeRepeated(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'], 50);