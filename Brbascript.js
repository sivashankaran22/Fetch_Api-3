const quot3 = document.createElement("img");
quot3.setAttribute("class","pho");
quot3.setAttribute("src","../bb1.png");

const quot4 = document.createElement("img");
quot4.setAttribute("class","pho");
quot4.setAttribute("src","../bb.png");

const quot5 = document.createElement("img");
quot5.setAttribute("class","pho");
quot5.setAttribute("src","../bb3.png");

const div1 = document.createElement("div");
div1.setAttribute("class","div_content");
div1.appendChild(quot3);
div1.appendChild(quot4);
div1.appendChild(quot5);

document.body.append(div1);
const para = document.createElement("p");
para.setAttribute("class","text-center para_txt");
para.textContent =" 👑👑‘You’re an insane, degenerate piece of filth, and you deserve to die.’!!!!!";
document.body.append(para);


// -----------------! Table content
// table----------------------------!
const table = document.createElement("table");
table.setAttribute("class","table table-bordered");
table.setAttribute("id","tebody");

document.body.append(table)

// tablerow-----------------------!
const tablerow = document.createElement("tr");
tablerow.setAttribute("class","tab-row");
table.appendChild(tablerow);

// tablehead----------------------!
const tablehead1 = document.createElement("th");
tablehead1.setAttribute("class","tablehead");
tablehead1.setAttribute("id","tb1");
tablehead1.innerText ="Quote";
tablerow.appendChild(tablehead1)

const tablehead2 = document.createElement("th");
tablehead2.setAttribute("class","tablehead");
tablehead2.setAttribute("id","tb2");
tablehead2.innerText ="Author"
tablerow.appendChild(tablehead2)

// tablebody-----------------------!
const tabbody = document.createElement("tbody");
tabbody.setAttribute("class","tbody");
tabbody.setAttribute("id","tabbody");
table.appendChild(tabbody);

// -------------------!API functions

const BbRecord = async () => {
    const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/50");
    const details = await response.json();
    console.log(details);
    createcol(details)
};
const createcol = (details) => {
    let Tableval = "";
    details.map(details => {
    Tableval += `<tr>
        <td class="font">${details.quote}</td>
        <td>${details.author}</td>
    </tr> ` ;
    });
   document.getElementById('tabbody').innerHTML=Tableval;
};
BbRecord();