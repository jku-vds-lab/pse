import PublicationsCard from '../components/PublicationsCard';

function PublicationsPage() {
  return (
    <div className="container d-flex flex-column mt-3">
      <div className='container text-center mb-4'>
        <h1 className='display-6'>Publications Overview</h1>
      </div>

      <PublicationsCard
        title={"Projection Path Explorer"}
        subTitle={"Exploring Visual Patterns in Projected Decision-Making Paths"}
        description={"In problem-solving, a path towards solutions can be viewed as a sequence of decisions. The decisions, made by humans or computers, describe a trajectory through a high-dimensional representation space of the problem. By means of dimensionality reduction, these trajectories can be visualized in lower-dimensional space. Such embedded trajectories have previously been applied to a wide variety of data, but analysis has focused almost exclusively on the self-similarity of single trajectories. In contrast, we describe patterns emerging from drawing many trajectories—for different initial conditions, end states, and solution strategies—in the same embedding space. We argue that general statements about the problem-solving tasks and solving strategies can be made by interpreting these patterns. We explore and characterize such patterns in trajectories resulting from human and machine-made decisions in a variety of application domains: logic puzzles (Rubik's cube), strategy games (chess), and optimization problems (neural network training). We also discuss the importance of suitably chosen representation spaces and similarity metrics for the embedding."}
        link={"https://jku-vds-lab.at/publications/2020_tiis_pathexplorer/"}
        imagePath={"pse.png"}
      />

      <PublicationsCard
        title={"Time Curves"}
        subTitle={"Folding Time to Visualize Patterns of Temporal Evolution in Data"}
        description={"We introduce time curves as a general approach for visualizing patterns of evolution in temporal data. Examples of such patterns include slow and regular progressions, large sudden changes, and reversals to previous states. These patterns can be of interest in a range of domains, such as collaborative document editing, dynamic network analysis, and video analysis. Time curves employ the metaphor of folding a timeline visualization into itself so as to bring similar time points close to each other. This metaphor can be applied to any dataset where a similarity metric between temporal snapshots can be defined, thus it is largely datatype-agnostic. We illustrate how time curves can visually reveal informative patterns in a range of different datasets."}
        link={"https://aviz.fr/~bbach/timecurves/"}
        imagePath={"timecurves.png"}
      />

      <PublicationsCard
        title={"Provectories"}
        subTitle={"Embedding-based Analysis of Interaction Provenance Data"}
        description={"Understanding user behavior patterns and visual analysis strategies is a long-standing challenge. Existing approaches rely largely on time-consuming manualprocesses such as interviews and the analysis of observational data. While it is technically possible to capture a history of user interactions and application states, it remains difficult to extract and describe analysis strategies based on interaction provenance. In this paper, we propose a novel visual approach to meta-analysis of interaction provenance. We capture single and multiple user sessions as graphs of high-dimensional application states. Our meta-analysis is based on two different types of two-dimensional embeddings of these high-dimensional states: layouts based on (i) topology and (ii) attribute similarity. We applied these visualization approaches to synthetic and real user provenance data. From our visualizations, we were able to extract patterns for data types and analytical reasoning strategies."}
        link={"https://jku-vds-lab.at/publications/2020_preprint_provectories/"}
        imagePath={"provectories.png"}
      />

      <PublicationsCard
        title={"Visual Exploration of Relationships and Structure in Low-Dimensional Embeddings"}
        description={"In this work, we propose an interactive visual approach for the exploration and formation of structural relationships in embeddings of high-dimensional data. These structural relationships, such as item sequences, associations of items with groups, and hierarchies between groups of items, are defining properties of many real-world datasets. Nevertheless, most existing methods for the visual exploration of embeddings treat these structures as second-class citizens or do not take them into account at all. In our proposed analysis workflow, users explore enriched scatterplots of the embedding, in which relationships between items and/or groups are visually highlighted. The original high-dimensional data for single items, groups of items, or differences between connected items and groups is accessible through additional summary visualizations. We carefully tailored these summary and difference visualizations to the various data types and semantic contexts. During their exploratory analysis, users can externalize their insights by setting up additional groups and relationships between items and/or groups. We demonstrate the utility and potential impact of our approach by means of two use cases and multiple examples from various domains."}
        link={"https://jku-vds-lab.at/publications/2022_embedding_structure/"}
        imagePath={"multilevel.png"}
      />

      <PublicationsCard
        title={"ChemInformatics Model Explorer (CIME): Exploratory Analysis of Chemical Model Explanations"}
        description={"The introduction of machine learning to small molecule research – an inherently multidisciplinary field in which chemists and data scientists combine their expertise and collaborate – has been vital to making screening processes more efficient. In recent years, numerous models that predict pharmacokinetic properties or bioactivity have been published, and these are used on a daily basis by chemists to make decisions and prioritize ideas. The emerging field of explainable artificial intelligence is opening up new possibilities for understanding the reasoning that underlies a model. In small molecule research, this means relating contributions of substructures of compounds to their predicted properties, which in turn also allows the areas of the compounds that have the greatest influence on the outcome to be identified. However, there is no interactive visualization tool that facilitates such interdisciplinary collaborations towards interpretability of machine learning models for small molecules. To fill this gap, we present CIME (ChemInformatics Model Explorer), an interactive web-based system that allows users to inspect chemical data sets, visualize model explanations, compare interpretability techniques, and explore subgroups of compounds. The tool is model-agnostic and can be run on a server or a workstation."}
        link={"https://jku-vds-lab.at/publications/2022_cheminformatics_cime/"}
        imagePath={"cime.png"}
      />
    </div>
  );
}

export default PublicationsPage;