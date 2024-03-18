---
sidebar_position: 3
title: Quickstart
---

# Quickstart

## Enrolling Downstream Clusters to Fleet Manager
1. Enroll downstream clusters to your Fleet Manager (this will be automatically done by Rancher Cluster Manager if you are using Rancher to deploy clusters and integrated Fleet) and set labels `observee` and `observer` to form cluster groups.

```bash
# for observer cluster
CLUSTER_LABELS="--set-string labels.observability-enabled=true --set-string labels.observability-role=observer"
# for observee cluster
CLUSTER_LABELS="--set-string labels.observability-enabled=true --set-string labels.observability-role=observee"
```
2. Add Fleet Helm Repository
```bash
helm repo add fleet https://rancher.github.io/fleet-helm-charts/
```

3. Deploy Fleet agent to downstream clusters
```bash
helm -n cattle-fleet-system install --create-namespace --wait \
    $CLUSTER_LABELS \
    --values values.yaml \
    --set apiServerCA="$API_SERVER_CA_DATA" \
    --set apiServerURL="$API_SERVER_URL" \
    fleet-agent fleet/fleet-agent
```
[The details for the cluster registration process can be seen in official Fleet documentation](https://fleet.rancher.io/cluster-registration).

##  Forming ClusterGroups
1. Create ClusterGroup `observer-clusters` 



```yaml
apiVersion: fleet.cattle.io/v1alpha1
kind: ClusterGroup
metadata:
  name: observer-clusters
  annotations: {}
spec:
  selector:
    matchLabels:
      observability-enabled: 'true'
      observability-role: observer
```
2. Create ClusterGroup `observee-clusters`.
```yaml
apiVersion: fleet.cattle.io/v1alpha1
kind: ClusterGroup
metadata:
  name: observee-clusters
  annotations: {}
spec:
  selector:
    matchLabels:
      observability-enabled: 'true'
      observability-role: observee
```
[The details for the ClusterGroups can be seen in official Fleet documentation](https://fleet.rancher.io/cluster-group).

## Clone the Base Repository
1. Clone the [observability-stack repository](https://github.com/observability-stack/observability-stack). Start with the observability-stack repository as your foundation for integrating with Fleet.
2. Customize the configuration options in the [observability-stack repository](https://github.com/observability-stack/observability-stack)  based on your needs for `metrics`, `logs` and `traces`. You can find dedicated `README.md` files under each observability topic as well as in the [Available Toolkit](./../category/available-toolkit) section.

## Observability Stack Observer Cluster Deployment
1. Create [observer-metrics](https://github.com/observability-stack/observability-stack/blob/main/metrics/observer.yaml) `GitObject` to deploy observer metrics components.
2. Create [observer-logs](https://github.com/observability-stack/observability-stack/blob/main/logs/observer.yaml) `GitObject` to deploy observer logs components.
3. Create [observer-traces](https://github.com/observability-stack/observability-stack/blob/main/traces/observer.yaml) `GitObject` to deploy observer traces components.

## Observability Stack Observee Cluster Deployment
1. Create [observee-metrics](https://github.com/observability-stack/observability-stack/blob/main/metrics/observee.yaml) `GitObject` to deploy observeemetrics components.
2. Create [observee-logs](https://github.com/observability-stack/observability-stack/blob/main/logs/observee.yaml) `GitObject` to deploy observee logs components.
3. Create [observee-traces](https://github.com/observability-stack/observability-stack/blob/main/traces/observee.yaml) `GitObject` to deploy observee traces components.