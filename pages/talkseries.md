---
layout: default
title: Talk Series
sidebar: true
permalink: /talkseries.html
---

<div class='outline-flow-v1x'>

# Speakers + Abstracts {#outline}

On this page, you'll find the abstracts for the talks that will be presented at the CCN workshop.
<br>(Don't see an abstract? Check back soon -- we're updating as they finalize!)

All our speakers were prompted with the main, motivating question of the BOTBM3 collaboration:
<br>&emsp;**What do we want from our model-to-brain mapping metrics and how do we get it?**


# Positions Talks {#positions}

The speakers in this part of the series will be presenting overarching (convergent and divergent) perspectives on the first part of this question:
<br>&emsp;**What do we want from our metrics?**

## Talia Konkle
Harvard University

## Dan Yamins
Stanford University

### Accuracy (vs?) Seperability

&emsp;**:: Meta-metrics of alignment, or, the tradeoff that Isn't.**

The question of which mapping techniques -- and which measures of mapping accuracy -- to use to compare neural networks to the brain remains unsolved. I will talk about some *meta-metrics* of alignment, especially around two key questions: (1) mapping accuracy, which is important for the practical use of brain models in applications and (2) model separability (the ability to tell which model is "righter" than another), which is important for scientific understanding. I will show by construction that -- perhaps surprisingly -- there needn't be a tradeoff between these goals. And I will discuss how these observations lead to potentially improved alignment metrics. 


## Mick Bonner
Johns Hopkins University

### Learning from Universality

&emsp;**:: Toward universal principles of neural representation**

Where neuroscience once lacked high-performing computational models, we now have an overabundance in the form of deep neural networks. In fact, in many areas of cognitive neuroscience, there are so many high-performing models, that it has become difficult to discern which, if any, of these models is “right.”Standard metrics for model-brain similarity suggest that nearly all modern deep networks are good models of human brains. How can this be? Shouldn’t drastic differences in the construction of networks matter? Do we need better metrics to differentiate competing models? I will argue that attempting to adjudicate between existing deep networks should not be our primary focus. This is because at a fundamental level, these seemingly disparate networks are effectively the same—they have learned something universal. Our focus should be on understanding these universal representations and the principles that allow them to emerge under such highly diverse conditions. Doing so may reveal fundamental underlying mechanisms that abstract over many details of a network’s construction. Thus, the primary challenge that we face is not a need for better metrics but, rather, a need for better theories.

</div>

<div class='outline-flow-v1x'>

# Metrics Blitz {#metrics-blitz}

The speakers in this part of the series will be presenting some of their responses to the second part of our primary motivating question:
<br>&emsp;***How* do we get what we want from our metrics?**

These talks in this section will showcase work on the shortcomings of current metrics; propositions for new (or improved) metrics; "meta" metrics or "auxiliary metrics" designed to address the shortcomings of current (first or second-order alignment) metrics; and more.

## Niko Kreigeskorte
Columbia University

### RSA + Controversiality

&emsp;**:: Metrics and experimental designs should be optimized for model comparison**

Theoretical progress in cognitive computational neuroscience requires model comparisons that are meaningful and powerful. A neural population code of a set of stimuli (or other mental representations that can be reliably elicited in an experiment) can be characterized by its representational geometry, as captured equivalently by a representational dissimilarity matrix (RDM) or a representational similarity (kernel) matrix. The similarity between two representations (e.g. a model layer and brain region) can be measured by choosing an RDM estimator (e.g. Euclidean, Mahalanobis, or crossnobis dissimilarity estimator) and an RDM comparator (e.g. rank correlation, Pearson correlation, cosine similarity, or whitened alternatives to the latter two). The whitened RDM cosine similarity can be understood as a generalization of the linear centered kernel alignment to unbiased representational distance estimators. The listed RDM comparators are representational similarity measures and are not metrics. Metric RDM comparators include the angle or Euclidean distance between normalized RDMs. The RSA3 Python Toolbox implements these options and supports model-comparative inference that can generalize simultaneously to the populations of subjects and stimuli. Importantly, we have a clear understanding of when and why to choose which combination of RDM comparator and RDM estimator (based on properties of the experiment and assumptions the researcher is willing to make). However, distinct neural network models implementing different computational mechanisms can predict similar representational geometries for randomly selected natural stimuli. To enable powerful model comparisons, we can optimize our experimental stimulus sets to elicit contrasting predictions from different models. We refer to such stimulus sets as controversial among the models. Controversial stimuli can be unconstrained (artificial, synthetic, e.g. optimizing image pixels) or constrained to various degrees (e.g. optimizing latents of a stimulus-generative model that defines a prior over stimulus space or selected from a set of natural stimuli), thus enabling us to transcend the dichotomy of natural versus artificial and subject our models to inferential comparisons that are both meaningful and powerful. 

