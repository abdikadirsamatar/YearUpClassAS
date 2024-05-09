"use strict";

$(document).ready(function () {
  function createUserCards(data) {
    var userCards = $("#user-cards");
    userCards.empty();
    data.forEach(function (user) {
      var card = $("<div>").addClass("col-md-3");
      var cardContent = "\n        <div class=\"card\">\n            <div class=\"circular-img\">\n                <img src=\"".concat(user.imageURL, "\" class=\"card-img-top avatar\" alt=\"Avatar\">\n            </div>\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(user.Name, "</h5>\n                <p class=\"card-text\"><strong>Nickname:</strong> ").concat(user.CodingNickname, "</p>\n                <p class=\"group-name\">").concat(user.Groupname, "</p>\n                <a href=\"").concat(user.GitHubProfile, "\" target=\"_blank\">\n                    <i class=\"fab fa-github icon\"></i> GitHub\n                </a>\n                <a href=\"").concat(user.linkedin, "\" target=\"_blank\">\n                    <i class=\"fab fa-linkedin icon\"></i> LinkedIn\n                </a><br>\n                <a href=\"mailto:").concat(user.Email, "\" target=\"_blank\">\n                    <i class=\"fas fa-envelope icon\"></i> Email\n                </a>\n                <div class=\"picked-marker\" style=\"background-color: ").concat(user.picked ? "green" : "red", ";\"></div>\n            </div>\n        </div>\n        ");
      card.html(cardContent);
      userCards.append(card);
    });
  }

  function loadAllUsers() {
    var url = 'https://yearupdemo.azurewebsites.net/api/users/';
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      data.forEach(function (user) {
        user.picked = false;
      });
      createUserCards(data);
      $(".student-name-filter").on("input", function () {
        var studentNameFilter = $(this).val().toLowerCase();
        var filteredData = data.filter(function (user) {
          return user.name.toLowerCase().includes(studentNameFilter) || user.nickname.toLowerCase().includes(studentNameFilter);
        });
        createUserCards(filteredData);
      });
      $(".group-name-filter").on("input", function () {
        var groupNameFilter = $(this).val();
        var filteredData = data.filter(function (user) {
          return user.group.toLowerCase().includes(groupNameFilter.toLowerCase());
        });
        createUserCards(filteredData);
      });
      var $randomFilterButton = $("#random-filter-button");
      var $studentNameInput = $("#studentNameInput");
      $randomFilterButton.on("click", function (event) {
        event.preventDefault();

        if (data.length === 0) {
          console.error("No data available.");
          return;
        }

        var randomObject = data[Math.floor(Math.random() * data.length)];
        var randomName = randomObject.name.toLowerCase();
        var filteredData = data.filter(function (user) {
          var userName = user.name.toLowerCase();
          var userNickname = user.nickname.toLowerCase();
          return userName.includes(randomName) || userNickname.includes(randomName);
        });
        $studentNameInput.val(randomObject.name);
        createUserCards(filteredData);
      });
    })["catch"](function (error) {
      return console.error('Error fetching data:', error);
    });
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
    groupFilter.append($("<option>", {
      value: group,
      text: group
    }));
  });
});