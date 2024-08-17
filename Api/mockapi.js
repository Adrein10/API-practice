async function fetchdata(){
    var data = await fetch('https://66c07bf0ba6f27ca9a56ca23.mockapi.io/mypractice/users');
    var user = await data.json();
    console.log(user);
    tolist(user);
}
fetchdata();
function tolist(data){

    data.forEach(user => {
        var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var btn1 = document.createElement('button');
    btn1.className = "btn btn-primary"
    btn1.innerHTML = "update";
    var btn2 = document.createElement('button');
    btn2.className = "btn btn-danger"
    btn2.innerHTML = "delete";
    var table = document.getElementById("mydata");
    
    table.append(tr);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    td4.append(btn1);
    td4.append(btn2);


    td1.innerHTML = user.id;
    td2.innerHTML = user.Name;
    td3.innerHTML = user.Email;



    });
    

}
tolist()