"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[550],{9335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(4848),i=r(8453);const n={title:"OpenTelemetry"},a="Traces Tools: OpenTelemetry Collector",s={id:"available-toolkit/traces/opentelemetry",title:"OpenTelemetry",description:"The OpenTelemetry Collector is a key component within the Observability Stack for capturing trace data from Kubernetes clusters. It's specifically designed to collect traces from services configured to emit tracing information, such as ingress-nginx, and forwards this data to the local Jaeger Collector for processing and storage. Observability Stack uses the OpenTelemetry operator available on OperatorHub.io.",source:"@site/docs/available-toolkit/traces/opentelemetry.md",sourceDirName:"available-toolkit/traces",slug:"/available-toolkit/traces/opentelemetry",permalink:"/available-toolkit/traces/opentelemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/observability-stack/observability-stack.io/edit/main/docs/docs/available-toolkit/traces/opentelemetry.md",tags:[],version:"current",frontMatter:{title:"OpenTelemetry"},sidebar:"tutorialSidebar",previous:{title:"Jaeger",permalink:"/available-toolkit/traces/jaeger"},next:{title:"GitOps",permalink:"/category/gitops"}},c={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Quickstart",id:"quickstart",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"traces-tools-opentelemetry-collector",children:"Traces Tools: OpenTelemetry Collector"}),"\n",(0,o.jsxs)(t.p,{children:["The OpenTelemetry Collector is a key component within the Observability Stack for capturing trace data from Kubernetes clusters. It's specifically designed to collect traces from services configured to emit tracing information, such as ",(0,o.jsx)(t.code,{children:"ingress-nginx"}),", and forwards this data to the local Jaeger Collector for processing and storage. Observability Stack uses the OpenTelemetry operator available on ",(0,o.jsx)(t.a,{href:"https://operatorhub.io/operator/opentelemetry-operator",children:"OperatorHub.io"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Configuration files, including the necessary ",(0,o.jsx)(t.code,{children:"ClusterRole"}),", ",(0,o.jsx)(t.code,{children:"opentelemetry-collector.yaml"})," manifests, and an optional ",(0,o.jsx)(t.code,{children:"ServiceMonitor"})," setup for Prometheus metrics forwarding, are located in the ",(0,o.jsx)(t.code,{children:"opentelemetry/base/collector"})," directory."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"opentelemetry-collector.yaml"})," manifest outlines the configuration for receivers, processors, and exporters, offering flexibility to tailor the setup according to specific use cases."]}),"\n",(0,o.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,o.jsx)(t.p,{children:"To be completed."}),"\n",(0,o.jsx)(t.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,o.jsx)(t.p,{children:"To be completed."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var o=r(6540);const i={},n=o.createContext(i);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);