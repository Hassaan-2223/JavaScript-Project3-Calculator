
const screen = document.getElementById("text");
const btnval=document.querySelectorAll("button");
let screenVal="";

for(items of btnval){
    items.addEventListener('click',(e) => {
        let Val = e.target.innerText;

        if(Val == '='){ 
            screen.value= eval(screenVal);
            screenVal="";

        }

        else if(Val == "C"){
            screen.value="";
            screenVal="";
        }

        else{
            screenVal+=Val;
            screen.value=screenVal;
        }
    });

    
}



// btnval.addEventListener("click",getval)

