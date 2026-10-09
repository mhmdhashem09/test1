display=document.getElementById("input")
result=document.getElementById("display")
    function atd(x){
        display.innerHTML+=x
    }
    function eql(){
        try{
            result.innerHTML=eval(display.innerHTML);
        }
        catch(error){
            display.innerHTML="Error"
        }
    }
    function clears(){
        result.innerHTML="0";
        display.innerHTML="";
    }
    function del(){
        display.innerHTML=display.innerHTML.substring(0, display.innerHTML.length-1);
    }