async function myapi(){
    var api = await fetch('https://66c07bf0ba6f27ca9a56ca23.mockapi.io/mypractice/users');
    var data = await api.json();
    tolist(data);
    console.log(data);
}

myapi();

function tolist(fetchdata){
    fetchdata.forEach(myapi => {
        // Create table row and cells
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        // Add data to cells    
        var tbody = document.getElementById("usertolist")
        tbody.append(tr);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        // Add values to each row
        td1.innerText = myapi.id || 'N/A';
        td2.innerText = myapi.Name || 'N/A';
        td3.innerText = myapi.Email || 'N/A';
        td4.innerHTML = myapi.Password || 'N/A';
    });
}