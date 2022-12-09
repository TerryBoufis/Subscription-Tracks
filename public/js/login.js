const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(email && password) {
        const res = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (res.ok) {
            document.location.replace('subscription');
        } else {
            alert(res.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (email && password) {
        const res = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: { 'content-Type': 'applicatoin/json' },
        });

        if(res.ok) {
            document.location.replace('/');
        } else {
            alert(res.statusText)
        }
    }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);