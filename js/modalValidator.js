$(document).on('ready', function () {
  let form = document.getElementById('form-contact-us');
  let modalInfo = document.getElementById('info-contact-us');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let data = new FormData(form);
    let chkval = `Don't `;
    if (data.get('chkboxpromotions')) {
      chkval = '';
    }
    if (validateForm()) {
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
      `;
      $('#exampleModal').modal('show');
    }
  });
});

function validateForm() {
  let firstName = $('#firstname').val().trim();
  let lastname = $('#lastname').val().trim();
  let email = $('#email').val().trim();
  let phonenumber = $('#phonenumber').val().trim();
  let emailtext = $('#emailtext').val().trim();

  const formContactUs = document.querySelector('#form-contact-us');
  formContactUs.innerHTML += '';

  let modalValidatorFirstName = showNotice(
    firstName,
    formContactUs,
    'First Name'
  );
  let modalValidatorLasttName = showNotice(
    lastname,
    formContactUs,
    'Last Name'
  );
  let modalValidatorEmail = showNotice(email, formContactUs, 'Email');
  let modalValidatorPhoneNumber = showNotice(
    phonenumber,
    formContactUs,
    'Phone Number'
  );
  let modalValidatorEmailText = showNotice(
    emailtext,
    formContactUs,
    'Email text'
  );
  showWarning($('.email'), formContactUs, 'Email');
  showWarning($('.phonenumber'), formContactUs, 'Phone Number');
  if (
    modalValidatorFirstName &&
    modalValidatorLasttName &&
    modalValidatorEmail &&
    modalValidatorPhoneNumber &&
    modalValidatorEmailText
  ) {
    if (
      $('.phonenumber').hasClass('has-success') &&
      $('.email').hasClass('has-success')
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function closeAlert(e) {
  $(e).parent().remove();
}

function showNotice(input, formContactUs, nameInput) {
  if (input.length <= 0) {
    formContactUs.innerHTML += `<div class="alert alert-danger" role="alert">
      Please fill in the field: ${nameInput}
      <button 
        id="iconCloseInfo"
        onclick="closeAlert(this)">
          <i class="fas fa-times"></i>
      </button>
    </div>`;
    return false;
  }
  return true;
}

function showWarning(input, formContactUs, nameInput) {
  if (input.hasClass('has-error')) {
    formContactUs.innerHTML += `<div class="alert alert-danger" role="alert">
      The field: '${nameInput}' has not the correct format
      <button 
        id="iconCloseInfo"
        onclick="closeAlert(this)">
          <i class="fas fa-times"></i>
      </button>
    </div>`;
    return false;
  }
}
