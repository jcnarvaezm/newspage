
function validate(input) {
  var val = document.getElementById(input).value;
  switch (input){
    case "phonenumber":
      if (notNullOrSpace(input,val)){
        if ((/^([0-9]{10})$/.test(val))) {
          addCssSuccess(input)
        }else{
          if (!(/^3/.test(val))) {
            addCssError(input)
          } else if (val.length > 10) {
            addCssError(input)
          } else if (val.length < 10) {
            addCssError(input)
          } else {
            addCssError(input)
          }
        }
      }else{
        addCssError(input)
      }
      break
    case "email":
      if (notNullOrSpace(input,val)){
        if ((/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]{4,})+\.)+([a-zA-Z0-9]{2,})((\.+([a-zA-Z0-9]{2,}))?)+$/.test(val))) {
          addCssSuccess(input)
        }else{
          if (/^[@-_.]/.test(val)) {
            addCssError(input)
          } else {
            addCssError(input)
          }
          if (/^[0-9]/.test(val)) {
            addCssError(input)
          }
        }
      }else{
        addCssError(input)
      }
      break
    }
}
function notNullOrSpace(input,val){
  if (val === null || val.length === 0 || /^\s+$/.test(val)) {
    return false
  }else{
    return true
  }
}
function addCssError(input){
  $(`.${input}`).css({"color":"red"});
  $(`#${input}`).css({"border":"solid 1px red","color":"red"})
}
function addCssSuccess(input){
  $(`.${input}`).css({"color":"green"});
  $(`#${input}`).css({"border":"solid 1px green","color":"green"})
}
function validateForm() {
  $("#exampleModal").modal("show");
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
        $("#exampleModal").modal("show");
  }else{
    alert('Please ')
  }
}