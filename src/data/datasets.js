export const datasets = [
    {
        "name": "Rubik's Cube",
        "domain": "Games",
        "id": "rubik",
        "type": "temporal",
        "primaryDescription": "Rubik’s cube is a famous puzzle toy devised in 1974 by the Hungarian inventor and professor of architecture Ernő Rubik. The classic Rubik’s cube has six faces, with each face being made up by a 3 × 3 grid of colored facets.",
        "secondaryDescription": "These facets are the faces of smaller cubes, the so-called cubies. The cube consists of 26 such cubies: 8 corner cubies, with three facets each, 12 edge cubies with two facets each, and 6 center cubies with one facet each. The cube is considered solved when each of its faces shows only one color. Many solution strategies for Rubik’s cube have been developed. They differ in complexity and speed, depending on the number of special patterns and conditions that are detected and utilized in the solving process. This state space in which the solution algorithms act is high-dimensional and encompasses more than 4.3 × 1019 unique states. The first step of visualizing the solution pathways is to transform the cube states into numerical representations for further processing. Each face of the cube is represented by a 3 × 3 matrix with one entry for each facet. For the entries representing the facet colors, we chose a one-hot encoding (i.e., (0,0,0,0,0,1) for red, (0,0,0,0,1,0) for green, etc.). This encoding facilitates the definition of meaningful distance metrics for dimensionality reduction. Flattening the resulting 6 × (3 × 3) × 6 tensor yielded a feature vector of length 324 for a single state. ",
        "tags": ["categorical", "tabular", "temporal", "games", "t-SNE", "Euclidean distance", "single-run", "multiple-runs", "same-origins", "different-origins", "progressing", "oscillation", "intersections", "regular", "cluster", "cycle", "U-turn", "dense intermediate points", "dense end points", "bundles", "similar shapes"],
        "imagePath": "rubik.png",
        "datasetLinks": {
            "1x2 Different Origins": "#", 
            "1x2 Same Origins": "#",
            "10x2 Different Origins": "#",
            "10x2 Same Origins": "#",
            "100x2 Different Origins": "#",
            "100x2 Same Origins": "#",
            "Rubik's cube data": "https://github.com/jku-vds-lab/projection-space-explorer/tree/master/datasets/rubik"
        }
    },
    {
        "name": "Chess",
        "domain": "Games",
        "id": "chess",
        "type": "temporal",
        "primaryDescription": "This use case targets the analysis of professional chess games downloaded from the KingBase chess database.",
        "secondaryDescription": "As hobby chess players and inspired by the popular TV series The Queen’s Gambit, we are eager to learn more about how professional players open their games and what influence openings have on the strategy, progression, and outcome of the games. To prepare the dataset, we parsed the raw data files that are provided in the PGN format using the chess module of the pgn2gif Python package. The resulting sequences of chessboard states are encoded in 64 categorical attributes— each representing a square on the chessboard. There are 13 categories in total: six for the different black pieces, six for the different white pieces, and one for empty squares. A chessboard is organized in ranks (rows) and files (columns) with the identifiers 1 to 8 and a to h, respectively. The white player’s perspective defines the order of these identifiers. Letters go from left to right, and 1 is closest to the player. As a preprocessing step, we projected the data using t-SNE with a learning rate of 100 and a perplexity value of 50. Additionally, we added an identifier for each game that corresponds to one opening strategy (the first move by white). Furthermore, we created one group for the starting position and several groups for the most common chessboard states for the first ten moves and labeled them accordingly.",
        "tags": ["categorical", "tabular", "temporal", "groups", "games", "t-SNE", "multiple-runs", "same-origins", "progressing", "dense", "regular", "cluster", "transition", "U-turn", "dense starting points", "dense intermediate points", "bundles", "similar shapes"],
        "imagePath": "chess.png",
        "datasetLinks": {
            "190 Games": "#",
            "450 Games": "#",
            "450 Games (Groups)": "#",
            "AlphaZero vs Stockfish": "#",
            "Chess data": "https://github.com/jku-vds-lab/projection-space-explorer/tree/master/datasets/chess"
        }
    },
    {
        "name": "Neural network training",
        "domain": "Machine Learning",
        "id": "neural_network_training",
        "type": "temporal",
        "primaryDescription": "Deep neural networks are a class of powerful, nonlinear models that can learn complex representations of data.",
        "secondaryDescription": "They have greatly improved the state of the art in a diverse range of application domains, including computer vision, speech recognition, drug discovery, and genomics. However, the learning behavior of deep neural networks is difficult to interpret. It is usually not clear, how a certain choice of hyperparameters or a certain train/test split affect the final performance of the model. With the growing impact of deep learning on real-world decision-making, these difficulties have led to an increased demand for explainable or interpretable models. One possible way of analyzing, understanding, and communicating the processes during deep learning is visualization. The training of neural networks can be viewed as sequential steps through a high-dimensional state space. We chose two different state-space representations: a representation of the weight space and a representation of the confusion matrix. The weight representation corresponds directly to the weights learned by the network. The confusion matrix representation is more closely connected to network performance. At each epoch, we let the network classify all test instances, and construct the resulting confusion matrix.",
        "tags": ["numerical", "tabular", "temporal", "science", "PCA", "t-SNE",  "Euclidean distance", "multiple-runs", "same-origins", "different-origins", "progressing", "oscillation", "dense", "regular", "transition", "U-turn", "dense starting points", "bundles", "bundles with different velocities", "similar shapes"],
        "imagePath": "nn.png",
        "datasetLinks": {
            "Rnd Weights": "#",
            "Rnd Confusion Matrix": "#",
            "Weights": "#",
            "Confusion Matrix": "#",
            "Neural Network data": "https://github.com/jku-vds-lab/projection-space-explorer/tree/master/datasets/neural"
        }
    },
    {
        "name": "Cohort analysis",
        "domain": "Medicine",
        "id": "cohort_analysis",
        "type": "scatter",
        "primaryDescription": "This use case is motivated by a recent New York Times article that features a new generation of drugs for cancer treatment, targeting the KRAS gene.",
        "secondaryDescription": "Mutations of KRAS can lead to uncontrolled cell growth, i.e., cancer. In fact, KRAS mutations are one of the most frequent mutations found in cancer tissue samples. One particular mutation of this gene, Gly12Cys, is highly prevalent in lung, colorectal, and pancreatic cancer. With the new therapy, the cell growth caused by the mutated KRAS gene can be prevented, even causing cancers to shrink. Based on these advances, we want to investigate genomics data from The Cancer Genome Atlas  that we previously already worked with . The dataset contains data extracted from tumor samples and includes meta-data such as the age and gender of the patients, gene expression, mutation, and copy number data (745 attributes in total). For the purpose of this use case, we extracted data for the three aforementioned tumor types from the Ordino application, resulting in 1238 tissue samples. The goal of this analysis is to determine the prevalence of KRAS mutations, specifically Gly12Cys. Within the scope of this paper, we also investigate the expression of tumor-related genes and how they relate to different tumor types.",
        "tags": ["numerical", "categorical", "tabular", "groups", "group-to-group relationships", "medicine", "UMAP", "cluster"],
        "imagePath": "cancer.png",
        "datasetLinks": {
            "TCGA Sub-Sampled": "#",
            "TCGA Lung, Colorectal, and Pancreatic Cancer": "#",
            "TCGA data": "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga"
        }
    },
    {
        "name": "Go",
        "domain": "Games",
        "id": "go",
        "type": "temporal",
        "primaryDescription": "",
        "secondaryDescription": "TODO: Add description when available!",
        "tags": ["categorical", "tabular", "temporal", "games", "multiple-runs", "different-origins", "progressing", "dense", "regular", "cluster", "transition", "dense starting points", "sparse intermediate points", "sparse end points", "bundles", "similar shapes"],
        "imagePath": "go.png",
        "datasetLinks": {
            "State features": "#",
            "Histogram features": "#",
            "Move features (wavelet)": "#",
            "Go data": "https://github.com/jku-vds-lab/projection-space-explorer/tree/master/datasets/go"
        }
    },
    {
        "name": "Interaction provenance",
        "domain": "Visual Analytics",
        "id": "interaction_provenance",
        "type": "",
        "primaryDescription": "",
        "secondaryDescription": "TODO: Wrong picture, change when available.",
        "tags": [""],
        "imagePath": "rubik.png"
    },
    {
        "name": "Chemical data (CIME)",
        "domain": "Chemistry",
        "id": "chemical_data_cime",
        "type": "",
        "primaryDescription": "",
        "secondaryDescription": "TODO",
        "tags": [""],
        "imagePath": "cime.png"
    }

]