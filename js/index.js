const API = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9c5c16a422d4b7b90accf49eed04cbc`

$(document).on('ready',function(){
    getData(1)
})

async function getData(i) {
    i = i * 4
    let result = []
    let info = await fetch(API)
        .then(res => res.json())
        .then((data) => {
            return data.articles
        })
        
    let newContainer = document.querySelector('#newContainer')
    

    for(var k = 0; k < info.length; k++){
        if(k < i){
            newContainer.innerHTML += `
            <div class="new col-6">
                <div class="imgNew"> 
                    <img src="${info[k]['urlToImage']}" /> 
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