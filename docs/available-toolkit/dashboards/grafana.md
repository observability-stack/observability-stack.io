---
title: Grafana
sidebar_position: 2
---

# Dashboards Tools: Grafana
The Observability Stack uses [grafana-operator](https://grafana.github.io/grafana-operator/) for deploying and managing the Grafana instance, which serves as the visualization layer for the observability data collected. 

The deployment of the operator itself is via using the [OperatorHub.io](https://operatorhub.io/operator/grafana-operator).

## Architecture
To be complated

## Quickstart
```yaml
kind: Grafana
apiVersion: grafana.integreatly.org/v1beta1
metadata:
  name: grafana
  labels:
    dashboards: grafana
spec:
  persistentVolumeClaim:
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 10Gi
      storageClassName: <storageClass-name> # set your own storage class
      volumeMode: Filesystem
  config:
    log:
      mode: console
      level: warn
    server:
      domain: monitoring.observability.[yourdomain].com # set your own domain
      protocol: http
      https_port: "443"
      root_url: "https://%(domain)s/"
    auth:
      disable_login_form: "false"
    security:
      admin_user: root
      admin_password: secret
```

## Advanced Configuration
 
### Datasources Configuration

While Grafana's datasources can be configured manually, such configurations are not persistent across restarts due to Grafana being stateless by default. Therefore, static configurations can be achieved by creating a `datasources.yaml` file in the `base` directory. Examples of YAML manifests for setting up observability datasources are provided below and are also available in the base directory for use.

```yaml
apiVersion: grafana.integreatly.org/v1beta1
kind: GrafanaDatasource
metadata:
  name: monitoring-thanos
spec:
  instanceSelector:
    matchLabels:
      dashboards: "grafana"
  datasource:
    name: Thanos
    type: prometheus
    access: proxy
    url: "http://thanos-monitoring-query-frontend.thanos-system.svc.[clusterDomain].local":9090"
    isDefault: true
    jsonData:
      "tlsSkipVerify": false
      "timeInterval": "30s" # solves dashboards not showing correctly. See https://github.com# solves dashboards not showing correctly. See https://github.com/rfmoz/grafana-dashboards/issues/72#issuecomment-880484961/rfmoz/grafana-dashboards/issues/72#issuecomment-880484961
    editable: true
---
apiVersion: grafana.integreatly.org/v1beta1
kind: GrafanaDatasource
metadata:
  name: logging-opensearch
spec:
  instanceSelector:
    matchLabels:
      dashboards: "grafana"
  datasource:
    name: Logs
    type: grafana-opensearch-datasource
    access: proxy
    url: "https://logging-cluster.opensearch-system.svc.[clusterDomain].local:9200"
    basicAuth: true
    basicAuthUser: ${username}
    isDefault: false
    jsonData:
      "tlsSkipVerify": true
      "pplEnabled": true
      # "database": "logs-*" # opensearch index
      "timeInterval": "10s"
      "timeField": "@timestamp"
      "version": "2.8.0"
      "flavor": "opensearch"
    secureJsonData:
      "password": ${password}
    editable: true
  valuesFrom:
    - targetPath: basicAuthUser
      valueFrom:
        secretKeyRef:
          name: grafana-opensearch-cred
          key: username
    - targetPath: "secureJsonData.password"
      valueFrom:
        secretKeyRef:
          name: grafana-opensearch-cred
          key: password
  plugins:
    - name: grafana-opensearch-datasource
      version: 2.14.4
---
apiVersion: grafana.integreatly.org/v1beta1
kind: GrafanaDatasource
metadata:
  name: tracing-jaeger
spec:
  instanceSelector:
    matchLabels:
      dashboards: "grafana"
  datasource:
    name: Traces
    type: jaeger
    access: proxy
    url: "http://jaeger-tracing-query.tracing-system.svc.[clusterDomain].local:16686"
    isDefault: false
    editable: true
```
For integrating the Opensearch datasource into Grafana, you need to create a `secretKeyRef` called `grafana-opensearch-cred` with key/value pair `username` and `password` to be used by the Opensearch datasource plugin to authenticate with Opensearch. This credential storage can be achieved through a standard Kubernetes secret or with an `ExternalSecret`.

### Grafana Dashboards

This folder contains all the code related to the development and deployment of Grafana Dashboards.

#### Folder structure

All the dashboards are saved as JSON in the relative folder, organized per Datasource, then Grafana Folder.

```
json
|
|--- Thanos (datasource)
     |
     |--- Home (Grafana Folder)
```

In each datasource folder there is a `dashboard-template.yaml` file, which contains the `GrafanaDashboard` custom resource, specifying the datasource(s) for all the dashboards in that folder.

Finally, the `generated` folder contains all the final manifests ready to be deployed in Kubernetes.

#### Usage

The easiest way to develop a dashboard is to create it in Grafana, then save it in the specific `json` folder and then launch the `generate.sh` script to create the relative manifest and insert it in Kustomize.

More in detail:
1. Create and develop your dashboard in Grafana
2. Select "Share" button
3. In `Export` tab, select `Export for sharing externally` (very important) and then `Save to file`
4. Check if the file contains content because it could happen that for compatibility reasons it is empty.
5. Delete or rename the already created dashboard to avoid conflicts with the locally saved one.
6. Launch `generate.sh`
7. Commit

### Grafana deployment with Keycloak OAuth2 SSO configuration

[Please follow official guide from the Grafana-operator documentation](https://grafana.github.io/grafana-operator/docs/examples/grafana_keycloak_sso/readme/).

### Ingress

[Please follow official guide from the Grafana-operator documentation](https://grafana.github.io/grafana-operator/docs/examples/ingress_https/readme/).

### Alerts

Please refer the deticated [alerts](./../alerts/grafana-alerts) chapter.