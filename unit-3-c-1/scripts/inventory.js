let array=JSON.parse(localStorage.getItem("products"))|| [];
sepratefunction(array);

function sepratefunction(data){
    data.forEach(function(elem,index){
        let box=document.createElement("div");

        let p1=document.createElement("p");
        p1.innerText=elem.type;

        let p2=document.createElement("p");
        p2.innerText=elem.desc;

        let p3=document.createElement("p")
        p3.innerText=elem.price;

        let i=document.createElement("img");
        i.setAttribute("src",elem.image);

        let five=document.createElement("button");
        five.setAttribute("id","remove_product");
        five.innerHTML="Remove";
        five.addEventListener("click",function(){
            deletefun(elem,index);
        })
        box.append(i,p1,p2,p3,five);

        document.querySelector("#all_products").append(box)
    })
} 

function deletefun(elem,index){
    array.splice(index,1)
    localStorage.setItem("products",JSON.stringify(array));
    window.location.reload();
}