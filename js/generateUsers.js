document.addEventListener("DOMContentLoaded", function () {
    const userCardsContainer = document.getElementById("user-cards");
    const nameFilterInput = document.getElementById("nameFilter");
    const searchButton = document.getElementById("searchButton");

    function createUserCards(users) {
        userCardsContainer.innerHTML = ""; // Clear existing cards
        users.forEach(user => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-4";
            card.innerHTML = `
<div class="card">
    <img src="${user.imageurl}" class="card-img-top" alt="Profile image of ${user.name}">
    <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <p class="card-text">${user.group}</p>
        <p class="card-text"><strong>XP Points:</strong> ${user.xp}</p>
        <p class="card-text"><strong>Currently Working On:</strong> ${user.currentlyWorkingOn}</p>
        <a href="${user.github}" target="_blank" class="btn btn-primary">GitHub</a>
        <a href="${user.linkedin}" target="_blank" class="btn btn-secondary">LinkedIn</a>
    </div>
</div>
`;
            userCardsContainer.appendChild(card);
        });
    }

    function updateXP(students) {
        students.forEach(student => {
            let pageNumber = parseInt(student.currentlyWorkingOn);
            if (!isNaN(pageNumber)) {
                student.xp = pageNumber * 10;
            } else {
                student.xp = 0; // Default to 0 if not a valid number
            }
        });
    }
    
    function filterUsers() {
        const filterValue = nameFilterInput.value.toLowerCase();
        const filteredData = students.filter(student =>
            student.name.toLowerCase().includes(filterValue) ||
            student.nickname.toLowerCase().includes(filterValue) ||
            student.group.toLowerCase().includes(filterValue)
        );
        createUserCards(filteredData);
    }

    function pickRandomStudent() {
        if (students.length > 0) {
            const randomIndex = Math.floor(Math.random() * students.length);
            const randomStudent = students[randomIndex];
    
            // Clear existing cards and display only the randomly selected student
            userCardsContainer.innerHTML = ""; // Clear the container first
            const card = document.createElement("div");
            card.className = "col-md-4 mb-4";
            card.innerHTML = `
    <div class="card">
        <img src="${randomStudent.imageurl}" class="card-img-top" alt="Profile image of ${randomStudent.name}">
        <div class="card-body">
            <h5 class="card-title">${randomStudent.name}</h5>
            <p class="card-text">${randomStudent.group}</p>
            <p class="card-text"><strong>XP Points:</strong> ${randomStudent.xp}</p>
            <p class="card-text"><strong>Currently Working On:</strong> ${randomStudent.currentlyWorkingOn}</p>
            <a href="${randomStudent.github}" target="_blank" class="btn btn-primary">GitHub</a>
            <a href="${randomStudent.linkedin}" target="_blank" class="btn btn-secondary">LinkedIn</a>
        </div>
    </div>
    `;
            userCardsContainer.appendChild(card); // Append only the random student's card
        }
    }
    

    // Initially load all users
    createUserCards(students);

    // Add event listener to the search button
    searchButton.addEventListener("click", function () {
        filterUsers();  // Call filterUsers function on click
    });

    // Optionally, you can also trigger filtering with the Enter key
    nameFilterInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            filterUsers();
        }
    });

    // Adding a global reference to pickRandomStudent so it can be called from HTML
    window.pickRandomStudent = pickRandomStudent;
});
