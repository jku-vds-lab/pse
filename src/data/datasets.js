export const datasets = [
    {
        "name": "Rubik's Cube",
        "domain": "Games",
        "id": "rubik",
        "type": "",
        "description": "Rubik’s cube is a famous puzzle toy devised in 1974 by the Hungarian inventor and professor of architecture Ernő Rubik. The classic Rubik’s cube has six faces, with each face being made up by a 3 × 3 grid of colored facets. These facets are the faces of smaller cubes, the so-called cubies. The cube consists of 26 such cubies: 8 corner cubies, with three facets each, 12 edge cubies with two facets each, and 6 center cubies with one facet each. The cube is considered solved when each of its faces shows only one color. Many solution strategies for Rubik’s cube have been developed. They differ in complexity and speed, depending on the number of special patterns and conditions that are detected and utilized in the solving process.  This state space in which the solution algorithms act is high-dimensional and encompasses more than 4.3 × 1019 unique states. The first step of visualizing the solution pathways is to transform the cube states into numerical representations for further processing. Each face of the cube is represented by a 3 × 3 matrix with one entry for each facet. For the entries representing the facet colors, we chose a one-hot encoding (i.e., (0,0,0,0,0,1) for red, (0,0,0,0,1,0) for green, etc.). This encoding facilitates the definition of meaningful distance metrics for dimensionality reduction. Flattening the resulting 6 × (3 × 3) × 6 tensor yielded a feature vector of length 324 for a single state. ",
        "tags": ["numerical", "tabular", "temporal", "games", "t-SNE", "Euclidean distance", "single-run", "multiple-runs", "same-origins", "different-origins", "progressing", "oscillation", "intersections", "regular", "cluster", "cycle", "U-turn", "dense intermediate points", "dense end points", "bundles", "similar-shapes"],
        "imagePath": "rubik.png",
        "datasetLinks": {
            "1x2 Different Origins": "https://jku-vds-lab.at/projection-space-explorer/?set=neural",
            "1x2 Same Origins": "https://jku-vds-lab.at/projection-space-explorer/?set=neural",
            "10x2 Different Origins": "https://jku-vds-lab.at/projection-space-explorer/?set=neural",
            "10x2 Same Origins": "https://jku-vds-lab.at/projection-space-explorer/?set=neural",
            "100x2 Different Origins": "https://jku-vds-lab.at/projection-space-explorer/?set=neural",
            "100x2 Same Origins": "https://jku-vds-lab.at/projection-space-explorer/?set=neural"
        }
    },
    {
        "name": "Chess",
        "domain": "Games",
        "id": "chess",
        "type": "",
        "description": "",
        "tags": [""],
        "imagePath": "chess.png"
    },
    {
        "name": "Go",
        "domain": "Games",
        "id": "go",
        "type": "",
        "description": "",
        "tags": [""],
        "imagePath": "go.png"
    },
    {
        "name": "Interaction provenance",
        "domain": "Visual Analytics",
        "id": "interaction_provenance",
        "type": "",
        "description": "Wrong picture, change when available.",
        "tags": [""],
        "imagePath": "rubik.png"
    },
    {
        "name": "Neural network training",
        "domain": "Machine Learning",
        "id": "neural_network_training",
        "type": "",
        "description": "",
        "tags": [""],
        "imagePath": "nn.png"
    },
    {
        "name": "Chemical data (CIME)",
        "domain": "Chemistry",
        "id": "chemical_data_cime",
        "type": "",
        "description": "",
        "tags": [""],
        "imagePath": "cime.png"
    },
    {
        "name": "Cohort analysis",
        "domain": "Medicine",
        "id": "cohort_analysis",
        "type": "",
        "description": "",
        "tags": [""],
        "imagePath": "cancer.png"
    },

]