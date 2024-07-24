const form = document.querySelector('.form');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    authenticateAndConnect();
})

//* authenticating user 
async function authenticateAndConnect() {
   
    // Authenticate and get the token
    const formData = new FormData(form)
    const email = formData.get('email');
    const password = formData.get('password');
    if(!email ) {
      alert("Email is required")
      return;
    }
    if(!password ) {
      alert("Password is required")
      return
    }
    showLoader()
    const response = await fetch('http://localhost:8000/api/v1/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username: email,password:password})  // Adjust to your authentication needs
    });
    
    hideLoader();
    const data = await response.json();
 
    if (response.status !== 200) {
      console.error('Failed to authenticate:');
      return;
    }
    loginDetailsInLocalStorage(data);
    if(data) {
        window.location.href= './chat/chat.html'
    }
    // Establish WebSocket connection
      }
  

//* method for setting user data into localstorage
  function loginDetailsInLocalStorage(data) {
        
        localStorage.clear();
        localStorage.setItem('user',JSON.stringify(data.data));
  }

  function showLoader() {
    loader.classList.remove('hidden');
  }

  function hideLoader() {
    loader.classList.add('hidden');
  }