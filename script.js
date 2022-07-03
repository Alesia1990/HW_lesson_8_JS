let html = document.querySelector("html");
let meta = document.createElement("meta");
let title = document.createElement("title");
let style = document.createElement("style");

let call = document.createElement("div");
let h1= document.createElement("h1");
let subtitle = document.createElement("p");

let options = document.createElement("div");
let option = document.createElement("div");
let h3= document.createElement("h3");
let h2= document.createElement("h2");
let p= document.createElement("p");
let button= document.createElement("button");


html.setAttribute("lang", "ru");
meta.setAttribute("charset", "UTF-8");


call.classList.add("call");
subtitle.classList.add("subtitle");
options.classList.add("options");
option.classList.add("option");
p.classList.add("option_p");


title.innerHTML= "Lesson 8";
h1.innerHTML= "Choose Your Option";
subtitle.innerHTML= "But I must explain to you how all this mistaken idea of denouncing";
h3.innerHTML= "FREELANCER";
h2.innerHTML= "Initially designed to";
p.innerHTML= "But I must explain to you how all this mistaken idea of denouncing ";
button.innerHTML= "START HERE";


document.head.append(meta, title, style);
document.body.append(call);
call.append(h1, subtitle, options);
option.append(h3, h2, p, button);


style.innerHTML= `
    body{
        marhin: 0;
        padding: 0;
    }
    .call{
        width: 80%;
        border: 1px solid #E8E9ED;
        border-radius: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .call h1{
        text-align: center;
        color: #212121;
        font-family: 'Arvo', serif;
        font-weight: normal;
        font-size: 36px;
        line-height: 48px;
        text-transform: capitalize;
    }

    .call .subtitle{
        text-align: center;
        color: #9FA3A7;
        font-family: 'OpenSans", sans-serif;
        font-weight: normal;
        font-size: 14px;
        line-height: 26px;
    }
    .call .options{
        display: flex;
        margin-top: 50px;
    }
    .call .option{
        width: 50%;
        text-align: center;
    }
    .call h3{
        margin-top: 80px;
        font-size: 12px;
        color: #9FA3A7;
        letter-spacing: 2.4px;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        
    }
    
    .call h2{
        font-size: 36px;
        line-height: 46px;
        color: #212121;
        font-family: 'Arvo', serif;
        font-style: normal;
        font-weight: 400;
        margin-left:auto; 
        margin-right: auto;
        width: 200px;
    }
    .call .option_p{
        color: #9FA3A7;
        font-size: 12px;
        line-height: 22px;
        font-family: 'OpenSans", sans-serif;
        line-height: 22px;
    }
    .call button{
        margin-top: 50px;
        margin-bottom: 70px;
        font-size: 12px;
        color: #212121;
        text-transform: uppercase;
        letter-spacing: 2.4px;
        font-family: 'Montserrat', sans-serif;
        fonw-weight: 700;
        line-height: 15px;
        padding: 10px 15px;
        border: 3px solid #FFC80A;
        border-radius: 20px;
        background-color: transparent;
        cursor: pointer;
    }

    .call .option:hover{
        background-color: #8F75BE;
    }
    .call .option:hover h3{
        color: #FFC80A;
    }
    .call .option:hover h2,
    .call .option:hover .option_p,
    .call .option:hover button{
        color: #FFFFFF;

    }
`;
let option2= option.cloneNode(true);
let option2H3 = option2.querySelector("h3");
option2H3.innerHTML="studio";




options.append(option, option2);
