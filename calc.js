let result = document.getElementById("inputext");


let calculate=(number)=>{
    result.value+=number
}

let Result=()=>{
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("Enter the valid input");
    }
}

function clr(){
    result.value = " ";
}

function del(){
    // deletes the last value;
    result.value = result.value.slice(0,-1)
}