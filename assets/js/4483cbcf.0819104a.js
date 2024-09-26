"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[316],{8370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(4848),a=n(8453);const l={title:"Grafana Alert Rules",sidebar_position:1},o="Grafana JSON Alert Rules",s={id:"available-toolkit/alerts/grafana-alerts",title:"Grafana Alert Rules",description:"Refer to Grafana official docs for APIs.",source:"@site/docs/available-toolkit/alerts/grafana-alerts.md",sourceDirName:"available-toolkit/alerts",slug:"/available-toolkit/alerts/grafana-alerts",permalink:"/available-toolkit/alerts/grafana-alerts",draft:!1,unlisted:!1,editUrl:"https://github.com/observability-stack/observability-stack.io/edit/main/docs/docs/available-toolkit/alerts/grafana-alerts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Grafana Alert Rules",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/category/alerts"},next:{title:"Dashboards",permalink:"/category/dashboards"}},i={},c=[{value:"Download",id:"download",level:2},{value:"Upload",id:"upload",level:2},{value:"curl",id:"curl",level:3},{value:"Delete",id:"delete",level:2},{value:"curl",id:"curl-1",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"grafana-json-alert-rules",children:"Grafana JSON Alert Rules"})}),"\n",(0,r.jsxs)(t.p,{children:["Refer to ",(0,r.jsx)(t.a,{href:"https://grafana.com/docs/grafana/latest/developers/http_api/alerting_provisioning/#alert-rules",children:"Grafana official docs"})," for APIs."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"We assume that you created an API Key for accessing Grafana."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"download",children:"Download"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Create an alert rule from the Grafana UI."}),"\n",(0,r.jsxs)(t.li,{children:["Go to the alert rule and use the ",(0,r.jsx)(t.code,{children:"copy link"})," button. In the URL there is the alert rule UID."]}),"\n",(0,r.jsxs)(t.li,{children:["Use the UID found in the previous phase to download the alert JSON: ",(0,r.jsx)(t.code,{children:'curl -s -H "Authorization: Bearer <my-super-token>" -X GET https://<grafana-url>/api/v1/provisioning/alert-rules/<alert-rule-uid> | tee my-super-alert-rule.json'}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: Use ",(0,r.jsx)(t.code,{children:"jq"})," to read the content easely."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"upload",children:"Upload"}),"\n",(0,r.jsx)(t.p,{children:"You can choose between 2 options:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"curl for just uploading the alert rule. There are some parameters that could be different between 2 different deploys (e.g., UIDs). It relates only to alert rules and no contact point is created."}),"\n",(0,r.jsx)(t.li,{children:"Terraform manages both alert rules and contact points. Repeatable between different Terraform runs."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"curl",children:"curl"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -s -H "Authorization: Bearer <my-super-token>" -X POST https://<grafana-url>/api/v1/provisioning/alert-rules -H "Content-Type: application/json" -d "$(cat my-super-alert-rule.json)"\n'})}),"\n",(0,r.jsx)(t.h2,{id:"delete",children:"Delete"}),"\n",(0,r.jsx)(t.p,{children:"It is not possible to delete from the UI alert rules created from APIs."}),"\n",(0,r.jsx)(t.h3,{id:"curl-1",children:"curl"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'curl -s -H "Authorization: Bearer <my-super-token>" -X DELETE https://<grafana-url>/api/v1/provisioning/alert-rules/<alert-rule-uid>'})}),"\n",(0,r.jsx)(t.h1,{id:"configure-the-contact-point",children:"Configure the contact point"}),"\n",(0,r.jsx)(t.p,{children:"First you need to setup the contact point to see alerts flowing to slack:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Go to contact point page and select a new contact point for slack."}),"\n",(0,r.jsxs)(t.li,{children:["Use a name like ",(0,r.jsx)(t.code,{children:"alerts-private-channel"})]}),"\n",(0,r.jsxs)(t.li,{children:["Insert the ",(0,r.jsx)(t.code,{children:"Webhook URL"}),"  and ",(0,r.jsx)(t.code,{children:"token"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Then you need to create an alert policy or use the root one."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Go to Alerting > Notification policies > Root policy and select ",(0,r.jsx)(t.code,{children:"alerts-private-channel"})," as default contact point."]}),"\n",(0,r.jsxs)(t.li,{children:["Go to Alerting > Notification policies > Create a new policy and set ",(0,r.jsx)(t.code,{children:"team=operation"})," as the matching label together with the ",(0,r.jsx)(t.code,{children:"alerts-private-channel"})," as default contact point."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(6540);const a={},l=r.createContext(a);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);