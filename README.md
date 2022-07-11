# Presentation of Application Examples for ProjectionPathExplorer

## Description
In a recent publication, we introduced ProjectionPathExplorer [1], an interactive visualization of high-dimensional processes as trajectories in a low-dimensional embedding space. In the paper, we describe how this type of visualization can be applied to a wide variety of domains. So far, the online prototype contains examples from Rubik’s cube, chess, interaction data, neural networks and Go. We have recently collected a number of additional application scenarios from student projects in the Explainable AI course. We would like to make all the different examples available and easily accessible as part of the ProjectionPathExplorer paper website. This task includes consolidating the different datasets and making them individually accessible via dedicated links, as well as potentially adapting the prototype with domain-specific summary visualizations for those applications that do not yet include them. The final result should be a neatly arranged collection of links and short descriptions that showcase the generalizability of the tool and can be used for publicity and presentation purposes.

1. Hinterreiter, Andreas, Christian Steinparz, Moritz Schöfl, Holger Stitz, and Marc Streit. 2021. “ProjectionPathExplorer: Exploring Visual Patterns in Projected Decision-Making Paths.” ACM Transactions on Interactive Intelligent Systems. Special Issue on "Interactive Visual Analytics for Making Explainable and Accountable Decisions" (To be published): 1-30. https://arxiv.org/abs/2001.08372 .

## Link to certain dataset cards via URL
In order to link directly to a subset of dataset cards, one has to specify the dataset ids in the URL. The ids can be found in the `dataset.js` file.
the ids have to given in the URL after the `datasets/` and separated by the `&` character.
Here are some examples to clarify this.

## Example links

### Showing all dataset cards:
`.../#/datasets/all`

### Showing the cohort analysis data:
`.../#/datasets/cohort_analysis`

### Showing the rubik's cube and chess datasets:
`.../#/datasets/rubik&chess`

## Start Applicatiion

### `npm start`

## Build Application

### `npm run build`