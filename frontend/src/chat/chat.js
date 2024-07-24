
// connecting websocket to backend server
const socket = new WebSocket(`ws://localhost:8000`);


//* this is for check to user authorised or not
const checkedAuthorised = () => {
    // getting user data from loclal storage 
    const user = JSON.parse(localStorage.getItem('user'));
  
    if(!user) {
        console.log('Not authorised');
        window.location.href='index.html'
        return;
    }
    //* established a new connection 
     socket.onopen = () => {
        console.log('WebSocket connection established'); 
      }

        document.getElementById('sendButton').addEventListener('click', () => {
          const messageInput = document.getElementById('messageInput');
          messageInput.classList = 'recieved'
          const message = messageInput.value;
          socket.send(JSON.stringify({
            userName: user.user.username,
            message
          }));
        console.log(user.username);
          messageInput.value = '';  // Clear the input field
        });
      
    
//* sending message to all connected users
      socket.onmessage = (event) => {
          const recivedData = JSON.parse(event.data)
          console.log('Received:', recivedData);
        // Display received messages
        const messagesList = document.getElementById('messagesList');
        const messageItem = document.createElement('li');
        
        const messageTimeStamps = document.createElement('span');
       messageItem.textContent = recivedData.message;
  
        messageTimeStamps.textContent = `${recivedData.username} | ${recivedData.timeStamp}`
        messageItem.appendChild(messageTimeStamps);
        messagesList.appendChild(messageItem);
      };
      //* closing connection
      socket.onclose = () => {
        console.log('WebSocket connection closed');
      };

      socket.onerror = (error) => {
        console.err
      }

      messageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          sendButton.click();
        }
      });

  }


const logOutButton = document.getElementById('logoutButton')

//! Something wrong in logout feature its working fine on postman but not on ui, i am working on it. 
logOutButton.addEventListener('click', async () => {

  try {
    const response = await fetch('http://localhost:8000/api/v1/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    
    // if (!response.ok) {
    //     const errorText = await response.text(); // Get the error message from the response
    //     throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    // }

    localStorage.clear();
    window.location.href = "../index.html";
} catch (error) {
    // Log the error details
    console.error('Error during logout:', error.message || error);
    // Optionally, log the entire error object for more details
    console.error('Full error object:', error);
}
});

checkedAuthorised()