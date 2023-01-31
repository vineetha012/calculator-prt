
const result=document.querySelector(".result")
function displayValue(value){
    result.value+=value
}

function calculateValue(){
    let display_content=result.value
    try{
        if(result.value==""){
            console.log("empty")
        }else{
            result.value=eval(display_content)
        }
       
    }
    catch{
        result.value="ERROR";
    }
   // result.innerText=eval(display_content)
}
function removeLastValue(){
    let arr=Array.from(result.value)
    arr.pop()
    result.value=arr.join("")
    console.log(result.value)
}
function clearAll(){
    result.value=""
}

