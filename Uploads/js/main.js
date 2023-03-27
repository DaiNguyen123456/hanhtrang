window.onscroll =function(e){
    var scroll =window.pageYOffset;
    
    if(scroll>document.getElementById("header").offsetHeight){
        document.getElementById("navigation").classList.add("fixed-top")
    }
    else{
        document.getElementById("navigation").classList.remove("fixed-top")
    }
}



