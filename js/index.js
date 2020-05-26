const API = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9c5c16a422d4b7b90accf49eed04cbc`

let indexNew = 1

$(document).on('ready',function(){
  getData(indexNew)
})

async function getData(indexNew) {
  let numberNews = indexNew * 4
  let iterator = 0
  let newContainer = document.querySelector('#new-container')
  var params = {
    "query": "{\"$query\":{\"categoryUri\":\"dmoz/Health\"}}",
    "dataType": [
        "news"
    ],
    "resultType": "articles",
    "articlesSortBy": "date",
    "articlesCount": 100,
    "articleBodyLen": -1,
    "apiKey": "65e9cbc8-be98-4b0e-a423-005257373b5f"
}

let articles = await $.ajax({ 
  url: "http://eventregistry.org/api/v1/article/getArticles", 
  crossDomain: true, 
  data: params, 
  method: 'GET',
})
  .done(function(res) {
    return res
  })
  .fail(function(err) { 
    console.error(err.statusText);
  })

let info = articles.articles.results

  if(indexNew > 1){
    iterator = numberNews - 4
  }

  for(; iterator < info.length; iterator++){
    if(iterator < numberNews){
      newContainer.innerHTML += `
        <section class="new col-sm-12 col-md-6">
          <section class="img-new"> 
            <a href='${info[iterator]['url']}' target="_blank">
              <img src="${info[iterator]['image']}" alt="" /> 
            </a>
          </section>
          <section class="titular"> 
            <h4> ${info[iterator]['title']} </h4> 
          </section>
          <section class="summary"> 
            <p>${info[iterator]['body']}</p>
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
