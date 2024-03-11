---
sidebar_position: 2
title: Requirements
---

# Minimum Requirements

The Observability Stack requires a minimum one Kubernetes cluster to initiate the Observer Cluster and Fleet components for self-observation. However, it's best to keep the Fleet components separate from the Observer Cluster. An easy method to achieve this separation is by utilizing the [Rancher Cluster Manager which is integrated with Fleet](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet). This setup allows for efficient management of downstream clusters and the deployment and administration of Observability stack components. In the following chapter, we will discuss the minimum requirements needed to establish a single-node Rancher Cluster Manager setup.

## Hosting Rancher Cluster Manager

The Observability Stack is designed to work well with the Rancher Cluster Manager, making good use of its Fleet integration for setting up components and updating configurations The hardware specifications required for the Rancher Cluster Manager depends on how many clusters you need to control.

For starting with a setup that involves just one node, the [baseline requirements](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-requirements#k3s-kubernetes) which can manage up to 150 clusters are as follows: 

### Hardware:
- **CPU**: 4 vCPUs 
- **Memory**: 16GB RAM 
- **Storage**: 40GB (SSDs are recommended)
- **Network**: Each node used should have a static IP configured, regardless of whether you are installing Rancher on a single node or on an HA cluster. In case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated. Rancher also requires a [number of ports](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-requirements/port-requirements) to be open to communicate with the downstream clusters.

### Software:
- **Operating System**: A modern Linux distribution (e.g., Ubuntu 22.04 LTS)
- **Kubernetes**: A lightweight Kubernetes installation such as k3s.
- **Helm**: Version 3.x for deploying Rancher

For a comprehensive understanding and guidance on deploying the Rancher Cluster Manager, please consult the [official Rancher documentation](https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli). 

To explore the intricacies of Fleet and its role in the Observability Stack, visit the [best practices guide on Rancher](#hosting-rancher-cluster-manager).

Futher details for integrating the Rancher Cluster Manager and Fleet are available in [Rancher Cluster Manager and Fleet Reference Architecture Guide](../catagory/reference-architecture/ranchercm).


## Observer Cluster

### Hardware:
- **CPU**: 4 cores (8 cores recommended)
- **Memory**: 8GB RAM (16GB recommended)
- **Storage**: 80GB SSD (additional storage for logs and monitoring data)
- **Network**: Reliable network connectivity

### Software:
- **Kubernetes**: Version 1.20 or newer
- **Container Registry**: Access to a container registry (public or private)
- **Storage**: Dynamic volume provisioning support or pre-provisioned PVs for persistent storage