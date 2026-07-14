const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value="";
}

function deleteLast(){
    display.value=display.value.slice(0,-1);
}

function calculate(){

    try{

        if(display.value==="") return;

        display.value=eval(display.value);

    }

    catch{

        display.value="Error";

        setTimeout(()=>{
            display.value="";
        },1000);

    }

}

document.addEventListener("keydown",(e)=>{

    if("0123456789+-*/.%".includes(e.key)){
        appendValue(e.key);
    }

    if(e.key==="Enter"){
        e.preventDefault();
        calculate();
    }

    if(e.key==="Backspace"){
        deleteLast();
    }

    if(e.key==="Escape"){
        clearDisplay();
    }

});