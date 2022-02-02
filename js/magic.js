function myFirstFunction(){
    console.log("Thank you for your click.");

    var div = document.getElementById("my_div");
    div.classList.add("my_class");
    console.log(div);

    var div = document.getElementsByTagName("div");
    console.log(div);

    var second_div = document.querySelector("#my_second_div");
    console.log(second_div);

    console.log($("#my_third_div"));
}

function mySecondFunction(){
    console.log("Thank you for your interest.");
}

function $(selector){
    return document.querySelectorAll(selector);
}

