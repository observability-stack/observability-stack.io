---
title: OpenTelemetry
---

# Traces Tools: OpenTelemetry Collector

The OpenTelemetry Collector is a key component within the Observability Stack for capturing trace data from Kubernetes clusters. It's specifically designed to collect traces from services configured to emit tracing information, such as `ingress-nginx`, and forwards this data to the local Jaeger Collector for processing and storage. Observability Stack uses the OpenTelemetry operator available on [OperatorHub.io](https://operatorhub.io/operator/opentelemetry-operator).

Configuration files, including the necessary `ClusterRole`, `opentelemetry-collector.yaml` manifests, and an optional `ServiceMonitor` setup for Prometheus metrics forwarding, are located in the `opentelemetry/base/collector` directory. 

The `opentelemetry-collector.yaml` manifest outlines the configuration for receivers, processors, and exporters, offering flexibility to tailor the setup according to specific use cases.

## Architecture

To be completed.

## Quickstart

To be completed.