$(document).ready(function () {
  function createUserCards(data) {
    const userCards = $("#user-cards");
    userCards.empty();

    data.forEach(function (user) {
      const card = $("<div>").addClass("col-md-3");
      const cardContent = `
        <div class="card">
            <div class="circular-img">
                <img src="${user.imageURL}" class="card-img-top avatar" alt="Avatar">
            </div>
            <div class="card-body">
                <h5 class="card-title">${user.Name}</h5>
                <p class="card-text"><strong>Nickname:</strong> ${user.CodingNickname}</p>
                <p class="group-name">${user.Groupname}</p>
                <a href="${user.GitHubProfile}" target="_blank">
                    <i class="fab fa-github icon"></i> GitHub
                </a>
                <a href="${user.linkedin}" target="_blank">
                    <i class="fab fa-linkedin icon"></i> LinkedIn
                </a><br>
                <a href="mailto:${user.Email}" target="_blank">
                    <i class="fas fa-envelope icon"></i> Email
                </a>
                <div class="picked-marker" style="background-color: ${
                  user.picked ? "green" : "red"
                };"></div>
            </div>
        </div>
        `;
      card.html(cardContent);
      userCards.append(card);
    });
  }

  function loadAllUsers() {
    const url = 'https://yearupdemo.azurewebsites.net/api/users/';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.forEach(function (user) {
          user.picked = false;
        });
        createUserCards(data);

        $(".student-name-filter").on("input", function () {
          const studentNameFilter = $(this).val().toLowerCase();
          const filteredData = data.filter(function (user) {
            return user.name.toLowerCase().includes(studentNameFilter) ||
              user.nickname.toLowerCase().includes(studentNameFilter);
          });
          createUserCards(filteredData);
        });

        $(".group-name-filter").on("input", function () {
          const groupNameFilter = $(this).val();
          const filteredData = data.filter(function (user) {
            return user.group.toLowerCase().includes(groupNameFilter.toLowerCase());
          });
          createUserCards(filteredData);
        });

        const $randomFilterButton = $("#random-filter-button");
        const $studentNameInput = $("#studentNameInput");

        $randomFilterButton.on("click", function (event) {
          event.preventDefault();

          if (data.length === 0) {
            console.error("No data available.");
            return;
          }

          const randomObject = data[Math.floor(Math.random() * data.length)];
          const randomName = randomObject.name.toLowerCase();

          const filteredData = data.filter(function (user) {
            const userName = user.name.toLowerCase();
            const userNickname = user.nickname.toLowerCase();
            return userName.includes(randomName) || userNickname.includes(randomName);
          });

          $studentNameInput.val(randomObject.name);
          createUserCards(filteredData);
        });

      })
      .catch(error => console.error('Error fetching data:', error));
  }

  loadAllUsers();

  var uniqueGroups = [];
  $(".user-card").each(function () {
    var group = $(this).data("group");
    if (uniqueGroups.indexOf(group) === -1) {
      uniqueGroups.push(group);
    }
  });

  var groupFilter = $("#group-filter");
  $.each(uniqueGroups, function (index, group) {
    groupFilter.append(
      $("<option>", {
        value: group,
        text: group,
      })
    );
  });
});
