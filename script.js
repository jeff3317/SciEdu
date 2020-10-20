function myFunction(){
    var name = prompt("hello user, what is your name??", "doe");
    var msg;
    var date = new Date();
    var hour = date.getHours();

    if (hour<12){
        msg = "hello "+name+" Good morning";
        document.getElementById("name").innerHTML=msg;

    }

    else if (hour>12 && hour<16){
        msg = "hello "+name+" good afternoon";
        document.getElementById("name").innerHTML=msg;
    }

    else if (hour>16 && hour<23){
        msg = "hello" +name+" good evening";
        document.getElementById("name").innerHTML=msg;
    }


    else{
        msg = "Greetings of the day"
        document.getElementById("name").innerHTML=msg;
    }




}