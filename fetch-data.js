
async function fetchUserData() {
   let apiUrl = "https://jsonplaceholder.typicode.com/users";
   let dataContainer = document.getElementById("api-data");

  try {
    let response = await fetch(apiUrl);
    let users = await response.json();
    dataContainer.innerHTML = "";
    let userList = document.createElement("ul");

    users.forEach((user) => {
      let listItem = document.createElement("li");
      listItem.textContent = user.name; 
      userList.appendChild(listItem); 
    });
    dataContainer.appendChild(userList);
  } catch (error) {
dataContainer.innerHTML = "Failed to load user data.";
  }
}
document.addEventListener("DOMContentLoaded", fetchUserData);
