
export enum categoryToColorEnum {
  "dataset properties" = "primary",
  "relations" = "secondary",
  "domain" = "success",
  "projection methods" = "danger",
  "Single- or Multi-session" = "warning",
  "characteristics" = "info",
  "patterns within curves" = "light",
  "patterns between curves" = "dark"
}

export enum categoryToDescriptionEnum {
  "dataset properties" = "Tags of this category describe properties about the dataset itself.<br/>This includes data attributes and data structures.",
  "relations" = "Data items can have different types of relations. There can be a temporal relationship between items or none.<br/>But also groups can be defined and relationships betwenn groups and items are possible.",
  "domain" = "The below datasets can be distinguished into 3 domains: games, medicine & science.",
  "projection methods" = "Tags of this category describe the applied dimensionality reduction technique<br/>and the used distance metric, if mentioned.",
  "Single- or Multi-session" = "Single-sessions relate to the analysis of one projection path at a time.<br/>On the contrary, in Multi-sessions multiple paths are analysed at once.<br/>Furthermore tags are listed that describe if the trajectories have the same or different starting states.",
  "characteristics" = "The characteristics describe properties of projection paths on a continuous scale from a global view.<br/>They relate to the overall development of paths in the embedding space.",
  "patterns within curves" = "Patterns within time curves are discrete and recognizable small structures,<br/>that appear between points from a local view.",
  "patterns between curves" = "Patterns can not only appear within projecition paths, but also between different ones."
}

export enum bsColorToHex {
  "primary" = "#007dad",
  "secondary" = "#6c757d",
  "success" = "#198754",
  "danger" = "#dc3545",
  "warning" = "#ffc107",
  "info" = "#0AACCC",
  "light" = "#B1B2B3",
  "dark" = "#212529",
}

export enum tagToCategoryEnum {
  "numerical" = "dataset properties",
  "categorical" = "dataset properties",
  "boolean" = "dataset properties",
  "SDF" = "dataset properties",
  "tabular" = "dataset properties",
  "graph" = "dataset properties",

  "temporal" = "relations",
  "scatter" = "relations",
  "groups" = "relations",
  "group-to-group relationships" = "relations",

  "games" = "domain",
  "medicine" = "domain",
  "science" = "domain",

  "MDS" = "projection methods",
  "PCA" = "projection methods",
  "t-SNE" = "projection methods",
  "UMAP" = "projection methods",
  "Euclidean distance" = "projection methods",
  "Manhatten distance" = "projection methods",

  "single-run" = "Single- or Multi-session",
  "multiple-runs" = "Single- or Multi-session",
  "same-origins" = "Single- or Multi-session",
  "different-origins" = "Single- or Multi-session",

  "progressing" = "characteristics",
  "stagnating" = "characteristics",
  "oscillation" = "characteristics",
  "intersections" = "characteristics",
  "sparse" = "characteristics",
  "dense" = "characteristics",
  "regular" = "characteristics",
  "irregular" = "characteristics",

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
  "similar shapes" = "patterns between curves"
}