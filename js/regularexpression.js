
function validate(input) {
  let textInput = document.getElementById(input).value;
  switch (input){
    case "phonenumber":
      if (notNullOrSpace(input,textInput)){
        if ((/^([0-9]{10})$/.test(textInput))) {
          addCssSuccess(input)
        }else{
          if (!(/^3/.test(textInput))) {
            addCssError(input)
          } else if (textInput.length > 10) {
            addCssError(input)
          } else if (textInput.length < 10) {
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
      if (notNullOrSpace(input,textInput)){
        if ((/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]{4,})+\.)+([a-zA-Z0-9]{2,})((\.+([a-zA-Z0-9]{2,}))?)+$/.test(textInput))) {
          addCssSuccess(input)
        }else{
          if (/^[@-_.]/.test(textInput)) {
            addCssError(input)
          } else {
            addCssError(input)
          }
          if (/^[0-9]/.test(textInput)) {
            addCssError(input)
          }
        }
      }else{
        addCssError(input)
      }
      break
    }
}
function notNullOrSpace(input,textInput){
  if (textInput === null || textInput.length === 0 || /^\s+$/.test(textInput)) {
    return false
  }else{
    return true
  }
}
function addCssError(input){
  $(`.${input}`).removeClass('has-success')
  $(`.${input}`).addClass('has-error')
  $(`#${input}`).css({"border":"solid 1px red","color":"red"})
}
function addCssSuccess(input){
  $(`.${input}`).removeClass('has-error')
  $(`.${input}`).addClass('has-success');
  $(`#${input}`).css({"border":"solid 1px #ccc","color":"black"})
}
