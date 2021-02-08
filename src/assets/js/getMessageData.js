let indexOfLastMsg = 0;

export class HandlingMessage{
    static getMessage(){
        return fetch('https://chatar-fastar-default-rtdb.firebaseio.com/message-data.json', {
            method: 'GET',
        }).then(response => response.json())
            .then(response => {
                let arrDatabaseMsg = [];
                for(let i in response){
                    arrDatabaseMsg.push(response[i]);
                }
                checkNewMessage(arrDatabaseMsg);
            })
    }
}

function checkNewMessage(arrDatabaseMsg) {
    if(indexOfLastMsg == 0){
        indexOfLastMsg = arrDatabaseMsg.length;
        drawNewMessage(arrDatabaseMsg)
    }else {

        let arrOfNewMsg = [];
        //let countMsg = arrDatabaseMsg.length - indexOfLastMsg;
        arrOfNewMsg = arrDatabaseMsg.slice(indexOfLastMsg);
        console.log(arrOfNewMsg);
        indexOfLastMsg = arrDatabaseMsg.length;
        drawNewMessage(arrOfNewMsg);
    }
}

function drawNewMessage(arrOfNewMsg) {
    for(let i in arrOfNewMsg){
        let objectMsg = arrOfNewMsg[i];

        var userDataName = objectMsg.name;
        var userDataMsg = objectMsg.message;
        
        const chatWin = document.getElementById('chatMsg');
        let chatUser = document.createElement('div');
        let newHName = document.createElement('h3');
        let newPMsg = document.createElement('p');
    
        chatWin.appendChild(chatUser).classList.add('chat__user');
        chatUser.appendChild(newHName).classList.add('chat__user-name');
        chatUser.appendChild(newPMsg).classList.add('chat__user-message');
    
        newHName.innerHTML = `${userDataName}`;
        newPMsg.innerHTML = `${userDataMsg}`;
    }
}