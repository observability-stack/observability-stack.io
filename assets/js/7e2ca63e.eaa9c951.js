"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[683],{6352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(4848),s=r(8453);const o={title:"Prometheus Operator",sidebar_position:2},a="Metrics Tools: Prometheus Operator",i={id:"available-toolkit/metrics/prometheus-operator",title:"Prometheus Operator",description:"The Observability Stack uses Prometheus for storing local metrics data across both observee and observer clusters. It relies on the rancher-monitoring Helm Chart, which is derived from the kube-prometheus helm chart, for deployment.",source:"@site/docs/available-toolkit/metrics/prometheus-operator.md",sourceDirName:"available-toolkit/metrics",slug:"/available-toolkit/metrics/prometheus-operator",permalink:"/available-toolkit/metrics/prometheus-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/observability-stack/observability-stack.io/edit/main/docs/docs/available-toolkit/metrics/prometheus-operator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Prometheus Operator",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Thanos",permalink:"/available-toolkit/metrics/thanos"},next:{title:"Logs",permalink:"/category/logs"}},c={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Special Configuration for Envoy Sidecar Approach",id:"special-configuration-for-envoy-sidecar-approach",level:3},{value:"Thanos Sidecar Monitor",id:"thanos-sidecar-monitor",level:3},{value:"External Secrets",id:"external-secrets",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"metrics-tools-prometheus-operator",children:"Metrics Tools: Prometheus Operator"}),"\n",(0,n.jsxs)(t.p,{children:["The Observability Stack uses Prometheus for storing local metrics data across both ",(0,n.jsx)(t.code,{children:"observee"})," and ",(0,n.jsx)(t.code,{children:"observer"})," clusters. It relies on the ",(0,n.jsx)(t.a,{href:"https://github.com/rancher/charts/tree/dev-v2.9/charts/rancher-monitoring/102.0.0%2Bup40.1.2",children:"rancher-monitoring"})," Helm Chart, which is derived from the kube-prometheus helm chart, for deployment."]}),"\n",(0,n.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Prometheus Single-cluster Architecture",src:r(2115).A+"",width:"711",height:"491"})})}),"\n",(0,n.jsx)(t.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,n.jsxs)(t.p,{children:["In order to integrate Prometheus instances on ",(0,n.jsx)(t.code,{children:"observee"})," clusters with the central Thanos setup on the ",(0,n.jsx)(t.code,{children:"observer"})," cluster, the Helm chart must be configured with the ",(0,n.jsx)(t.code,{children:"prometheus.prometheusSpec.thanos"})," configuration:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"prometheus:\n  prometheusSpec:\n    thanos:\n      image: quay.io/thanos/thanos:v0.34.0\n      objectStorageConfig:\n        key: thanos.yaml\n        name: thanos-objectstorage\n"})}),"\n",(0,n.jsx)(t.p,{children:"This configuration requires the thanos-objectstorage S3 connection details, structured as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"type: S3\nconfig:\n  bucket: <thanos-object-storage-bucket-name>\n  endpoint: <s3-endpoint>\n  region: <region>\n  aws_sdk_auth: false\n  access_key: <access_key>\n  insecure: false\n  signature_version2: false  # Equivalent to v4auth: true\n  secret_key: <secret_key>\n  bucket_lookup_type: path  # Equivalent to pathstyle: true\n"})}),"\n",(0,n.jsx)(t.p,{children:"To create this secret via kubectl, use the following command, ensuring your YAML manifest is saved to a file (e.g., thanos-s3-creds.yaml):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kubectl create secret generic thanos-objectstorage --from-file=thanos-s3-creds.yaml\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For Rancher Cluster Manager deployments, two additional parameters needs to be set in the ",(0,n.jsx)(t.code,{children:"values.yaml"})," in order to integrate Rancher Cluster Management UI with the integrated monitoring (for more information, you can check this ",(0,n.jsx)(t.a,{href:"https://github.com/rancher/rancher/issues/40687",children:"Github issue"}),")."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"global:\n  cattle:\n    clusterId: global.fleet.clusterLabels.management.cattle.io/cluster-name\n    clusterName: global.fleet.clusterLabels.management.cattle.io/cluster-display-name\n"})}),"\n",(0,n.jsxs)(t.p,{children:["An example ",(0,n.jsx)(t.code,{children:"values.yaml"})," is provided within the repository."]}),"\n",(0,n.jsx)(t.h2,{id:"advanced-configuration",children:"Advanced Configuration"}),"\n",(0,n.jsx)(t.h3,{id:"special-configuration-for-envoy-sidecar-approach",children:"Special Configuration for Envoy Sidecar Approach"}),"\n",(0,n.jsxs)(t.p,{children:["When utilizing ",(0,n.jsx)(t.a,{href:"#envoy-sidecar-for-thanos",children:"Envoy Sidecar for Thanos"})," to enable connectivity between Prometheus and Thanos instances across ",(0,n.jsx)(t.code,{children:"observer"})," and ",(0,n.jsx)(t.code,{children:"observee"}),' clusters, it may be necessary to make the sidecar component accessible through an ingress object. This requires specific annotations to support the backend-protocol: "GRPC".']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: observability-thanos-gateway\n  annotations:\n    nginx.ingress.kubernetes.io/backend-protocol: "GRPC"\n    nginx.ingress.kubernetes.io/force-ssl-redirect: "true"\n    nginx.ingress.kubernetes.io/grpc-backend: "true"\n    nginx.ingress.kubernetes.io/protocol: "h2c"\n    nginx.ingress.kubernetes.io/proxy-read-timeout: "160"\nspec:\n  ingressClassName: nginx\n  rules:\n    - host: [clusterName].observability.[yourdomain].com\n      http:\n        paths:\n          - backend:\n              service:\n                name: prometheus-operated\n                port:\n                  number: 10901\n            path: /\n            pathType: Prefix\n  tls:\n    - hosts:\n        - [clusterName].observability.[yourdomain].com\n      secretName: thanos-gateway-tls\n'})}),"\n",(0,n.jsxs)(t.p,{children:["To automate deployment across both ",(0,n.jsx)(t.code,{children:"observer"})," and ",(0,n.jsx)(t.code,{children:"observee"})," clusters, the Observability Stack leverages ",(0,n.jsx)(t.code,{children:"overlays"})," and ",(0,n.jsx)(t.code,{children:"targetCustomizations"})," in Fleet. Example configurations for deploying in ",(0,n.jsx)(t.code,{children:"observer"})," and ",(0,n.jsx)(t.code,{children:"observee"})," clusters are located within ",(0,n.jsx)(t.code,{children:"overlays/observee-cluster01"})," and ",(0,n.jsx)(t.code,{children:"overlays/observer-cluster"})," directories, respectively. If cert-manager is set up in your cluster, it's possible to automate the generation of SSL certificates for ingress objects. Additionally, external-dns can be utilized alongside to dynamically generate DNS records."]}),"\n",(0,n.jsx)(t.h3,{id:"thanos-sidecar-monitor",children:"Thanos Sidecar Monitor"}),"\n",(0,n.jsxs)(t.p,{children:["In order to enable the Thanos sidecar metrics gathering, a ",(0,n.jsx)(t.code,{children:"ServiceMonitor"})," object needs to be created as a seperate object. An example configuration is under the ",(0,n.jsx)(t.code,{children:"base"})," directory and can be used directly."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: rancher-monitoring-thanos-sidecar\n  labels:\n    app: rancher-monitoring-prometheus\nspec:\n  namespaceSelector:\n    matchNames:\n      - cattle-monitoring-system\n  selector:\n    matchLabels:\n      app: rancher-monitoring-thanos-discovery\n      release: rancher-monitoring\n  endpoints:\n    - port: http\n      path: /metrics\n"})}),"\n",(0,n.jsx)(t.h3,{id:"external-secrets",children:"External Secrets"}),"\n",(0,n.jsxs)(t.p,{children:["For an automated setup, the S3 connection secret ",(0,n.jsx)(t.code,{children:"thanos-s3-creds.yaml"})," should be integrated into the ",(0,n.jsx)(t.code,{children:"base"})," directory alongside the Prometheus components. A corresponding ",(0,n.jsx)(t.code,{children:"kustomization.yaml"})," file ensures the automatic creation of the secret. This setup supports both regular Kubernetes secrets (without encryption) and more secure approaches like integrating with ",(0,n.jsx)(t.a,{href:"https://www.vaultproject.io/",children:"HashiCorp Vault"}),", utilizing the ",(0,n.jsx)(t.a,{href:"https://external-secrets.io/latest/",children:"external-secrets-operator"})," to import the secret as an ExternalSecret object."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2115:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/prom-architecture-175af9a732ec17b2447eb0a99b850b21.png"},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);