const _nightStay = Number(document.getElementById('amountOfNights').value);


let userInfo = {
    nightStay: _nightStay,
    roomtype: 'Queen'
}

let userKing = {
    nightStay: _nightStay,
    roomtype: 'King'
}

function displayInfo(userInfo) {
    console.log(`The user chooses a ${userInfo.roomtype} room and he will stay for ${userInfo.nightStay}`  )
}

displayInfo(userKing);


function test(_user) {
    return _user;
}