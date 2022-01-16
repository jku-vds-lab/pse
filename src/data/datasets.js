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
            "1x2 Different Origins": "https://jku-vds-lab.at/projection-space-explorer?set=rubik/cube1x2_different_origins.csv", 
            "1x2 Same Origins": "https://jku-vds-lab.at/projection-space-explorer?set=rubik/cube1x2.csv",
            "10x2 Different Origins": "https://jku-vds-lab.at/projection-space-explorer?set=rubik/cube10x2_different_origins.csv",
            "10x2 Same Origins": "https://jku-vds-lab.at/projection-space-explorer?set=rubik/cube10x2.csv",
            "100x2 Different Origins": "https://jku-vds-lab.at/projection-space-explorer?set=rubik/cube100x2_different_origins.csv",
            "100x2 Same Origins": "https://jku-vds-lab.at/projection-space-explorer?set=rubik/cube100x2.csv",
            "Data files": "https://github.com/jku-vds-lab/projection-space-explorer/tree/master/datasets/rubik",
            "paper link": "https://jku-vds-lab.at/publications/2020_tiis_pathexplorer/"
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
            "190 Games": "https://jku-vds-lab.at/projection-space-explorer?set=chess/chess16k.csv",
            "450 Games": "https://jku-vds-lab.at/projection-space-explorer?set=chess/chess40k.csv",
            "450 Games (Groups)": "https://jku-vds-lab.at/projection-space-explorer?set=chess/chess40k_groups.json",
            "AlphaZero vs Stockfish": "https://jku-vds-lab.at/projection-space-explorer?set=chess/alphazero.csv",
            "Data files": "https://github.com/jku-vds-lab/projection-space-explorer/tree/master/datasets/chess",
            "paper link": "https://jku-vds-lab.at/publications/2020_tiis_pathexplorer/"
        }
    },
    {
        "name": "Neural network training",
        "domain": "Machine Learning",
        "id": "neural_network_training",
        "type": "temporal",
        "primaryDescription": "Deep neural networks are a class of powerful, nonlinear models that can learn complex representations of data.",
        "secondaryDescription": "They have greatly improved the state of the art in a diverse range of application domains, including computer vision, speech recognition, drug discovery, and genomics. However, the learning behavior of deep neural networks is difficult to interpret. It is usually not clear, how a certain choice of hyperparameters or a certain train/test split affect the final performance of the model. With the growing impact of deep learning on real-world decision-making, these difficulties have led to an increased demand for explainable or interpretable models. One possible way of analyzing, understanding, and communicating the processes during deep learning is visualization. The training of neural networks can be viewed as sequential steps through a high-dimensional state space. We chose two different state-space representations: a representation of the weight space and a representation of the confusion matrix. The weight representation corresponds directly to the weights learned by the network. The confusion matrix representation is more closely connected to network performance. At each epoch, we let the network classify all test instances, and construct the resulting confusion matrix.",
        "tags": ["numerical", "tabular", "temporal", "science", "PCA", "t-SNE",  "Euclidean distance", "multiple-runs", "same-origins", "different-origins", "progressing", "oscillation", "dense", "regular", "transition", "U-turn", "dense starting points", "bundles", "similar shapes"],
        "imagePath": "nn.png",
        "datasetLinks": {
            "Rnd Weights": "https://jku-vds-lab.at/projection-space-explorer?set=neural/random_weights.csv",
            "Rnd Confusion Matrix": "https://jku-vds-lab.at/projection-space-explorer?set=neural/random_confmat.csv",
            "Weights": "https://jku-vds-lab.at/projection-space-explorer?set=neural/learning_weights.csv",
            "Confusion Matrix": "https://jku-vds-lab.at/projection-space-explorer?set=neural/learning_confmat.csv",
            "Data files": "https://github.com/jku-vds-lab/projection-space-explorer/tree/master/datasets/neural",
            "paper link": "https://jku-vds-lab.at/publications/2020_tiis_pathexplorer/"
        }
    },
    {
        "name": "Cohort analysis",
        "domain": "Medicine",
        "id": "cohort_analysis",
        "type": "scatter",
        "primaryDescription": "This use case is motivated by a recent New York Times article that features a new generation of drugs for cancer treatment, targeting the KRAS gene.",
        "secondaryDescription": "Mutations of KRAS can lead to uncontrolled cell growth, i.e., cancer. In fact, KRAS mutations are one of the most frequent mutations found in cancer tissue samples. One particular mutation of this gene, Gly12Cys, is highly prevalent in lung, colorectal, and pancreatic cancer. With the new therapy, the cell growth caused by the mutated KRAS gene can be prevented, even causing cancers to shrink. Based on these advances, we want to investigate genomics data from The Cancer Genome Atlas  that we previously already worked with . The dataset contains data extracted from tumor samples and includes meta-data such as the age and gender of the patients, gene expression, mutation, and copy number data (745 attributes in total). For the purpose of this use case, we extracted data for the three aforementioned tumor types from the Ordino application, resulting in 1238 tissue samples. The goal of this analysis is to determine the prevalence of KRAS mutations, specifically Gly12Cys. Within the scope of this paper, we also investigate the expression of tumor-related genes and how they relate to different tumor types.",
        "tags": ["numerical", "categorical", "tabular", "scatter", "groups", "group-to-group relationships", "medicine", "UMAP", "cluster"],
        "imagePath": "cancer.png",
        "datasetLinks": {
            "TCGA Sub-Sampled (TODO)": "#",
            "TCGA Lung, Colorectal, and Pancreatic Cancer (TODO)": "#",
            "Data files": "https://github.com/jku-vds-lab/projection-space-explorer/tree/master/datasets/coral",
            "paper link": "https://jku-vds-lab.at/publications/2021_preprint_multilevel-embedding/"
        }
    },
    {
        "name": "Go",
        "domain": "Games",
        "id": "go",
        "type": "temporal",
        "primaryDescription": "Go is an abstract strategy board game for two players in which the aim is to surround more territory than the opponent. The game was invented in China more than 2,500 years ago and is believed to be the oldest board game continuously played to the present day.",
        "secondaryDescription": "TODO: Add mode description when available!",
        "tags": ["categorical", "tabular", "temporal", "games", "multiple-runs", "different-origins", "progressing", "dense", "regular", "cluster", "transition", "dense starting points", "sparse intermediate points", "sparse end points", "bundles", "similar shapes"],
        "imagePath": "go.png",
        "datasetLinks": {
            "State features": "https://jku-vds-lab.at/projection-space-explorer?set=go/combined.csv",
            "Histogram features": "https://jku-vds-lab.at/projection-space-explorer?set=go/histogram.csv",
            "Move features (wavelet)": "https://jku-vds-lab.at/projection-space-explorer?set=go/move_wavelet.csv",
            "Data files": "https://github.com/jku-vds-lab/projection-space-explorer/tree/master/datasets/go"
        }
    },
    {
        "name": "Gapminder",
        "domain": "Visual Analytics",
        "id": "gapminder",
        "type": "temporal",
        "primaryDescription": "The Gapminder tool allows users to explore the development of countries over time.",
        "secondaryDescription": "It consists of a bubble chart in which each country is represented by a colored mark. Users can interactively map attributes, such as GDP, life expectancy, and child mortality, to either one of the axes or the size of the country marks, and change the year between 1800 and 2015 with a time slider. At any time, the application state can be fully described by the following information: the timestamp of the interaction; the data attributes mapped to x-axis, y-axis, mark size, and mark color; the year selected (between 1800 and 2015); and any countries selected. For the purpose of meta-analysis, we use the sequence of application states visited by a user and display the interaction provenance.We conducted a user study with 32 participants (m: 17, f: 15). The participants were students of a Data Science master program, as part of which they attended an introductory course on data visualization. We asked participants to find answers to four tasks following the Brehmer and Munzner taxonomy  by using the Gapminder tool.",
        "tags": ["numerical", "categorical", "tabular", "temporal", "science", "MDS", "t-SNE", "UMAP", "multiple-runs", "same-origins", "progressing", "oscillation", "intersections", "sparse", "regular","cluster", "transition", "cycle", "U-turn", "outlier", "alternation", "dense starting points", "dense intermediate points", "dense end points", "sparse end points", "bundles", "similar shapes"],
        "imagePath": "gapminder.png",
        "datasetLinks": {
            "Synthetic MDS": "#",
            "Synthetic t-SNE": "#",
            "Synthetic t-SNE (w_num=5)": "#",
            "Synthetic UMAP": "#",
            "User MDS": "#",
            "User t-SNE": "#",
            "User UMAP": "#",
            "Data files": "#",
            "paper link": "https://jku-vds-lab.at/publications/2020_preprint_provectories/"
        }
    },
    {
        "name": "User Intent Sessions",
        "domain": "Visual Analytics",
        "id": "user_intent",
        "type": "temporal",
        "primaryDescription": "We demonstrate the general applicability of PSE using interaction provenance data from the users’ intent study by Gadhave et al.",
        "secondaryDescription": "They conducted a crowdsourcing user study with 130 participants, where each participant conducted five different tasks. Among these tasks, participants were asked to select outliers or data points that belong to a cluster in a scatterplot. They analyzed two conditions. In the first condition, users were computationally supported by an auto-complete feature to select e.g., the desired outliers. This feature became apparent after selecting the first data point. For the second condition, users had to accomplish the tasks manually without any computational assistance. In total, 12 different datasets were used for outlier tasks (cluster and linear) and six for cluster tasks, each with three difficulty levels (easy, medium, hard). To analyze the user behavior, we extracted the set of selected data points after each interaction. Unlike in the Gapminder example, we chose not to use this information as a simple set attribute, but instead calculate a more meaningful feature vector that concisely describes both the number and the position of all selected points.We first normalize the coordinates of all data points from the different datasets that users interacted with.We then construct a 10-by-10 grid and count the number of selected points within each grid cell. The resulting 2D histogram is flattened into a vector and the vectors are compared using the cosine similarity. This encoding ensures that point selections in similar regions of the scatterplots are close together, even if the sets of selected points do not match exactly. It also enables meaningful comparison of user selections across different datasets. For the summary visualizations, we simply show scatterplots of the selected points, with opacity encoding in how many of the analyzed states a given point is part of the selection.",
        "tags": ["numerical", "tabular", "temporal", "science", "t-SNE", "multiple-runs", "same-origins", "progressing", "oscillation", "sparse", "regular", "cluster", "U-turn", "alternation", "dense starting points", "sparse end points", "bundles", "similar shapes"],
        "imagePath": "user_intent.png",
        "datasetLinks": {
            "All Outlier + Cluster": "#",
            "Outlier All": "#",
            "Data files": "#",
            "paper link": "https://jku-vds-lab.at/publications/2020_preprint_provectories/"
        }
    },
    {
        "name": "Chemical data (CIME)",
        "domain": "Chemistry",
        "id": "chemical_data_cime",
        "type": "scatter",
        "primaryDescription": "The ChemInformatics Model Explorer (short CIME) extension of the Projection Space Explorer allows users to interactively explore a fixed subspace of chemical compounds.",
        "secondaryDescription": "Users can apply a 2D projection to the provided data, and additionally show the high-dimensional data in a LineUp table. Furthermore, users can select data points and show the 2D compound structures of all selected items, aligned to each other, in a side-view. If provided in the data, users can change the representation in the side-view to show atom-level attributions in the 2D compound structure. This could be used for comparing neighbors for example to check if machine learning model explanations - generated for those data points - make sense. Using the grouping tool allows for easier interaction with item neighborhoods.",
        "tags": ["SDF", "scatter", "medicine", "UMAP", "cluster"],
        "imagePath": "cime.png",
        "datasetLinks": {
            "test": "https://cime-demo.caleydoapp.org/",
            "Data files": "#"
        }
    }

]