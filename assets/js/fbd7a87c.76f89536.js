"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[361],{5873:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=s(4848),i=s(8453);const l={sidebar_position:3,title:"Quickstart"},n="Quickstart",o={id:"getting-started/quickstart",title:"Quickstart",description:"Enrolling Downstream Clusters to Fleet Manager",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/observability-stack.io/getting-started/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/observability-stack/observability-stack.io/edit/main/docs/docs/getting-started/quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Quickstart"},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/observability-stack.io/getting-started/requirements"},next:{title:"What's next?",permalink:"/observability-stack.io/getting-started/what-is-next"}},a={},c=[{value:"Enrolling Downstream Clusters to Fleet Manager",id:"enrolling-downstream-clusters-to-fleet-manager",level:2},{value:"Forming ClusterGroups",id:"forming-clustergroups",level:2},{value:"Clone the Base Repository",id:"clone-the-base-repository",level:2},{value:"Observability Stack Observer Cluster Deployment",id:"observability-stack-observer-cluster-deployment",level:2},{value:"Observability Stack Observee Cluster Deployment",id:"observability-stack-observee-cluster-deployment",level:2}];function b(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,r.jsx)(t.h2,{id:"enrolling-downstream-clusters-to-fleet-manager",children:"Enrolling Downstream Clusters to Fleet Manager"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Enroll downstream clusters to your Fleet Manager (this will be automatically done by Rancher Cluster Manager if you are using Rancher to deploy clusters and integrated Fleet) and set labels ",(0,r.jsx)(t.code,{children:"observee"})," and ",(0,r.jsx)(t.code,{children:"observer"})," to form cluster groups."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# for observer cluster\nCLUSTER_LABELS="--set-string labels.observability-enabled=true --set-string labels.observability-role=observer"\n# for observee cluster\nCLUSTER_LABELS="--set-string labels.observability-enabled=true --set-string labels.observability-role=observee"\n'})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Add Fleet Helm Repository"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"helm repo add fleet https://rancher.github.io/fleet-helm-charts/\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Deploy Fleet agent to downstream clusters"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'helm -n cattle-fleet-system install --create-namespace --wait \\\n    $CLUSTER_LABELS \\\n    --values values.yaml \\\n    --set apiServerCA="$API_SERVER_CA_DATA" \\\n    --set apiServerURL="$API_SERVER_URL" \\\n    fleet-agent fleet/fleet-agent\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://fleet.rancher.io/cluster-registration",children:"The details for the cluster registration process can be seen in official Fleet documentation"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"forming-clustergroups",children:"Forming ClusterGroups"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Create ClusterGroup ",(0,r.jsx)(t.code,{children:"observer-clusters"})]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"apiVersion: fleet.cattle.io/v1alpha1\nkind: ClusterGroup\nmetadata:\n  name: observer-clusters\n  annotations: {}\nspec:\n  selector:\n    matchLabels:\n      observability-enabled: 'true'\n      observability-role: observer\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Create ClusterGroup ",(0,r.jsx)(t.code,{children:"observee-clusters"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"apiVersion: fleet.cattle.io/v1alpha1\nkind: ClusterGroup\nmetadata:\n  name: observee-clusters\n  annotations: {}\nspec:\n  selector:\n    matchLabels:\n      observability-enabled: 'true'\n      observability-role: observee\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://fleet.rancher.io/cluster-group",children:"The details for the ClusterGroups can be seen in official Fleet documentation"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"clone-the-base-repository",children:"Clone the Base Repository"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Clone the ",(0,r.jsx)(t.a,{href:"https://github.com/observability-stack/observability-stack",children:"observability-stack repository"}),". Start with the observability-stack repository as your foundation for integrating with Fleet."]}),"\n",(0,r.jsxs)(t.li,{children:["Customize the configuration options in the ",(0,r.jsx)(t.a,{href:"https://github.com/observability-stack/observability-stack",children:"observability-stack repository"}),"  based on your needs for ",(0,r.jsx)(t.code,{children:"metrics"}),", ",(0,r.jsx)(t.code,{children:"logs"})," and ",(0,r.jsx)(t.code,{children:"traces"}),". You can find dedicated ",(0,r.jsx)(t.code,{children:"README.md"})," files under each observability topic as well as in the ",(0,r.jsx)(t.a,{href:"./../category/available-toolkit",children:"Available Toolkit"})," section."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"observability-stack-observer-cluster-deployment",children:"Observability Stack Observer Cluster Deployment"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Create ",(0,r.jsx)(t.a,{href:"https://github.com/observability-stack/observability-stack/blob/main/metrics/observer.yaml",children:"observer-metrics"})," ",(0,r.jsx)(t.code,{children:"GitObject"})," to deploy observer metrics components."]}),"\n",(0,r.jsxs)(t.li,{children:["Create ",(0,r.jsx)(t.a,{href:"https://github.com/observability-stack/observability-stack/blob/main/logs/observer.yaml",children:"observer-logs"})," ",(0,r.jsx)(t.code,{children:"GitObject"})," to deploy observer logs components."]}),"\n",(0,r.jsxs)(t.li,{children:["Create ",(0,r.jsx)(t.a,{href:"https://github.com/observability-stack/observability-stack/blob/main/traces/observer.yaml",children:"observer-traces"})," ",(0,r.jsx)(t.code,{children:"GitObject"})," to deploy observer traces components."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"observability-stack-observee-cluster-deployment",children:"Observability Stack Observee Cluster Deployment"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Create ",(0,r.jsx)(t.a,{href:"https://github.com/observability-stack/observability-stack/blob/main/metrics/observee.yaml",children:"observee-metrics"})," ",(0,r.jsx)(t.code,{children:"GitObject"})," to deploy observeemetrics components."]}),"\n",(0,r.jsxs)(t.li,{children:["Create ",(0,r.jsx)(t.a,{href:"https://github.com/observability-stack/observability-stack/blob/main/logs/observee.yaml",children:"observee-logs"})," ",(0,r.jsx)(t.code,{children:"GitObject"})," to deploy observee logs components."]}),"\n",(0,r.jsxs)(t.li,{children:["Create ",(0,r.jsx)(t.a,{href:"https://github.com/observability-stack/observability-stack/blob/main/traces/observee.yaml",children:"observee-traces"})," ",(0,r.jsx)(t.code,{children:"GitObject"})," to deploy observee traces components."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>o});var r=s(6540);const i={},l=r.createContext(i);function n(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);