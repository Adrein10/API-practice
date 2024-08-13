async function fetchdata(){
   var data = await fetch('https://fakestoreapi.com/products/')

   console.log(data.json())
   
}