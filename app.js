//Enter your code here..
let result = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        return res.json();
        //console.log(res.json());
    });

async function userList() {
    try {
        let data = await result;
        console.log(data);

        addHeading();
        displayList(data);
    } catch (error) {
        console.log("Error : " + error);
    }
}

function addHeading() {
    let heading = document.createElement('h2');
    heading.innerText = "List Of Users";
    let bd = document.getElementById('body');
    let msg = document.getElementById("message");
    bd.insertBefore(heading, msg);
}

function displayList(data) {
    data.forEach(user => {
        let box = document.createElement('div');
        box.setAttribute("class", "player");

        let name = document.createElement('div');
        name.setAttribute("class", "strength");
        name.innerText = "Name : " + user.name;

        let email = document.createElement('div');
        email.innerText = "Email : " + user.email;

        let phone = document.createElement('div');
        phone.innerText = "Phone : " + user.phone;

        let website = document.createElement('div');
        website.innerText = "Website : " + user.website;

        let company = document.createElement('div');
        company.innerText = "Company : " + user.company.name;

        let city = document.createElement('div');
        city.innerText = "City : " + user.address.city;

        let zipcode = document.createElement('div');
        zipcode.innerText = "ZipCode : " + user.address.zipcode;

        box.appendChild(name);
        box.appendChild(email);
        box.appendChild(phone);
        box.appendChild(website);
        box.appendChild(company);
        box.appendChild(city);
        box.appendChild(zipcode);

        document.getElementById("message").appendChild(box);
    });
}