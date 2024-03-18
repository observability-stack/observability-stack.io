---
sidebar_position: 2
title: Requirements
---

# Minimum Requirements

The Observability Stack requires a minimum one Kubernetes cluster to initiate the Observer Cluster and Fleet components for self-observation. However, it's best to keep the Fleet components separate from the Observer Cluster. An easy method to achieve this separation is by utilizing the [Rancher Cluster Manager which is integrated with Fleet](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet). This setup allows for efficient management of downstream clusters and the deployment and administration of Observability stack components. In the following chapter, we will discuss the minimum requirements needed to establish a single-node Rancher Cluster Manager setup.

## Hosting Rancher Cluster Manager

The Observability Stack is designed to work well with the Rancher Cluster Manager, making good use of its Fleet integration for setting up components and updating configurations The hardware specifications required for the Rancher Cluster Manager depends on how many clusters you need to control.

For starting with a setup that involves just one node, the [baseline requirements](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-requirements#k3s-kubernetes) which can manage up to 150 clusters are as follows: 

### Hardware
- **CPU**: 4 vCPUs 
- **Memory**: 16GB RAM 
- **Storage**: 40GB (SSDs are recommended)
- **Network**: Each node used should have a static IP configured, regardless of whether you are installing Rancher on a single node or on an HA cluster. In case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated. Rancher also requires a [number of ports](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-requirements/port-requirements) to be open to communicate with the downstream clusters.

### Software
- **Operating System**: A modern Linux distribution (e.g., Ubuntu 22.04 LTS)
- **Kubernetes**: A lightweight Kubernetes installation such as k3s.
- **Helm**: Version 3.x for deploying Rancher

For a comprehensive understanding and guidance on deploying the Rancher Cluster Manager, please consult the [official Rancher documentation](https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli). 

To explore the intricacies of Fleet and its role in the Observability Stack, visit the [best practices guide on Rancher](#hosting-rancher-cluster-manager).

Futher details for integrating the Rancher Cluster Manager and Fleet are available in [Rancher Cluster Manager and Fleet Reference Architecture Guide](../catagory/reference-architecture/ranchercm).

## Observer Cluster

Observer cluster, by desing, more resource-intensive than the observee clusters. This is because it runs extra applications on top of the standard application stack found in observee clusters. These additional applications include a central Opensearch cluster for logging and tracing and Thanos for metrics data. Observer cluster will also be the focal entry for longer term observability data archiving and queriying. Therefore, the resources needed for the Observer cluster will vary depending on several factors, like the number of clusters it will monitor and the data retention period.

For a basic setup, a 3-node Kubernetes cluster equipped with the following specifications should suffice:

### Hardware
- **CPU**: 8 cores (16 cores recommended)
- **Memory**: 16GB RAM (32GB recommended)
- **Storage**:
  - 100GB block storage for the root filesystem
  - Additional CSI-based network-attached storage for observability data
- **Network**:
  - HTTPS connectivity between observee and observer clusters

### Software
- **Operating System**: A modern Linux distribution (e.g., Ubuntu 22.04 LTS)
- **Kubernetes**: 
  - Version 1.20 or newer
  - Operator Lifecylce Manager (OLM) version 0.20.0
- **Storage**:
  - Support for dynamic volume provisioning with StorageClasses
  - Manual Persistent Volume (PV) creation capability if necessary
- **Network**:
  - An Ingress controller to expose services

> **Note**: Using the root filesystem for observability data via hostPath or CSI solutions like Longhorn has not been tested extensively and may lead to node instability. It's recommended to use dedicated storage solutions to prevent potential node crashes.

## Operator Lifecycle Manager (OLM)

To be complated.