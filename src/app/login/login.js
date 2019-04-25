const loginView = require('./login.hbs');

export let Login = {
    render: async () => {
        return loginView();
    },
    after_render: async () => {
        // basic validation
        document.getElementById('login_submit_btn').addEventListener ('click',  () => {
            let email = document.getElementById('login_email');
            let pass = document.getElementById('login_pass');

            if (email.value =='' | pass.value == '' ) {
                alert ('The fields cannot be empty');
            } 
            else {
                alert(`User with email ${email.value} was successfully submitted!`);
            }    
        });

        const inputFields = document.getElementsByClassName('input-field');
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