## Jenelle Feather
FlatIron Institute

### Spectral Theory (SNAP)

The representations of neural networks are often compared to those of biological systems by performing regression between the neural network responses and those measured from biological systems. Many different state-of-the-art deep neural networks yield similar neural predictions, but it remains unclear how to differentiate among models that perform equally well at predicting neural responses. To gain insight into this, we use a recent theoretical framework that relates the generalization error from regression to the spectral properties of the model and the target. We apply this theory to the case of regression between model activations and neural responses and decompose the neural prediction error in terms of the model eigenspectra, alignment of model eigenvectors and neural responses, and the training set size. Using this decomposition, we introduce geometrical measures to interpret the neural prediction error. We test a large number of deep neural networks that predict visual cortical activity and show that there are multiple types of geometries that result in low neural prediction error as measured via regression. The work demonstrates that carefully decomposing representational metrics can provide interpretability of how models are capturing neural activity and points the way towards improved models of neural activity. 

### Model Metamerism

Deep neural network models of sensory systems are often proposed to learn representational transformations with invariances like those in the brain. To reveal these invariances, we generated ‘model metamers’, stimuli whose activations within a model stage are matched to those of a natural stimulus. Metamers for state-of-the-art supervised and unsupervised neural network models of vision and audition were often completely unrecognizable to humans when generated from late model stages, suggesting differences between model and human invariances. Targeted model changes improved human recognizability of model metamers but did not eliminate the overall human–model discrepancy. The human recognizability of a model’s metamers was well predicted by their recognizability by other models, suggesting that models contain idiosyncratic invariances in addition to those required by the task. Metamer recognizability dissociated from both traditional brain-based benchmarks and adversarial vulnerability, revealing a distinct failure mode of existing sensory models and providing a complementary benchmark for model assessment.

## Nina Miolane
UC Santa Barbara

### Geometric Statistics

&emsp;**:: Exploring the Riemannian Geometry of Representation in Natural and Artificial Systems**

Riemannian geometry is a mathematical theory used by Einstein to propose General Relativity, in which space-time is described as a four-dimensional space curved by the presence of mass and energy. Yet today, Riemannian geometry is being rediscovered with a completely new purpose. In computational neuroscience and artificial intelligence, researchers have started using it to understand the universe inside intelligent systems, i.e. inside humans and machines alike. How can the same theory both describe the outer universe and our inner world? In this talk, I will explore this question by narrating how both theoretical physicists and computational neuroscientists have converged to using Riemannian geometry to address how the world and the brain are linked through representation. I will present recent work from our lab in which we propose several methods to discover and interpret the geometry of neural manifolds, making steps towards the goal of developing a geometric theory of intelligent representation. I will conclude by introducing Geomstats, a fully-featured Python package for working with computations on the kinds of nonlinear manifolds I discuss throughout the talk.

## Imran Thobani
Stanford University

### Interanimal Transforms

&emsp;**... as a guide to model-brain comparison**

A fundamental question for computational neuroscience is how to assess neural response similarity between a mechanistic model and the brain. We propose to map models to brains using the same set of transforms that map animal subjects to each other for the same species and brain area. We show that identifying a good transform class requires taking aspects of the mechanism underlying the brain responses into account, specifically the non-linear activation function. We therefore introduce a transform class, Inverse-Linear-Nonlinear-Poisson (ILNP), that accounts for the effect of the biological activation function. On an electrophysiological dataset of 31 mouse subjects, ILNP increases same-area similarity scores across subjects compared to ridge regression and soft matching while maintaining inter-area separability. We also find that a transform class of this kind better differentiates between various models of the mouse visual stream with respect to brain predictivity, though for some model comparisons, soft matching does better. We hypothesize that integrating some neuron-level tuning properties into the mechanistic constraints of ILNP is a promising next step in characterizing a good inter-animal transform class in order to better assess model accuracy.

## Brian Robinson
Johns Hopkins University

### Dimension-Wise CKA

&emsp;**... Efficient dimension-wise similarity analysis reveals distinct brain-similarity subspaces in modern transformer networks**

A prevailing approach in comparing representations in the brain to artificial neural network models is to subdivide model representations by layer. However, modern deep learning networks utilize a residual structure and can forgo explicit hierarchical inductive biases between layers (as in transformers), which complicates the choice of model layer as a primary subdivision for analysis. Here, we introduce an efficient metric based on linear centered kernel alignment (CKA), where brain-to-model similarity is measured for each model dimension within a model layer by measuring the relative effect size of removing that dimension. By applying this metric to model representations within the same layer, we find distinct representational subspaces of model dimensions that differ in their alignment with visual inputs, semantic content, early visual cortex, and higher-level occipital-temporal cortex. Furthermore, we apply dimension-wise CKA to combined representations across all model layers and find that the representational scores for early visual and occipital-temporal cortices are driven by a relatively small number of model dimensions in each layer and that the relevant dimensions span all network layers. In the future, dimension-wise CKA can be used as a tool to enable more detailed brain-to-model comparisons which consider within-layer representational heterogeneity.

