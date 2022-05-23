//store the products array in localstorage as "products"
document.querySelector("form").addEventListener("submit",myfunction);

function Efat(one,two,three,four){
    this.type=one;
    this.desc=two;
    this.price=three;
    this.image=four;
    
}


function myfunction(){
    event.preventDefault();
    
    
    let type=products.type.value;
    let desc=products.desc.value;
    let price=products.price.value;
    let image=products.image.value;
    let output=new Efat(type,desc,price,image);

    let array=JSON.parse(localStorage.getItem("products")) || [];
    array.push(output);
    localStorage.setItem("products",JSON.stringify(array));
    window.location.reload();


}