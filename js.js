const scriptURL = 'https://script.google.com/macros/s/AKfycbxWBHQ1h0oaHanjzArHQ1qEiMIogJIjC5fXxai6zOsqzZKD2MPgZCqeEGT1JDl4f7A-PA/exec'
const form = document.forms['submit-to-google-sheet'];
const msg=document.getElementById('msg');


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML='Thanks for subscribing!'
        setTimeout(() => {
            msg.innerHTML=''
        }, 5000);
form.reset();
        })
    .catch(error => console.error('Error!', error.message))
})
