"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3107],{5419:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(85893),l=n(11151);const i={title:"End Users",sidebar_label:"End Users",sidebar_position:5,slug:"/middleware/callbacks/end-users"},t="Usage",c={id:"middleware/callbacks/end-users",title:"End Users",description:"This section explains how to use the callbacks middleware from the perspective of an IBC Actor. Callbacks middleware provides two types of callbacks:",source:"@site/docs/04-middleware/02-callbacks/05-end-users.md",sourceDirName:"04-middleware/02-callbacks",slug:"/middleware/callbacks/end-users",permalink:"/main/middleware/callbacks/end-users",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"End Users",sidebar_label:"End Users",sidebar_position:5,slug:"/middleware/callbacks/end-users"},sidebar:"defaultSidebar",previous:{title:"Events",permalink:"/main/middleware/callbacks/events"},next:{title:"Gas Management",permalink:"/main/middleware/callbacks/gas"}},r={},d=[{value:"Source Callbacks",id:"source-callbacks",level:2},{value:"Destination Callbacks",id:"destination-callbacks",level:2}];function o(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(a.p,{children:"This section explains how to use the callbacks middleware from the perspective of an IBC Actor. Callbacks middleware provides two types of callbacks:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Source callbacks:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"SendPacket"})," callback"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"OnAcknowledgementPacket"})," callback"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"OnTimeoutPacket"})," callback"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Destination callbacks:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"ReceivePacket"})," callback"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"For a given channel, the source callbacks are supported if the source chain has the callbacks middleware wired up in the channel's IBC stack. Similarly, the destination callbacks are supported if the destination chain has the callbacks middleware wired up in the channel's IBC stack."}),"\n",(0,s.jsx)(a.p,{children:"::: tip\nCallbacks are always executed after the packet has been processed by the underlying IBC module.\n:::"}),"\n",(0,s.jsxs)(a.p,{children:["::: warning\nIf the underlying application module is doing an asynchronous acknowledgement on packet receive (for example, if the ",(0,s.jsx)(a.a,{href:"https://github.com/cosmos/ibc-apps/tree/main/middleware/packet-forward-middleware",children:"packet forward middleware"})," is in the stack, and is being used by this packet), then the callbacks middleware will execute the ",(0,s.jsx)(a.code,{children:"ReceivePacket"})," callback after the acknowledgement has been received.\n:::"]}),"\n",(0,s.jsx)(a.h2,{id:"source-callbacks",children:"Source Callbacks"}),"\n",(0,s.jsx)(a.p,{children:"Source callbacks are natively supported in the following ibc modules (if they are wrapped by the callbacks middleware):"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.code,{children:"transfer"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.code,{children:"icacontroller"})}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"To have your source callbacks be processed by the callbacks middleware, you must set the memo in the application's packet data to the following format:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsonc",children:'{\n  "src_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  }\n}\n'})}),"\n",(0,s.jsx)(a.h2,{id:"destination-callbacks",children:"Destination Callbacks"}),"\n",(0,s.jsx)(a.p,{children:"Destination callbacks are natively only supported in the transfer module. Note that wrapping icahost is not supported. This is because icahost should be able to execute an arbitrary transaction anyway, and can call contracts or modules directly."}),"\n",(0,s.jsx)(a.p,{children:"To have your destination callbacks processed by the callbacks middleware, you must set the memo in the application's packet data to the following format:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsonc",children:'{\n  "dest_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  }\n}\n'})}),"\n",(0,s.jsx)(a.p,{children:"Note that a packet can have both a source and destination callback."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsonc",children:'{\n  "src_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  },\n  "dest_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  }\n}\n'})}),"\n",(0,s.jsx)(a.h1,{id:"user-defined-gas-limit",children:"User Defined Gas Limit"}),"\n",(0,s.jsx)(a.p,{children:"User defined gas limit was added for the following reasons:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"To prevent callbacks from blocking packet lifecycle."}),"\n",(0,s.jsx)(a.li,{children:"To prevent relayers from being able to DOS the callback execution by sending a packet with a low amount of gas."}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["::: tip\nThere is a chain wide parameter that sets the maximum gas limit that a user can set for a callback. This is to prevent a user from setting a gas limit that is too high for relayers. If the ",(0,s.jsx)(a.code,{children:'"gas_limit"'})," is not set in the packet memo, then the maximum gas limit is used.\n:::"]}),"\n",(0,s.jsx)(a.p,{children:"These goals are achieved by creating a minimum gas amount required for callback execution. If the relayer provides at least the minimum gas limit for the callback execution, then the packet lifecycle will not be blocked if the callback runs out of gas during execution, and the callback cannot be retried. If the relayer does not provided the minimum amount of gas and the callback executions runs out of gas, the entire tx is reverted and it may be executed again."}),"\n",(0,s.jsxs)(a.p,{children:["::: tip\n",(0,s.jsx)(a.code,{children:"SendPacket"})," callback is always reverted if the callback execution fails or returns an error for any reason. This is so that the packet is not sent if the callback execution fails.\n:::"]})]})}function h(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>t});var s=n(67294);const l={},i=s.createContext(l);function t(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);