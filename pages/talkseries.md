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

The speakers in this series will be presenting overarching (convergent and divergent) perspectives on the first part of this question:
<br>&emsp;**What do we want from our metrics?**

## Talia Konkle
Harvard University

## Dan Yamins {#talia-konkle}
Stanford University

### Accuracy (vs?) Seperability

&emsp;**:: Meta-metrics of alignment, or, the tradeoff that Isn't.**

The question of which mapping techniques -- and which measures of mapping accuracy -- to use to compare neural networks to the brain remains unsolved. I will talk about some *meta-metrics* of alignment, especially around two key questions: (1) mapping accuracy, which is important for the practical use of brain models in applications and (2) model separability (the ability to tell which model is "righter" than another), which is important for scientific understanding. I will show by construction that -- perhaps surprisingly -- there needn't be a tradeoff between these goals. And I will discuss how these observations lead to potentially improved alignment metrics. 


## Mick Bonner
Johns Hopkins University

### Learning from Universality

Where neuroscience once lacked high-performing computational models, we now have an overabundance in the form of deep neural networks. In fact, in many areas of cognitive neuroscience, there are so many high-performing models, that it has become difficult to discern which, if any, of these models is “right.”Standard metrics for model-brain similarity suggest that nearly all modern deep networks are good models of human brains. How can this be? Shouldn’t drastic differences in the construction of networks matter? Do we need better metrics to differentiate competing models? I will argue that attempting to adjudicate between existing deep networks should not be our primary focus. This is because at a fundamental level, these seemingly disparate networks are effectively the same—they have learned something universal. Our focus should be on understanding these universal representations and the principles that allow them to emerge under such highly diverse conditions. Doing so may reveal fundamental underlying mechanisms that abstract over many details of a network’s construction. Thus, the primary challenge that we face is not a need for better metrics but, rather, a need for better theories.

</div>

<div class='outline-flow-v1x'>

# Metrics Blitz {#metrics-blitz}

The speakers in this part of the series will be presenting some of their responses to the second part of our primary motivating question:
<br>&emsp;***How do we get what we want* from our metrics?**

These talks in this section will showcase work on the shortcomings of current metrics; propositions for new (or improved) metrics; "meta" metrics or "auxiliary metrics" designed to address the shortcomings of current (first or second-order alignment) metrics; and more.

## Jenelle Feather
FlatIron Institute

### Spectral Theory (SNAP)

The representations of neural networks are often compared to those of biological systems by performing regression between the neural network responses and those measured from biological systems. Many different state-of-the-art deep neural networks yield similar neural predictions, but it remains unclear how to differentiate among models that perform equally well at predicting neural responses. To gain insight into this, we use a recent theoretical framework that relates the generalization error from regression to the spectral properties of the model and the target. We apply this theory to the case of regression between model activations and neural responses and decompose the neural prediction error in terms of the model eigenspectra, alignment of model eigenvectors and neural responses, and the training set size. Using this decomposition, we introduce geometrical measures to interpret the neural prediction error. We test a large number of deep neural networks that predict visual cortical activity and show that there are multiple types of geometries that result in low neural prediction error as measured via regression. The work demonstrates that carefully decomposing representational metrics can provide interpretability of how models are capturing neural activity and points the way towards improved models of neural activity. 

### Model Metamerism

Deep neural network models of sensory systems are often proposed to learn representational transformations with invariances like those in the brain. To reveal these invariances, we generated ‘model metamers’, stimuli whose activations within a model stage are matched to those of a natural stimulus. Metamers for state-of-the-art supervised and unsupervised neural network models of vision and audition were often completely unrecognizable to humans when generated from late model stages, suggesting differences between model and human invariances. Targeted model changes improved human recognizability of model metamers but did not eliminate the overall human–model discrepancy. The human recognizability of a model’s metamers was well predicted by their recognizability by other models, suggesting that models contain idiosyncratic invariances in addition to those required by the task. Metamer recognizability dissociated from both traditional brain-based benchmarks and adversarial vulnerability, revealing a distinct failure mode of existing sensory models and providing a complementary benchmark for model assessment.

## Niko Kreigeskorte
Columbia University

### RSA Metrics 3.0

### Controversial Stimuli

## Imran Thobani
Stanford University

### Interanimal Transforms

&emsp;**... as a guide to model-brain comparison**

A fundamental question for computational neuroscience is how to assess neural response similarity between a mechanistic model and the brain. We propose to map models to brains using the same set of transforms that map animal subjects to each other for the same species and brain area. We show that identifying a good transform class requires taking aspects of the mechanism underlying the brain responses into account, specifically the non-linear activation function. We therefore introduce a transform class, Inverse-Linear-Nonlinear-Poisson (ILNP), that accounts for the effect of the biological activation function. On an electrophysiological dataset of 31 mouse subjects, ILNP increases same-area similarity scores across subjects compared to ridge regression and soft matching while maintaining inter-area separability. We also find that a transform class of this kind better differentiates between various models of the mouse visual stream with respect to brain predictivity, though for some model comparisons, soft matching does better. We hypothesize that integrating some neuron-level tuning properties into the mechanistic constraints of ILNP is a promising next step in characterizing a good inter-animal transform class in order to better assess model accuracy.

## Eghbal Hosseini
Massachusetts Institute of Technology

### Controversial Selection

Artificial neural networks (ANNs) have emerged as computational systems that align with behavior and underlying representations in biological neural networks (brains). Across domains, these feats are achieved by many different kinds of ANNs trained with ecologically valid objectives. Here we show that—akin to biological evolution where distinct organisms often converge on a similar solution to some target problem—models’ ability to predict brain responses is a consequence of convergence onto universal representational axes that are shared both across high-performing models and between models and brains. First, we introduce model agreement as a measure of representation universality across ANNs. Second, we use model agreement to modulate the degree of match between individual ANNs and the brain for the language and visual systems. Finally, we begin to identify core dimensions across models that distinguish between universal and model-specific representations.These results in tandem establish the universality of representation as a core component in the alignment between ANNs and biological systems, thus providing a novel approach for using ANNs to uncover representations and computations in biological brains.

## Nathan Cloos
Massachusetts Institute of Technology

### Many-Metric Comparison

What metrics should guide the development of more realistic models of the brain? One proposal is to quantify the similarity between models and brains using methods such as linear regression, Centered Kernel Alignment (CKA), and angular Procrustes distance. To better understand the limitations of these similarity measures we analyze neural activity recorded in five experiments on nonhuman primates, and optimize synthetic datasets to become more similar to these neural recordings. How similar can these synthetic datasets be to neural activity while failing to encode task relevant variables? We find that some measures like linear regression and CKA, differ from angular Procrustes, and yield high similarity scores even when task relevant variables cannot be linearly decoded from the synthetic datasets. Synthetic datasets optimized to maximize similarity scores initially learn the first principal component of the target dataset, but angular Procrustes captures higher variance dimensions much earlier than methods like linear regression and CKA. We show in both theory and simulations how these scores change when different principal components are perturbed. And finally, we jointly optimize multiple similarity scores to find their allowed ranges, and show that a high angular Procrustes similarity, for example, implies a high CKA score, but not the converse.

</div>