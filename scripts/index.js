// Add the coffee to local storage with key "coffee"


async function getcoffee(){
    
    let url ="https://masai-mock-api.herokuapp.com/coffee/menu";
    let res = await fetch(url)
     
    let data = await res.json()
    append(data.menu.data)
    // console.log(data.menu.data)
}
getcoffee();


async function append(data){
     
    let newdata=await data;
    if(newdata==undefined)
    {
        return false
    }
    else{
        
         newdata.forEach(function(ele){

            let div = document.createElement("div")
            let card = document.getElementById("menu");
    
             
    let image = document.createElement("img");
     image.src=ele.image
     image.style.width="150px";
     image.style.height="150px"

    let h1 = document.createElement("h1");
    h1.innerText=ele.title

    let price = document.createElement("h2");
    price.innerText=ele.price

    let btn = document.createElement("button")
    btn.innerText="Add to bucket"
    btn.addEventListener("click",function(){
        addtobuck(ele);
      
    })


    div.append(image,h1,price,btn)
    card.append(div)

 })

    }
    let coffee1 = JSON.parse(localStorage.getItem("coffee"))||[];
    let count=0;

    function addtobuck(ele){
         
        let ct= document.getElementById("coffee_count");
        ct.innerText="";
        
        count++
        let h1=document.createElement("h1");
        h1.innerText=count
        ct.append(h1)
        console.log(ele)
        coffee1.push(ele);
        localStorage.setItem("coffee",JSON.stringify(coffee1))
         
       
        
         
       
    }
   
}
 
