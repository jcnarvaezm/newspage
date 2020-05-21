$(document).on('ready',function(){
  let form = document.getElementById('form-contact-us')
  let modalInfo = document.getElementById('info-contact-us')

  form.addEventListener('submit',function(e){
    e.preventDefault()
    let data = new FormData(form)
    let chkval = `Don't `
    if(data.get('chkboxpromotions')){
      chkval = ''
    }
    if(validateForm()){
      modalInfo.innerHTML = `
      <p>
        <b>First Name: </b>
        ${data.get('firstname')}
      </p>
      <p>
        <b>last Name: </b>
        ${data.get('lastname')}
      </p>
      <p>
        <b>Phone Number: </b>
        ${data.get('phonenumber')}
      </p>
      <p>
        <b>Email: </b>
        ${data.get('email')}
      </p>
      <p>
        <b>Email Body: </b>
        ${data.get('emailtext')}
      </p>
      <p>
        <b>${chkval} send me emails about breaking news and promotions </b>
      </p>
      `
      $('#exampleModal').modal('show')
    }
    console.log(data)
  })
})

function validateForm() {
  let firstName = $('#firstname').val()
  let lastname = $('#lastname').val()
  let email = $('#email').val()
  let phonenumber = $('#phonenumber').val()
  let emailtext = $('#emailtext').val()
  if(firstName !== '' && 
      lastname !== '' && 
      email !== '' && 
      phonenumber !== '' && 
      emailtext !== ''){
        if($('.phonenumber').hasClass('has-success') && $('.email').hasClass('has-success')){
          return true
        }else{
          return true
        }
  }else{
    return true
  }
}
