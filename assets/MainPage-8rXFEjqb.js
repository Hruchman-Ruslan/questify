import{j as e,b as F,I as h,r,c as t,d as g,e as m,f as l,g as S}from"./index-XH_hO5yJ.js";const I=()=>e.jsx(e.Fragment,{children:e.jsx("button",{type:"button",className:F.button,children:e.jsx(h,{idIcon:"plus",fill:"#FFF"})})}),v=({onClickSelect:d})=>{const[n,a]=r.useState(!1),[x,i]=r.useState("Normal"),[s,j]=r.useState("green"),u=()=>{a(c=>!c)},o=(c,p)=>{i(c),j(p),a(!1),d(c,p)};return e.jsxs("div",{className:t.wrapper,children:[e.jsxs("div",{children:[e.jsxs("div",{className:t.selectMenu,onClick:u,children:[e.jsx("span",{className:t[`dropdownColor${s.charAt(0).toUpperCase()+s.slice(1)}`]}),e.jsx("div",{className:t.dropdownDefault,children:x}),n?e.jsx(h,{idIcon:"triangle-up",width:12,height:12}):e.jsx(h,{idIcon:"triangle-down",width:12,height:12})]}),n&&e.jsxs("ul",{className:t.dropdown,children:[e.jsxs("li",{className:t.dropdownItem,children:[e.jsx("span",{className:t.dropdownColorBlue}),e.jsx("p",{className:t.dropdownText,onClick:()=>o("Easy","blue"),children:"Easy"})]}),e.jsxs("li",{className:t.dropdownItem,children:[e.jsx("span",{className:t.dropdownColorGreen}),e.jsx("p",{className:t.dropdownText,onClick:()=>o("Normal","green"),children:"Normal"})]}),e.jsxs("li",{className:t.dropdownItem,children:[e.jsx("span",{className:t.dropdownColorRed}),e.jsx("p",{className:t.dropdownText,onClick:()=>o("Hard","red"),children:"Hard"})]})]})]}),e.jsx("div",{children:e.jsx(h,{idIcon:"Star",width:14,height:14,fill:"#B9C3C8"})})]})},k=({onChangeQuest:d})=>{const[n,a]=r.useState(""),x=i=>{a(i.target.value),d(n)};return e.jsx("div",{className:g.wrapper,children:e.jsxs("label",{className:g.title,children:["Create New Quest",e.jsx("input",{type:"text",className:g.input,value:n,onChange:x})]})})},T=({onClickCalendar:d,onClickTime:n})=>{const[a,x]=r.useState(new Date),[i,s]=r.useState(!1),[j,u]=r.useState(""),o=C=>{const N=new Date(C.target.value);x(N),d(N.toISOString().split("T")[0])},c=C=>{const N=C.target.value;u(N),n(N)},p=()=>{s(!i)},w=()=>{const C={weekday:"long"};return a.toLocaleDateString("en-US",C)};return e.jsxs("div",{className:m.wrapper,children:[e.jsx("p",{className:m.text,children:w()}),e.jsx(h,{idIcon:"calendar",width:14,height:14,onClick:p}),i&&e.jsxs("div",{className:m.wrapperDate,children:[e.jsx("label",{children:e.jsx("input",{className:m.inputTime,type:"date",value:a.toISOString().split("T")[0],onChange:o})}),e.jsxs("div",{className:m.wrapperTime,children:[e.jsx("label",{children:e.jsx("input",{className:m.inputTime,type:"time",value:j,onChange:c})}),e.jsx(h,{idIcon:"done",width:14,height:14,onClick:p})]})]})]})},y=({onClickCategory:d})=>{const[n,a]=r.useState(!1),[x,i]=r.useState("STUFF"),[s,j]=r.useState("#B9C3C8"),u=()=>{a(c=>!c)},o=(c,p)=>{i(c),j(p),a(!1),d(c,p)};return e.jsxs("div",{className:l.wrapper,style:{background:s},children:[e.jsxs("div",{className:l.box,onClick:u,children:[e.jsx("p",{className:l.text,children:x}),n?e.jsx(h,{idIcon:"triangle-up",width:12,height:12}):e.jsx(h,{idIcon:"triangle-down",width:12,height:12})]}),n&&e.jsxs("ul",{className:l.dropdown,children:[e.jsx("li",{className:l.dropdownItem,children:e.jsx("p",{className:l.text,onClick:()=>o("STUFF","#B9C3C8"),children:"STUFF"})}),e.jsx("li",{className:l.dropdownItem,children:e.jsx("p",{className:l.text,onClick:()=>o("FAMILY","#FFE6D3"),children:"FAMILY"})}),e.jsx("li",{className:l.dropdownItem,children:e.jsx("p",{className:l.text,onClick:()=>o("HEALTH","#CDF7FF"),children:"HEALTH"})}),e.jsx("li",{className:l.dropdownItem,children:e.jsx("p",{className:l.text,onClick:()=>o("LEARNING","#FFF6C0"),children:"LEARNING"})}),e.jsx("li",{className:l.dropdownItem,children:e.jsx("p",{className:l.text,onClick:()=>o("LEISURE","#F8D2FF"),children:"LEISURE"})})]})]})},D=()=>{const d=s=>{console.log(`${s}`)},n=s=>{console.log(`${s}`)},a=s=>{console.log(`${s}`)},x=s=>{console.log(`${s}`)},i=s=>{console.log(`${s}`)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:S.cardWrapper,style:{backgroundColor:"#FFFFFF",display:"flex",flexDirection:"column",position:"relative"},children:[e.jsx(v,{onClickSelect:d}),e.jsx(k,{onChangeQuest:n}),e.jsx(T,{onClickCalendar:a,onClickTime:x}),e.jsx(y,{onClickCategory:i})]})})},E=()=>e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx(I,{})]}),b=()=>e.jsx(E,{});export{b as default};
