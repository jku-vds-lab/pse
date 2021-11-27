
export enum categoryToColorEnum {
  "dataset properties" = "primary",
  "relations of data itmes" = "secondary",
  "domain" = "success",
  "projection methods" = "danger",
  "Single- or Multi-session investigation" = "warning",
  "characteristics of projection paths" = "info",
  "patterns within curves" = "light",
  "patterns between curves" = "dark"
}

export enum tagToCategoryEnum {
  "numerical" = "dataset properties",
  "categorical" = "dataset properties",
  "boolean" = "dataset properties",
  "tabular" = "dataset properties",
  "graph" = "dataset properties",

  "temporal" = "relations of data itmes",
  "groups" = "relations of data itmes",
  "group-to-group relationships" = "relations of data itmes",

  "games" = "domain",
  "medicine" = "domain",
  "science" = "domain",

  "MDS" = "projection methods",
  "PCA" = "projection methods",
  "t-SNE" = "projection methods",
  "UMAP" = "projection methods",
  "Euclidean distance" = "projection methods",
  "Manhatten distance" = "projection methods",

  "single-run" = "Single- or Multi-session investigation",
  "multiple-runs" = "Single- or Multi-session investigation",
  "same-origins" = "Single- or Multi-session investigation",
  "different-origins" = "Single- or Multi-session investigation",

  "progressing" = "characteristics of projection paths",
  "stagnating" = "characteristics of projection paths",
  "oscillation" = "characteristics of projection paths",
  "intersections" = "characteristics of projection paths",
  "sparse" = "characteristics of projection paths",
  "dense" = "characteristics of projection paths",
  "regular" = "characteristics of projection paths",
  "irregular" = "characteristics of projection paths",

  "cluster" = "patterns within curves",
  "transition" = "patterns within curves",
  "cycle" = "patterns within curves",
  "U-turn" = "patterns within curves",
  "outlier" = "patterns within curves",
  "alternation" = "patterns within curves",
  
  "dense starting points" = "patterns between curves",
  "sparse starting points" = "patterns between curves",
  "dense intermediate points" = "patterns between curves",
  "sparse intermediate points" = "patterns between curves",
  "dense end points" = "patterns between curves",
  "sparse end points" = "patterns between curves",
  "bundles" = "patterns between curves",
  "bundles with different directions" = "patterns between curves",
  "bundles with different velocities" = "patterns between curves",
  "similar shapes" = "patterns between curves"
}