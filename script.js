const btnclass="flex-none w-14 h-14 justify-center items-center m-2 font-bold py-2 px-2 rounded text-white border-2 text-2xl";
buttons=document.querySelectorAll('button');
btnclass.split(" ").forEach((cls)=>{buttons.forEach((btn)=>{
    btn.classList.add(cls)
})});

const nums="border-green-500 hover:bg-green-500";
numbtn=document.querySelectorAll('.number');
nums.split(" ").forEach((cls)=>{numbtn.forEach(function (btns) {
    btns.classList.add(cls);

})});

const ops="border-blue-500 hover:bg-blue-500";
opbtn=document.querySelectorAll('.Operator');
ops.split(" ").forEach((cls)=>{opbtn.forEach((btn)=>{
    btn.classList.add(cls)
})});

const fns="border-orange-500 hover:bg-orange-500";
fnbtn=document.querySelectorAll('.clear , .Calculate')
fns.split(" ").forEach((cls)=>{fnbtn.forEach((btn)=>{
    btn.classList.add(cls)
})})

let currnum=document.querySelector('.currentNumber');
let prevnum=document.querySelector('.previousNumber');

let equal=document.querySelector('.Calculate');
equal.addEventListener('click',equate)

let clear=document.querySelector('.clear');
let operator="";

function handleNumber(num) {
    if(currnum.innerText=="0"){
        currnum.innerText=num;
        return
    }
    if(currnum.innerText.length>=7){
        return
    }
    let newnum = currnum.innerText + num;
    console.log(newnum)
    currnum.innerText = newnum;
}

function handleOperator(op) {
    operator=op
    num1=currnum.innerText
    prevnum.innerText=currnum.innerText + op
    currnum.innerText="0"
}

clear.addEventListener('click',clearbtn);


numbtn.forEach(function (btns) {
    btns.addEventListener('click',function (e) {    
    handleNumber(e.target.innerText);
})})

opbtn.forEach(function (btns) {
    btns.addEventListener('click',function (e) {    
    handleOperator(e.target.innerText);
})})

function clearbtn() {
    prevnum.innerText="";
    currnum.innerText="0";
    return
}
let sol;
let num1;
let num2;

function equate() {
    num1=Number(num1);
    console.log(num1)
    num2=Number(currnum.innerText)
    console.log(num2)
    if (operator==="+"){
        sol=num1+num2;
        console.log(sol);
        console.log("add");
    }
    else if (operator==="-"){
        sol=num1-num2;
        console.log("sub");
        console.log(sol);
    }
    else if (operator==="*"){
        sol=num1*num2;
    }
    else if (operator==="/"){
        if(num2==0){
            currnum.innerText="ERROR";
        }
        else {
            sol=num1/num2;
        }
    }
    currnum.innerText=sol.toString();
    prevnum.innerText="";
    operator="";
}