var products;

async function fetchdata(){
   var data = await fetch('https://fakestoreapi.com/products/');

  products = await data.json();
 console.log(products);
product_cart(products);
   
}





function product_cart(apidata){

console.log(apidata.length)
for(var i = 0;i <= apidata.length - 1; i++){

   // create element
   var tr = document.createElement('tr');
   tr.className = "table"
   var td1 = document.createElement('td');
   var td2 = document.createElement('td');
   var td3 = document.createElement('td');
   var td4 = document.createElement('td');
   var td5 = document.createElement('td');
   var td6 = document.createElement('td');
   var image = document.createElement('img');
   image.height = 80;
   image.width = 80;
   var td7 = document.createElement('td');
   var btn = document.createElement('button');
   btn.className = "btn btn-success";
   btn.innerText='Update';
   var btn2 = document.createElement('button');
   btn2.className = "btn btn-danger";
   btn2.innerText='Delete';

   // inserting element inside element
   var table = document.getElementById("mydata");
   table.append(tr);
   tr.append(td1);
   tr.append(td2);
   tr.append(td3);
   tr.append(td4);
   tr.append(td5);
   tr.append(td6);
   td6.append(image);
   tr.append(td7);
   td7.append(btn);
   td7.append(btn2);

   // setting data to each cell
   td1.innerText = apidata[i].id;
   td2.innerText = apidata[i].title;
   td3.innerText = apidata[i].price;
   td4.innerText = apidata[i].description;
   td5.innerText = apidata[i].category;
   image.src = apidata[i].image;
}
}
