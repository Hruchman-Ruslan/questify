import{u as h,r as m,a as x,j as s,s as e,b as j,l as u}from"./index-qz9IJ4-M.js";const f=h,v=()=>{const[a,l]=m.useState(""),[t,i]=m.useState(""),n=f(),r=x(),g=o=>{l(o.target.value)},p=o=>{i(o.target.value)},d=async o=>{o.preventDefault(),console.log("email",a),console.log("password",t);try{(await n(j({email:a,password:t}))).type==="auth/register/fulfilled"?(await n(u({email:a,password:t})),r("/main")):(await n(u({email:a,password:t})),r("/main"))}catch(c){console.error(c)}finally{l(""),i("")}};return s.jsxs("div",{className:e.container,children:[s.jsx("div",{className:e.bgSilver}),s.jsx("div",{className:e.bgBlue}),s.jsx("div",{className:e.backgroundImageTop}),s.jsx("div",{className:e.backgroundImageBottom}),s.jsxs("div",{className:e.wrapper,children:[s.jsx("h1",{className:e.title,children:"Questify"}),s.jsx("p",{className:e.text,children:"Questify will turn your life into a thrilling game full of amazing quests and exciting challenges."}),s.jsxs("form",{className:e.form,onSubmit:d,children:[s.jsx("input",{type:"email",placeholder:"Choose your name to sign up or log in",className:e.email,name:"email",value:a,onChange:g}),s.jsx("input",{type:"password",className:e.password,name:"password",value:t,onChange:p}),s.jsx("button",{type:"submit",className:e.button,children:"go!"})]})]})]})},w=()=>s.jsx(v,{});export{w as default};
