import{j as e,b as N,I as i,r as c,c as s,d as m,e as u,f as n,g}from"./index-Sn4Q0h5L.js";const w=()=>e.jsx(e.Fragment,{children:e.jsx("button",{type:"button",className:N.button,children:e.jsx(i,{idIcon:"plus",fill:"#FFF"})})}),C=()=>{const[a,o]=c.useState(!1),[r,d]=c.useState("Normal"),[x,p]=c.useState("green"),h=()=>{o(l=>!l)},t=(l,j)=>{d(l),p(j),o(!1),console.log(`${l} and ${j}`)};return e.jsxs("div",{className:s.wrapper,children:[e.jsxs("div",{children:[e.jsxs("div",{className:s.selectMenu,onClick:h,children:[e.jsx("span",{className:s[`dropdownColor${x.charAt(0).toUpperCase()+x.slice(1)}`]}),e.jsx("div",{className:s.dropdownDefault,children:r}),a?e.jsx(i,{idIcon:"triangle-up",width:12,height:12}):e.jsx(i,{idIcon:"triangle-down",width:12,height:12})]}),a&&e.jsxs("ul",{className:s.dropdown,children:[e.jsxs("li",{className:s.dropdownItem,children:[e.jsx("span",{className:s.dropdownColorBlue}),e.jsx("p",{className:s.dropdownText,onClick:()=>t("Easy","blue"),children:"Easy"})]}),e.jsxs("li",{className:s.dropdownItem,children:[e.jsx("span",{className:s.dropdownColorGreen}),e.jsx("p",{className:s.dropdownText,onClick:()=>t("Normal","green"),children:"Normal"})]}),e.jsxs("li",{className:s.dropdownItem,children:[e.jsx("span",{className:s.dropdownColorRed}),e.jsx("p",{className:s.dropdownText,onClick:()=>t("Hard","red"),children:"Hard"})]})]})]}),e.jsx("div",{children:e.jsx(i,{idIcon:"Star",width:14,height:14,fill:"#B9C3C8"})})]})},F=()=>{const[a,o]=c.useState(""),r=d=>{o(d.target.value),console.log(a)};return e.jsx("div",{className:m.wrapper,children:e.jsxs("label",{className:m.title,children:["Create New Quest",e.jsx("input",{type:"text",className:m.input,value:a,onChange:r})]})})},I=()=>{const[a,o]=c.useState(new Date),[r,d]=c.useState(!1),x=t=>{const l=new Date(t.target.value);o(l),d(!1),console.log(l)},p=()=>{d(!r)},h=()=>{const t={weekday:"long"};return a.toLocaleDateString("en-US",t)};return e.jsxs("div",{className:u.wrapper,children:[e.jsx("p",{className:u.text,children:h()}),e.jsx(i,{idIcon:"calendar",width:14,height:14,onClick:p}),r&&e.jsx("label",{children:e.jsx("input",{type:"date",value:a.toISOString().split("T")[0],onChange:x})})]})},S=()=>{const[a,o]=c.useState(!1),[r,d]=c.useState("FAMILY"),[x,p]=c.useState("#FFE6D3"),h=()=>{o(l=>!l)},t=(l,j)=>{d(l),p(j),o(!1),console.log(`${l} and ${j}`)};return e.jsxs("div",{className:n.wrapper,style:{background:x},children:[e.jsxs("div",{className:n.box,onClick:h,children:[e.jsx("p",{className:n.text,children:r}),a?e.jsx(i,{idIcon:"triangle-up",width:12,height:12}):e.jsx(i,{idIcon:"triangle-down",width:12,height:12})]}),a&&e.jsxs("ul",{className:n.dropdown,children:[e.jsx("li",{className:n.dropdownItem,children:e.jsx("p",{className:n.text,onClick:()=>t("FAMILY","#FFE6D3"),children:"FAMILY"})}),e.jsx("li",{className:n.dropdownItem,children:e.jsx("p",{className:n.text,onClick:()=>t("HEALTH","#CDF7FF"),children:"HEALTH"})}),e.jsx("li",{className:n.dropdownItem,children:e.jsx("p",{className:n.text,onClick:()=>t("LEARNING","#FFF6C0"),children:"LEARNING"})}),e.jsx("li",{className:n.dropdownItem,children:e.jsx("p",{className:n.text,onClick:()=>t("LEISURE","#F8D2FF"),children:"LEISURE"})})]})]})},v=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:g.cardWrapper,style:{backgroundColor:"#FFFFFF",display:"flex",flexDirection:"column",position:"relative"},children:[e.jsx(C,{}),e.jsx(F,{}),e.jsx(I,{}),e.jsx(S,{})]})}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(w,{})]}),f=()=>e.jsx(y,{});export{f as default};
