let form=document.querySelector('form');
let input=document.querySelector('input');
let ol=document.querySelector('ol');
form.addEventListener("submit",()=>{
    event.preventDefault();
    let div=document.createElement('div');//creating a div
    ol.append(div);
    div.setAttribute('id','div1');
    let li=document.createElement('li');//creating a list item
    div.append(li);
    li.innerText=input.value;
    let dltbtn=document.createElement('button');//creating a button
    dltbtn.innerText="Delete";
    div.append(dltbtn);

    input.value="";
    dltbtn.addEventListener('click',()=>{
        div.remove();
    });
    
});
