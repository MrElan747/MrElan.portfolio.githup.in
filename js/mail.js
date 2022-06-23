var btn = document.getElementById('btn');
btn.addEventListener( 'click', function(e) {
    e.preventDefault()
    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value; 
    var role = document.getElementById('role').value; 
    var phone = document.getElementById('phone').value; 
    var file = document.getElementById('file').value; 

    var body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> Role: ' + role + '<br/> Mobile No: ' + phone + '<br/> Documents: ' + file;


    email.send({
        Host : "smtp.gmail.com",
        Username : "mrelan.official@gmail.com",
        Password : "hybhiwubjwdyrsfw",
        To : 'mrelan.official@gmail.com',
        From : email,
        Subject : "Order Request Mail",
        Body : body
    }).then(
      message => alert(message)
    );
})