// On clicking remove button the item should be removed from DOM as well as localstorage.


let coffee1=JSON.parse(localStorage.getItem("coffee"))||[];

console.log(coffee1);
display(coffee1)

function display(coffee1){
    document.getElementById("bucket").innerHTML="";
    coffee1.forEach(function(ele,index){

    
     let div1 = document.createElement("div")
    let buc = document.getElementById("bucket");

    let image = document.createElement("img");
    image.src=ele.image
    image.style.width="150px";
    image.style.height="150px"
    // let h22 =document.getElementById("total_amount")
    // h22.innerText=add(sum)
   let h1 = document.createElement("h1");
   h1.innerText=ele.title

   let price = document.createElement("h2");
   price.innerText=ele.price

   let btn = document.createElement("button")
   btn.innerText="REMOVE"
   btn.addEventListener("click",function(){
        coffee1.splice(index,1)
         display(coffee1)
   })

   div1.append(image,h1,price,btn);
   buc.append(div1)
})
}

display(coffee1)

function add(sum){
    let total = coffee1.reduce(function(sum,ele){
        return sum+ele.price;
    },0)
    return total;
}
