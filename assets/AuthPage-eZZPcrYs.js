import{r,j as s}from"./index-4wKK9jku.js";const u="_container_1snzx_1",g="_wrapper_1snzx_18",_="_title_1snzx_30",d="_text_1snzx_45",x="_form_1snzx_71",p="_email_1snzx_79",b="_password_1snzx_110",h="_button_1snzx_132",j="_bgSilver_1snzx_152",v="_bgBlue_1snzx_171",w="_backgroundImageTop_1snzx_191",f="_backgroundImageBottom_1snzx_209",e={container:u,wrapper:g,title:_,text:d,form:x,email:p,password:b,button:h,bgSilver:j,bgBlue:v,backgroundImageTop:w,backgroundImageBottom:f},z=()=>{const[t,o]=r.useState(""),[n,l]=r.useState(""),c=a=>{o(a.target.value)},i=a=>{l(a.target.value)},m=a=>{a.preventDefault(),console.log("email",t),console.log("password",n),o(""),l("")};return s.jsxs("div",{className:e.container,children:[s.jsx("div",{className:e.bgSilver}),s.jsx("div",{className:e.bgBlue}),s.jsx("div",{className:e.backgroundImageTop}),s.jsx("div",{className:e.backgroundImageBottom}),s.jsxs("div",{className:e.wrapper,children:[s.jsx("h1",{className:e.title,children:"Questify"}),s.jsx("p",{className:e.text,children:"Questify will turn your life into a thrilling game full of amazing quests and exciting challenges."}),s.jsxs("form",{className:e.form,onSubmit:m,children:[s.jsx("input",{type:"email",placeholder:"Choose your name to sign up or log in",className:e.email,name:"email",value:t,onChange:c}),s.jsx("input",{type:"password",className:e.password,name:"password",value:n,onChange:i}),s.jsx("button",{type:"submit",className:e.button,children:"go!"})]})]})]})},k=()=>s.jsx(z,{});export{k as default};
