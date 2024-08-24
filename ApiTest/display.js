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
        var td5 = document.createElement('td');
        var btn1 = document.createElement('a');
        btn1.innerText = 'Edit';
        btn1.className = "btn btn-success";
        btn1.id = "editbtn"
        btn1.onclick = function(){
            edituser(myapi.id);
        }
        var btn2 = document.createElement('a');
        btn2.innerText = 'Delete';
        btn2.className = "btn btn-danger";
        btn2.id = "deletebtn";
        btn2.onclick = function(){
            deleteuser(myapi.id);
        }


        // Add data to cells    
        var tbody = document.getElementById("usertolist")
        tbody.append(tr);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        td5.append(btn1);
        td5.append(btn2);


        // Add values to each row
        td1.innerText = myapi.id || 'N/A';
        td2.innerText = myapi.Name || 'N/A';
        td3.innerText = myapi.Email || 'N/A';
        td4.innerHTML = myapi.Password || 'N/A';
    });
}
async function deleteUser(userid) {
    const response = await fetch('https://66c07bf0ba6f27ca9a56ca23.mockapi.io/mypractice/users');
    const records = await response.json();
    const updatedRecords = records.filter(item => item.id == userid);
    console.log(updatedRecords);
    // If you want to update the records on the server, you'll need to make a PUT request
  }
function edituser(userid){
    alert(`${userid} edited successfully`);
}