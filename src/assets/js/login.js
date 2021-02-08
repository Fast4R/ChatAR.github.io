export class Login{
    static getUserData(inName, inPass, sign, chat){
        return fetch('https://chatar-fastar-default-rtdb.firebaseio.com/users-data.json', {
            method: 'GET',
        }).then(response => response.json())
        .then(response => {

            for(const i in response){
                let objectUserData = response[i];
                  
                if(inName.value == objectUserData.name && 
                    inPass.value == objectUserData.password){
                        sign.classList.add('hidden__sign');
                        chat.classList.add('show__chat');
                    }
                     //Try catch
                }
          });
    }
}