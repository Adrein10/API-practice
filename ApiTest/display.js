var alertform = document.getElementById("formalert");

alertform ?

    (alertform.style.display = 'none') : ""

async function myapi() {
    var api = await fetch('https://66c07bf0ba6f27ca9a56ca23.mockapi.io/mypractice/users');
    var data = await api.json();
    tolist(data);
    console.log(data);
}

myapi();

function tolist(fetchdata) {
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
        btn1.href = `Edit.html?basit=${myapi.id}`;
        btn1.id = "editbtn"
        btn1.onclick = function () {
            edituser(myapi.id);
        }
        var btn2 = document.createElement('a');
        btn2.innerText = 'Delete';
        btn2.className = "btn btn-danger";
        btn2.id = "deletebtn";
        btn2.onclick = function () {
            deleteUser(myapi.id);
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
    console.log(userid);
    const response = await fetch(`https://66c07bf0ba6f27ca9a56ca23.mockapi.io/mypractice/users/${userid}`, {
        method: 'DELETE',
    });
    window.location.href = "display.html";

}

async function updateRecordGet(){
    var search = new URLSearchParams(window.location.search);



    var valuesss = search.get('basit');
    const users = await fetch(`https://66c07bf0ba6f27ca9a56ca23.mockapi.io/mypractice/users/${valuesss}`);

  const userdata = users.json();

console.log(userdata);
    var name = document.getElementById('Uname');
    name.value = userdata.Name;
    var email = document.getElementById('Uemail');
    email.value = userdata.Email;
    var password = document.getElementById('Upassword');
    password.value = userdata.Password;

}



async function edituser() {
    var search = new URLSearchParams(window.location.search);



    var valuesss = search.get('basit');
    const users = await fetch(`https://66c07bf0ba6f27ca9a56ca23.mockapi.io/mypractice/users/${valuesss}`);

    console.log(users.json());


    var name = document.getElementById('Uname').value;
    name.value = users.Name;
    var email = document.getElementById('Uemail').value;
    email.value = users.Email;
    var password = document.getElementById('Upassword').value;
    password.value = users.Password;



    const response = await fetch(`https://66c07bf0ba6f27ca9a56ca23.mockapi.io/mypractice/users/${valuesss}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Name: name,
            Email: email,
            Password: password,
        }),
    });
    window.location.href = "display.html";
}

// create user


async function create() {
    var studentname = document.getElementById("name").value;
    var studentemail = document.getElementById("email").value;
    var studentpassword = document.getElementById("password").value;

    if (studentemail == "" || studentpassword == "" || studentname == "") {
        alertform.style.display = 'block';
        alertform.className = 'alert alert-danger'
        alertform.innerHTML = "All fields are required";
    } else {
        const newuser = {
            Name: studentname,
            Email: studentemail,
            Password: studentpassword,
        };

        try {
            const response = await fetch('https://66c07bf0ba6f27ca9a56ca23.mockapi.io/mypractice/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newuser),
            });
            const data = await response.json();
            console.log(data);
            alertform.style.display = 'block';
            alertform.className = 'alert alert-success'
            alertform.innerHTML = "User created successfully";
        } catch (error) {
            console.error('Error:', error);
            alertform.style.display = 'block';
            alertform.className = 'alert alert-danger'
            alertform.innerHTML = "Error creating user";
        }
    }
    window.location.href = "display.html";
}
