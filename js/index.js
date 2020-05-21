const API = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9c5c16a422d4b7b90accf49eed04cbc`

let i = 1

$(document).on('ready',function(){
  getData(i)
})

async function getData(i) {
  let j = i * 4
  let k = 0
  let newContainer = document.querySelector('#new-container')
  let info = await fetch(API)
    .then(res => res.json())
    .then((data) => {
      return data.articles
    })

  if(i > 1){
    k = j-4
  }

  for(; k < info.length; k++){
    if(k < j){
      newContainer.innerHTML += `
        <div class="new col-sm-12 col-md-6">
          <div class="img-new"> 
            <a href='${info[k]['url']}' target="_blank">
              <img src="${info[k]['urlToImage']}" /> 
            </a>
          </div>
          <div class="titular"> 
            <h4> ${info[k]['title']} </h4> 
          </div>
          <div class="summary"> 
            <p>${info[k]['description']}</p>
          </div>
        </div>`
    }   
  }
}

function closeBannerIcon(){
  $('.rectangle').css({"transition":"all 1s", "transform":"scale(0)"})
}

function showMoreNew(){
  i++
  getData(i)
}
