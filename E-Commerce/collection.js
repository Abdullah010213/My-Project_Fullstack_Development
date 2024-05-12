var prodectContainer = document.getElementById("prodect");
var search = document.getElementById("search");
var prodectList = prodectContainer.querySelectorAll("div");

search.addEventListener("keyup",function(){
    var entervalue = event.target.value.toUpperCase();

    for(i = 0; i < prodectList.length; i++){

        var prodectname = prodectList[i].querySelector("p").textContent;

        if(prodectname.toUpperCase().indexOf(entervalue) < 0){
            prodectList[i].style.display = "none"
        }else{
            prodectList[i].style.display = "block"
        }
    }
})