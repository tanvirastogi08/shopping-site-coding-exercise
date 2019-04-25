const signupView = require('./signup.hbs');

export const Signup = {
    render: async () => {
        return signupView();
    },
    after_render: async () => {
        // some basic validation
        document.getElementById('signup_submit_btn').addEventListener('click', () => {
            const email = document.getElementById('signup_email');
            const pass = document.getElementById('signup_pass');
            const conpass = document.getElementById('signup_conpass');
            const firstName = document.getElementById('signup_firstName');

            if (pass.value !== conpass.value) {
                alert('The password do not match!');
            } else if (email.value === '' || firstName.value === '') {
                alert('Email or FirstName cannot be empty!');
            }
        });

        const inputFields = document.getElementsByClassName('input-field')
        for(let i=0; i< inputFields.length; i++) {
            inputFields[i].addEventListener('blur', (el) => {
                const value = el.target.value;
                if(value !== '') {
                    el.target.classList.add('has-val');
                }
                else {
                    el.target.classList.remove('has-val');
                }
            })
        }
    }
}