export class Registration{
    static create(newUser){
       return fetch('https://chatar-fastar-default-rtdb.firebaseio.com/users-data.json', {
           method: 'POST',
           body: JSON.stringify(newUser),
           headers: {
               'Content-Type': 'application/json'
           }
       }).then(response => response.json())
         .then(response => {
             console.log(response)
         })
    }
}