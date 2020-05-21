const API = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9c5c16a422d4b7b90accf49eed04cbc`

let indexNew = 1

$(document).on('ready',function(){
  getData(indexNew)
})

async function getData(indexNew) {
  let numberNews = indexNew * 4
  let iterator = 0
  let newContainer = document.querySelector('#new-container')
  let info = await fetch(API)
    .then(res => res.json())
    .then((data) => {
      return data.articles
    })

  if(indexNew > 1){
    iterator = numberNews - 4
  }

  for(; iterator < info.length; iterator++){
    if(iterator < numberNews){
      newContainer.innerHTML += `
        <section class="new col-sm-12 col-md-6">
          <section class="img-new"> 
            <a href='${info[iterator]['url']}' target="_blank">
              <img src="${info[iterator]['urlToImage']}" alt="" /> 
            </a>
          </section>
          <section class="titular"> 
            <h4> ${info[iterator]['title']} </h4> 
          </section>
          <section class="summary"> 
            <p>${info[iterator]['description']}</p>
          </section>
        </section>`
    }   
  }
}

function closeBannerIcon(){
  $('.rectangle').css({"transition":"all 1s", "transform":"scale(0)"})
}

function showMoreNew(){
  indexNew++
  getData(indexNew)
}