## Eghbal Hosseini
Massachusetts Institute of Technology

### Controversial Selection

Artificial neural networks (ANNs) have emerged as computational systems that align with behavior and underlying representations in biological neural networks (brains). Across domains, these feats are achieved by many different kinds of ANNs trained with ecologically valid objectives. Here we show that—akin to biological evolution where distinct organisms often converge on a similar solution to some target problem—models’ ability to predict brain responses is a consequence of convergence onto universal representational axes that are shared both across high-performing models and between models and brains. First, we introduce model agreement as a measure of representation universality across ANNs. Second, we use model agreement to modulate the degree of match between individual ANNs and the brain for the language and visual systems. Finally, we begin to identify core dimensions across models that distinguish between universal and model-specific representations.These results in tandem establish the universality of representation as a core component in the alignment between ANNs and biological systems, thus providing a novel approach for using ANNs to uncover representations and computations in biological brains.

## Vighnesh Subramaniam
Massachusetts Institute of Technology

### Hyperbolic RSA

Current model-to-brain mappings use distance metrics that typically compare representations under the assumption that these representations lie in Euclidean space. While most deep neural networks encode representations in Euclidean spaces, such spaces are not well-equipped to encode hierarchical, structured features often found in visual or linguistic reasoning (e.g. object hierarchies or analogies). In this work, we incorporate new methods from NLP and computer vision that encode representations in hyperbolic space. These hyperbolic geometries provably encode tree structures and meaningfully represent the rich hierarchies captured by vision and linguistic reasoning alike. By working in Euclidean space, we are unable to uncover meaningful hierarchical structure in the brain using the current distance metrics. Therefore, in order to uncover these hierarchical structures, we propose a hyperbolic representational similarity analysis (RSA). This method uses hyperbolic distance formulations as a first-order distance metric over hyperbolic representations. As a first-order test of this method, we compare classic Euclidean RDMs and hyperbolic RDMs on language datasets constructed WordNet  (which do provide higher-order structure), showing that the two RDMs distinguish different features at low dimensions. We use these findings to motivate comparisons between to the brain to uncover hierarchical structure.

## Chris Z Wang
Massachusetts Institute of Technology

### Rethinking Reconstruction

Stimulus reconstruction from brain activity has become a popular method in the probing of biological representation. When evaluating stimulus reconstruction results, it is tempting to assume that higher fidelity text and image generation is due to an improved understanding of the brain or more powerful signal extraction from neural recordings. However, in practice, new reconstruction methods could improve performance for at least three other reasons: learning more about the distribution of stimuli, becoming better at reconstructing text or images in general, or exploiting weaknesses in current image and/or text evaluation metrics. Here we disentangle how much of the reconstruction is due to these other factors vs. productively using the neural recordings. We introduce BrainBits, a method that uses a bottleneck to quantify the amount of signal extracted from neural recordings that is actually necessary to reproduce a method's reconstruction fidelity. We find that it takes surprisingly little information from the brain to produce reconstructions with high fidelity. In these cases, it is clear that the priors of the methods' generative models are so powerful that the outputs they produce extrapolate far beyond the neural signal they decode. Given that reconstructing stimuli can be improved independently by either improving signal extraction from the brain or by building more powerful generative models, improving the latter may fool us into thinking we are improving the former. We propose that methods should report a method-specific random baseline, a reconstruction ceiling, and a curve of performance as a function of bottleneck size, with the ultimate goal of using more of the neural recordings.

## Nathan Cloos
Massachusetts Institute of Technology

### Many-Metric Comparison

What metrics should guide the development of more realistic models of the brain? One proposal is to quantify the similarity between models and brains using methods such as linear regression, Centered Kernel Alignment (CKA), and angular Procrustes distance. To better understand the limitations of these similarity measures we analyze neural activity recorded in five experiments on nonhuman primates, and optimize synthetic datasets to become more similar to these neural recordings. How similar can these synthetic datasets be to neural activity while failing to encode task relevant variables? We find that some measures like linear regression and CKA, differ from angular Procrustes, and yield high similarity scores even when task relevant variables cannot be linearly decoded from the synthetic datasets. Synthetic datasets optimized to maximize similarity scores initially learn the first principal component of the target dataset, but angular Procrustes captures higher variance dimensions much earlier than methods like linear regression and CKA. We show in both theory and simulations how these scores change when different principal components are perturbed. And finally, we jointly optimize multiple similarity scores to find their allowed ranges, and show that a high angular Procrustes similarity, for example, implies a high CKA score, but not the converse.

</div>