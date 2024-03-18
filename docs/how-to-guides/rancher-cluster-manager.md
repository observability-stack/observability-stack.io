# Reference Architecture for Rancher Cluster Manager

As a part of our reference architecture, we utilize a 3-node k3s cluster to host the Rancher Cluster Manager, deployed via Helm 3. Each node in this setup is provisioned with the following resources:

- **CPU**: 4 Cores
- **Memory**: 8 GB RAM
- **Storage**: 100 GB Disk

This architecture is used to deploy and manage 10 Kubernetes clusters, facilitating the installation of the Observability Stack and other supporting projects through the integrated Fleet in Rancher.

For detailed instructions on installing Rancher Cluster Manager using Helm 3, please refer to the [Helm installation documentation on the Rancher website](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster).

**To be completed.**