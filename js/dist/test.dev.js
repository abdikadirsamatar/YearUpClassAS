"use strict";

var _nightStay = Number(document.getElementById('amountOfNights').value);

var userInfo = {
  nightStay: _nightStay,
  roomtype: 'Queen'
};
var userKing = {
  nightStay: _nightStay,
  roomtype: 'King'
};

function displayInfo(userInfo) {
  console.log("The user chooses a ".concat(userInfo.roomtype, " room and he will stay for ").concat(userInfo.nightStay));
}

displayInfo(userKing);

function test(_user) {
  return _user;
}