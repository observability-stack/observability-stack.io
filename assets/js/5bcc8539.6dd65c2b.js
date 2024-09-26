"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[609],{8727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(4848),s=t(8453);const a={title:"Thanos",sidebar_position:1},r="Metrics Tools: Thanos",i={id:"available-toolkit/metrics/thanos",title:"Thanos",description:"Thanos is used within the Observability Stack for the long-term storage and centralization of Prometheus metrics data. It relies on the Thanos Bitnami Helm Chart.",source:"@site/docs/available-toolkit/metrics/thanos.md",sourceDirName:"available-toolkit/metrics",slug:"/available-toolkit/metrics/thanos",permalink:"/available-toolkit/metrics/thanos",draft:!1,unlisted:!1,editUrl:"https://github.com/observability-stack/observability-stack.io/edit/main/docs/docs/available-toolkit/metrics/thanos.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Thanos",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/category/metrics"},next:{title:"Prometheus Operator",permalink:"/available-toolkit/metrics/prometheus-operator"}},c={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Envoy Sidecar for Thanos",id:"envoy-sidecar-for-thanos",level:3},{value:"External Secrets",id:"external-secrets",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"metrics-tools-thanos",children:"Metrics Tools: Thanos"})}),"\n",(0,o.jsxs)(n.p,{children:["Thanos is used within the Observability Stack for the long-term storage and centralization of Prometheus metrics data. It relies on the ",(0,o.jsx)(n.a,{href:"https://github.com/bitnami/charts/tree/main/bitnami/thanos/",children:"Thanos Bitnami Helm Chart"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Thanos Multi-cluster Architecture",src:t(4440).A+"",width:"1225",height:"791"})})}),"\n",(0,o.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,o.jsxs)(n.p,{children:['The Observability Stack recommends creating a Kubernetes secret named "thanos-objectstorage" for Thanos S3 connection details. This secret should then be mounted using the ',(0,o.jsx)(n.code,{children:"existingObjstoreSecret"})," field in the Helm chart values, rather than passing the values directly to the Helm chart or as an argument."]}),"\n",(0,o.jsx)(n.p,{children:"The S3 connection YAML manifest should follow this format:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"type: S3\nconfig:\n  bucket: <thanos-object-storage-bucket-name>\n  endpoint: <s3-endpoint>\n  region: <region>\n  aws_sdk_auth: false\n  access_key: <access_key>\n  insecure: false\n  signature_version2: false  # Equivalent to v4auth: true\n  secret_key: <secret_key>\n  bucket_lookup_type: path  # Equivalent to pathstyle: true\n"})}),"\n",(0,o.jsxs)(n.p,{children:["More details can be found in the ",(0,o.jsx)(n.a,{href:"https://thanos.io/tip/thanos/storage.md/#s3",children:"Thanos documentation"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To create this secret via kubectl, use the following command, ensuring your YAML manifest is saved to a file (e.g., thanos-s3-creds.yaml):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl create secret generic thanos-objectstorage --from-file=thanos-s3-creds.yaml\n"})}),"\n",(0,o.jsx)(n.h2,{id:"advanced-configuration",children:"Advanced Configuration"}),"\n",(0,o.jsx)(n.h3,{id:"envoy-sidecar-for-thanos",children:"Envoy Sidecar for Thanos"}),"\n",(0,o.jsxs)(n.p,{children:["Utilizing an Envoy sidecar presents a viable alternative for enabling cross-cluster communications between observer and observee clusters, especially in situations where setting up a VPN or cluster mesh is too complex or expensive to set up or maintain. In such a scenario, the ",(0,o.jsx)(n.code,{children:"observer"})," cluster, which hosts Thanos, would require connections to multiple remote Thanos Sidecar instances located within ",(0,o.jsx)(n.code,{children:"observee"})," clusters. (e.g., to their ingress endpoints, of which the configs below are based)."]}),"\n",(0,o.jsxs)(n.p,{children:["To achieve this, the query sidecar component within the Thanos Helm Chart ",(0,o.jsx)(n.code,{children:"values.yaml"})," manifest needs to be configured. An example configuration snippet can be seen below;"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'  query:\n    enabled: true\n    replicaLabel:\n      - "prometheus_replica"\n      - "rule_replica"\n    dnsDiscovery:\n      sidecarsService: "prometheus-operated"\n      sidecarsNamespace: "cattle-monitoring-system" # the namespace of the prometheus deployment. (this is cattle-monitoring-system for rancher-monitoring operator)\n    sidecars:\n      - name: observer-envoy-sidecar\n        args:\n          - "-c"\n          - /config/envoy.yaml\n        image: "envoyproxy/envoy:v1.16.0"\n        ports:\n          - name: envoy-observee01\n            containerPort: 10000\n            protocol: TCP\n        volumeMounts:\n          - name: envoy-config\n            mountPath: "/config"\n            mountPropagation: None\n    extraVolumes:\n      - name: envoy-config\n        configMap:\n          name: thanos-envoy-config\n          defaultMode: 420\n          optional: false\n    stores:\n      - "dnssrv+_envoy-observee01._tcp.thanos-envoy-sidecar.thanos-system.svc.observer.local"\n      - "dnssrv+_[port_name]._tcp.[service-name].[namespace].svc.[clusterDomain].local"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For an automated Envoy v3 configuration into the Envoy sidecars, the ConfigMap should be integrated into the ",(0,o.jsx)(n.code,{children:"base"})," directory alongside with corresponding ",(0,o.jsx)(n.code,{children:"kustomization.yaml"})," file ensures automatic creation of the ConfigMap."]}),"\n",(0,o.jsxs)(n.p,{children:["An example Envoy v3 ConfigMap ",(0,o.jsx)(n.code,{children:"envoy-v3.yaml"})," and ",(0,o.jsx)(n.code,{children:"kustomization.yaml"}),"  can be seen below and under ",(0,o.jsx)(n.code,{children:"base"})," directory;"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'  apiVersion: v1\n  kind: Service\n  metadata:\n    name: thanos-envoy-sidecar\n    labels:\n      name: thanos-envoy-sidecar\n  spec:\n    type: ClusterIP\n    selector:\n      app.kubernetes.io/component: query\n      app.kubernetes.io/managed-by: Helm\n      app.kubernetes.io/name: thanos\n    ports:\n      - name: envoy-observee01\n        protocol: TCP\n        port: 10000\n        targetPort: 10000\n    sessionAffinity: "None"\n  ---\n  apiVersion: v1\n  kind: ConfigMap\n  metadata:\n    name: thanos-envoy-config\n  data:\n    envoy.yaml: |\n      admin:\n        access_log_path: /tmp/admin_access.log\n        address:\n          socket_address: { address: 0.0.0.0, port_value: 9901 }\n\n      static_resources:\n        listeners:\n        - name: envoy-observee01\n          address:\n            socket_address:\n              address: 0.0.0.0\n              port_value: 10000\n          filter_chains:\n          - filters:\n            - name: envoy.http_connection_manager\n              typed_config:\n                "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\n                codec_type: AUTO\n                access_log:\n                - name: envoy.access_loggers.file\n                  typed_config:\n                    "@type": type.googleapis.com/envoy.extensions.access_loggers.file.v3.FileAccessLog\n                    path: /dev/stdout\n                    log_format:\n                      text_format: |\n                        [%START_TIME%] "%REQ(:METHOD)% %REQ(X-ENVOY-ORIGINAL-PATH?:PATH)% %PROTOCOL%"\n                        %RESPONSE_CODE% %RESPONSE_FLAGS% %RESPONSE_CODE_DETAILS% %BYTES_RECEIVED% %BYTES_SENT% %DURATION%\n                        %RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)% "%REQ(X-FORWARDED-FOR)%" "%REQ(USER-AGENT)%"\n                        "%REQ(X-REQUEST-ID)%" "%REQ(:AUTHORITY)%" "%UPSTREAM_HOST%" "%UPSTREAM_TRANSPORT_FAILURE_REASON%"\\n   \n                - name: envoy.access_loggers.file\n                  typed_config:\n                    "@type": type.googleapis.com/envoy.extensions.access_loggers.file.v3.FileAccessLog\n                    path: /dev/stdout\n                stat_prefix: ingress_http\n                route_config:\n                  name: local_route\n                  virtual_hosts:\n                  - name: local_service\n                    domains: ["*"]\n                    routes:\n                    - match:\n                        prefix: "/"\n                      route: \n                        cluster: envoy-observee01\n                        host_rewrite_literal: prometheus-envoy-observee01.observability.[yourdomain].com\n                http_filters:\n                - name: envoy.filters.http.router\n        clusters:\n        - name: envoy-observee01\n          connect_timeout: 30s\n          type: LOGICAL_DNS\n          http2_protocol_options: {}\n          dns_lookup_family: V4_ONLY\n          lb_policy: ROUND_ROBIN\n          load_assignment:\n            cluster_name: envoy-observee01\n            endpoints:\n              - lb_endpoints:\n                - endpoint:\n                    address:\n                      socket_address:\n                        address: prometheus-envoy-observee01.observability.[yourdomain].com\n                        port_value: 443\n          transport_socket:\n            name: envoy.transport_sockets.tls\n            typed_config:\n              "@type": type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext\n              common_tls_context:\n                alpn_protocols:\n                - h2\n                - http/1.1\n              sni: prometheus-envoy-observee01.observability.[yourdomain].com\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For detailed information, you can refer to the ",(0,o.jsx)(n.a,{href:"https://thanos.io/tip/operating/cross-cluster-tls-communication.md/",children:"Thanos Documentation for Cross-cluster communication"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"external-secrets",children:"External Secrets"}),"\n",(0,o.jsxs)(n.p,{children:["For an automated setup, the S3 connection secret ",(0,o.jsx)(n.code,{children:"thanos-s3-creds.yaml"})," should be integrated into the ",(0,o.jsx)(n.code,{children:"base"})," directory alongside the Thanos and Prometheus metrics components. A corresponding ",(0,o.jsx)(n.code,{children:"kustomization.yaml"})," file ensures the automatic creation of the secret. This setup supports both regular Kubernetes secrets (without encryption) and more secure approaches like integrating with ",(0,o.jsx)(n.a,{href:"https://www.vaultproject.io/",children:"HashiCorp Vault"}),", utilizing the ",(0,o.jsx)(n.a,{href:"https://external-secrets.io/latest/",children:"external-secrets-operator"})," to import the secret as an ExternalSecret object."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4440:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/thanos-architecture-1693ec4fd0e77631297cf58cc45ec98a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(6540);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);