    document.getElementById("link").style.display="none";

    function details(){
    document.getElementById("link").style.display="block";

    };
    document.getElementById("slide-secound").style.display="none";
    document.getElementById("slide-third").style.display="none";

    function history(){
    document.getElementById("slide-one").style.display="block";
    document.getElementById("slide-secound").style.display="none";
    document.getElementById("slide-third").style.display="none";
    };
    function history1(){
    document.getElementById("slide-one").style.display="none";
    document.getElementById("slide-secound").style.display="block";
    document.getElementById("slide-third").style.display="none";
    };
    function history2(){
    document.getElementById("slide-one").style.display="none";
    document.getElementById("slide-secound").style.display="none";
    document.getElementById("slide-third").style.display="block";
    };

    function myFunction() {
    var rate = document.getElementById("id1");
    if (!rate.checkValidity()) {
        
        document.getElementById("demo").innerHTML =  "Rating must be between 0 and 5";
       
    } else {
       
        document.getElementById("demo").innerHTML = "thanks";
      
    } 
    } ;

    
    function myFunction1(){
        var x=01019779613;
    var y = document.getElementById("id2");
        if(y=x){
        document.getElementById("demo1").innerHTML = "thanks";
        } else {
        document.getElementById("demo1").innerHTML = "sorry";
        }
        
    }
  