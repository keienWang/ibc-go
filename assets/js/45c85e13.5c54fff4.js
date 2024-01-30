"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7351],{52841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(85893),c=n(11151);const i={title:"Development Use Cases",sidebar_label:"Development Use Cases",sidebar_position:2,slug:"/apps/interchain-accounts/development"},o="Development use cases",s={id:"apps/interchain-accounts/development",title:"Development Use Cases",description:"The initial version of Interchain Accounts allowed for the controller submodule to be extended by providing it with an underlying application which would handle all packet callbacks.",source:"@site/versioned_docs/version-v7.3.x/02-apps/02-interchain-accounts/02-development.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/development",permalink:"/v7/apps/interchain-accounts/development",draft:!1,unlisted:!1,tags:[],version:"v7.3.x",sidebarPosition:2,frontMatter:{title:"Development Use Cases",sidebar_label:"Development Use Cases",sidebar_position:2,slug:"/apps/interchain-accounts/development"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/v7/apps/interchain-accounts/overview"},next:{title:"Authentication Modules",permalink:"/v7/apps/interchain-accounts/auth-modules"}},r={},l=[{value:"Custom authentication",id:"custom-authentication",level:2},{value:"Redirection to a smart contract",id:"redirection-to-a-smart-contract",level:2},{value:"Packet callbacks",id:"packet-callbacks",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"development-use-cases",children:"Development use cases"}),"\n",(0,a.jsx)(t.p,{children:"The initial version of Interchain Accounts allowed for the controller submodule to be extended by providing it with an underlying application which would handle all packet callbacks.\nThat functionality is now being deprecated in favor of alternative approaches.\nThis document will outline potential use cases and redirect each use case to the appropriate documentation."}),"\n",(0,a.jsx)(t.h2,{id:"custom-authentication",children:"Custom authentication"}),"\n",(0,a.jsxs)(t.p,{children:["Interchain accounts may be associated with alternative types of authentication relative to the traditional public/private key signing.\nIf you wish to develop or use Interchain Accounts with a custom authentication module and do not need to execute custom logic on the packet callbacks, we recommend you use ibc-go v6 or greater and that your custom authentication module interacts with the controller submodule via the ",(0,a.jsx)(t.a,{href:"/v7/apps/interchain-accounts/messages",children:(0,a.jsx)(t.code,{children:"MsgServer"})}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If you wish to consume and execute custom logic in the packet callbacks, then please read the section ",(0,a.jsx)(t.a,{href:"#packet-callbacks",children:"Packet callbacks"})," below."]}),"\n",(0,a.jsx)(t.h2,{id:"redirection-to-a-smart-contract",children:"Redirection to a smart contract"}),"\n",(0,a.jsxs)(t.p,{children:["It may be desirable to allow smart contracts to control an interchain account.\nTo facilitate such an action, the controller submodule may be provided an underlying application which redirects to smart contract callers.\nAn improved design has been suggested in ",(0,a.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/pull/1976",children:"ADR 008"})," which performs this action via middleware."]}),"\n",(0,a.jsxs)(t.p,{children:["Implementers of this use case are recommended to follow the ADR 008 approach.\nThe underlying application may continue to be used as a short term solution for ADR 008 and the ",(0,a.jsx)(t.a,{href:"/v7/apps/interchain-accounts/auth-modules#registerinterchainaccount",children:"legacy API"})," should continue to be utilized in such situations."]}),"\n",(0,a.jsx)(t.h2,{id:"packet-callbacks",children:"Packet callbacks"}),"\n",(0,a.jsx)(t.p,{children:"If a developer requires access to packet callbacks for their use case, then they have the following options:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Write a smart contract which is connected via an ADR 008 or equivalent IBC application (recommended)."}),"\n",(0,a.jsx)(t.li,{children:"Use the controller's underlying application to implement packet callback logic."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In the first case, the smart contract should use the ",(0,a.jsx)(t.a,{href:"/v7/apps/interchain-accounts/messages",children:(0,a.jsx)(t.code,{children:"MsgServer"})}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In the second case, the underlying application should use the ",(0,a.jsx)(t.a,{href:"/v7/apps/interchain-accounts/legacy/keeper-api",children:"legacy API"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var a=n(67294);const c={},i=a.createContext(c);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);