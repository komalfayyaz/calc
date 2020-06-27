function getNumber(num){
   
    var result = document.getElementById("result")
    result.value += num;
    }
    
    function getResult(){
        var result = document.getElementById("result")
        result.value=eval(result.value)
    }
    function clearResult(){
        var result = document.getElementById("result")
        result.value=""
    
    }

    