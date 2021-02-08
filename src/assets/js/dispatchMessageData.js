export class DispatchMessage{
    static dispatch(newMessage){
        return fetch('https://chatar-fastar-default-rtdb.firebaseio.com/message-data.json',{
            method: 'POST',
            body: JSON.stringify(newMessage),
        })
        .then(response => response.json());
    }
}