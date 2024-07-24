
const form = document.querySelector(".form")

// submit event listener 
form.addEventListener('submit', (e) => {
    e.preventDefault()
    regsiterUser();
});
// * register a new user 

    const regsiterUser = async () => {
    const formData = new FormData(form);
    
    const email = formData.get('email')
    const password = formData.get('password');
    const username = formData.get('username');
    // simple validation 
    if(!username ) {
      alert("Username is required")
      return
    }
    if(!email ) {
        alert("Email is required")
        return;
      }
      if(!password ) {
        alert("Password is required")
        return
      }

    // register user 
    const response = await fetch('http://localhost:8000/api/v1/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username: username,email: email,password:password})  // Adjust to your authentication needs
    });
    
    const data = await response.json();
    
    if (response.status !== 200) {
      console.error('Failed to authenticate:');
      return;
    }

    alert("user register successfully");

    // if successfullt fetch data form user then rdirect to logi page 
    if(data) {
        window.location.href= '../index.html'
    }
    }
  