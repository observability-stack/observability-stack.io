"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[567],{5226:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/","docId":"readme","unlisted":false},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Glossary","href":"/getting-started/glossary","docId":"getting-started/glossary","unlisted":false},{"type":"link","label":"Requirements","href":"/getting-started/requirements","docId":"getting-started/requirements","unlisted":false},{"type":"link","label":"Quickstart","href":"/getting-started/quickstart","docId":"getting-started/quickstart","unlisted":false},{"type":"link","label":"What\'s next?","href":"/getting-started/what-is-next","docId":"getting-started/what-is-next","unlisted":false}],"href":"/category/getting-started"},{"type":"category","label":"Available Toolkit","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Metrics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Thanos","href":"/available-toolkit/metrics/thanos","docId":"available-toolkit/metrics/thanos","unlisted":false},{"type":"link","label":"Prometheus Operator","href":"/available-toolkit/metrics/prometheus-operator","docId":"available-toolkit/metrics/prometheus-operator","unlisted":false}],"href":"/category/metrics"},{"type":"category","label":"Logs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Opensearch","href":"/available-toolkit/logs/opensearch","docId":"available-toolkit/logs/opensearch","unlisted":false},{"type":"link","label":"Fluentd","href":"/available-toolkit/logs/fluentd","docId":"available-toolkit/logs/fluentd","unlisted":false}],"href":"/category/logs"},{"type":"category","label":"Traces","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Jaeger","href":"/available-toolkit/traces/jaeger","docId":"available-toolkit/traces/jaeger","unlisted":false},{"type":"link","label":"OpenTelemetry","href":"/available-toolkit/traces/opentelemetry","docId":"available-toolkit/traces/opentelemetry","unlisted":false}],"href":"/category/traces"},{"type":"category","label":"GitOps","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Fleet (by Rancher)","href":"/available-toolkit/gitops/fleet","docId":"available-toolkit/gitops/fleet","unlisted":false}],"href":"/category/gitops"},{"type":"category","label":"Alerts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Grafana Alert Rules","href":"/available-toolkit/alerts/grafana-alerts","docId":"available-toolkit/alerts/grafana-alerts","unlisted":false}],"href":"/category/alerts"},{"type":"category","label":"Dashboards","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Grafana","href":"/available-toolkit/dashboards/grafana","docId":"available-toolkit/dashboards/grafana","unlisted":false}],"href":"/category/dashboards"}],"href":"/category/available-toolkit"},{"type":"category","label":"How-to Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Reference Architecture for Rancher Cluster Manager","href":"/how-to-guides/rancher-cluster-manager","docId":"how-to-guides/rancher-cluster-manager","unlisted":false}],"href":"/category/how-to-guides"},{"type":"link","label":"Contribution Guide","href":"/contributing","docId":"contributing","unlisted":false}]},"docs":{"available-toolkit/alerts/grafana-alerts":{"id":"available-toolkit/alerts/grafana-alerts","title":"Grafana Alert Rules","description":"Refer to Grafana official docs for APIs.","sidebar":"tutorialSidebar"},"available-toolkit/dashboards/grafana":{"id":"available-toolkit/dashboards/grafana","title":"Grafana","description":"The Observability Stack uses grafana-operator for deploying and managing the Grafana instance, which serves as the visualization layer for the observability data collected.","sidebar":"tutorialSidebar"},"available-toolkit/gitops/fleet":{"id":"available-toolkit/gitops/fleet","title":"Fleet (by Rancher)","description":"","sidebar":"tutorialSidebar"},"available-toolkit/logs/fluentd":{"id":"available-toolkit/logs/fluentd","title":"Fluentd","description":"The Observability Stack uses Fluentd for log shipping for both observee and observer clusters to the centralized Opensearch cluster. It relies on the rancher-logging-operator Helm Chart, which is derived from the kube-logging/logging-operator helm chart, for deployment.","sidebar":"tutorialSidebar"},"available-toolkit/logs/opensearch":{"id":"available-toolkit/logs/opensearch","title":"Opensearch","description":"To be completed.","sidebar":"tutorialSidebar"},"available-toolkit/metrics/prometheus-operator":{"id":"available-toolkit/metrics/prometheus-operator","title":"Prometheus Operator","description":"The Observability Stack uses Prometheus for storing local metrics data across both observee and observer clusters. It relies on the rancher-monitoring Helm Chart, which is derived from the kube-prometheus helm chart, for deployment.","sidebar":"tutorialSidebar"},"available-toolkit/metrics/thanos":{"id":"available-toolkit/metrics/thanos","title":"Thanos","description":"Thanos is used within the Observability Stack for the long-term storage and centralization of Prometheus metrics data. It relies on the Thanos Bitnami Helm Chart.","sidebar":"tutorialSidebar"},"available-toolkit/traces/jaeger":{"id":"available-toolkit/traces/jaeger","title":"Jaeger","description":"Within the Observability Stack, Jaeger plays an intermediary role in trace data collection. It leverages the Jaeger operator available on OperatorHub.io. The setup involves configuring the OpenTelemetry Collector (deployed in a daemonset mode) to forward OTLP trace data directly to the Jaeger collector. The Jaeger collector then utilizes the centralized Opensearch cluster as its backend storage for these traces, enabling seamless integration with the available Observability Stack toolkit. For detailed insights, refer to the logs section.","sidebar":"tutorialSidebar"},"available-toolkit/traces/opentelemetry":{"id":"available-toolkit/traces/opentelemetry","title":"OpenTelemetry","description":"The OpenTelemetry Collector is a key component within the Observability Stack for capturing trace data from Kubernetes clusters. It\'s specifically designed to collect traces from services configured to emit tracing information, such as ingress-nginx, and forwards this data to the local Jaeger Collector for processing and storage. Observability Stack uses the OpenTelemetry operator available on OperatorHub.io.","sidebar":"tutorialSidebar"},"contributing":{"id":"contributing","title":"Contribution Guide","description":"To be complated.","sidebar":"tutorialSidebar"},"getting-started/glossary":{"id":"getting-started/glossary","title":"Glossary","description":"In 20 minutes, we\'ll explore the the key features that will be introduced in the Observability Stack.","sidebar":"tutorialSidebar"},"getting-started/quickstart":{"id":"getting-started/quickstart","title":"Quickstart","description":"Enrolling Downstream Clusters to Fleet Manager","sidebar":"tutorialSidebar"},"getting-started/requirements":{"id":"getting-started/requirements","title":"Requirements","description":"The Observability Stack requires a minimum one Kubernetes cluster to initiate the Observer Cluster and Fleet components for self-observation. However, it\'s best to keep the Fleet components separate from the Observer Cluster. An easy method to achieve this separation is by utilizing the Rancher Cluster Manager which is integrated with Fleet. This setup allows for efficient management of downstream clusters and the deployment and administration of Observability stack components. In the following chapter, we will discuss the minimum requirements needed to establish a single-node Rancher Cluster Manager setup.","sidebar":"tutorialSidebar"},"getting-started/what-is-next":{"id":"getting-started/what-is-next","title":"What\'s next?","description":"To be complated.","sidebar":"tutorialSidebar"},"how-to-guides/rancher-cluster-manager":{"id":"how-to-guides/rancher-cluster-manager","title":"Reference Architecture for Rancher Cluster Manager","description":"As a part of our reference architecture, we utilize a 3-node k3s cluster to host the Rancher Cluster Manager, deployed via Helm 3. Each node in this setup is provisioned with the following resources:","sidebar":"tutorialSidebar"},"readme":{"id":"readme","title":"Introduction","description":"Observability Stack is an umbrella project, leveraging the open-source ecosystem to provide a platform independent, community-driven and flexible observability toolkit. It aims to serve as a central resource for administrators and developers alike by providing design concepts, examples, how-to guides and reference architectures to navigate the complexities of observability tools.","sidebar":"tutorialSidebar"}}}}')}}]);