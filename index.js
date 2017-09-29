function myAnimate(){
    document.getElementById("myPic").removeEventListener("onclick",myAnimate);
    var arr = document.getElementsByClassName("hidden");
    for (var i=0;i<arr.length;i++){
        arr[i].className += " show";
    }
    document.getElementById("myPic").className += " shrinked";
    document.getElementById("photodiv").className += " showbg";
}