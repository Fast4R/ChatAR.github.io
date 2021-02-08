import {Registration} from './registration';

export function isRegValid(name, password, passwordConf){
    return name.length >= 3 && name.length <= 10
           && password.length >= 6 && password.length <= 15
           && passwordConf == password;
}

export function isLogValid(name, password){
    return name.length >= 3 && name.length <= 10
    && password.length >= 6 && password.length <= 15
}

export function checkUserExistence(upName, passConf, newUser){
    fetch('https://chatar-fastar-default-rtdb.firebaseio.com/users-data.json', {
        method: 'GET',
    }).then(response => response.json())
      .then(response =>{
        
        for(const i in response){  
            let objectUserData = response[i];
              
            if(objectUserData.name == upName.value){
                alert('Such a user already exists!');
                return false;
            }
        }
        Registration.create(newUser, upName)
        .then(() => {
            upName.value = '';
            upPass.value = '';
            passConf.value = '';
        });
    });
}