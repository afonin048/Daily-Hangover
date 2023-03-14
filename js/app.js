function generateText(){
    let beer = document.getElementById(`beer`)
    let weather = document.getElementById(`weather`)
    let result = document.getElementById(`result`)

    if (beer.value == `hoegaarden`&& weather.value == `sunny`){
        result.innerHTML = `Hoegaarden is a refreshing and citrusy beer that pairs perfectly with the sunny weather. Its light and crisp flavor will help you beat the heat and quench your thirst.`
        
    } 
      else if (beer.value == `corona`&& weather.value == `sunny`) {
        result.innerHTML = `Corona Extra is a light and refreshing beer that is perfect for a hot and sunny day. Its crisp and clean taste, combined with a slice of lime, makes it a popular choice for beachgoers and outdoor enthusiasts`
    } 
      else if (beer.value == `grimbergen`&& weather.value == `rainy`) {
        result.innerHTML = `Grimbergen is a strong and flavorful beer that is perfect for a rainy day. Its rich and complex taste will warm you up and lift your spirits, making it the perfect companion for a cozy night in.`
    } 
      else if (beer.value == `guiness`&& weather.value == `windy`) {
        result.innerHTML = `Guinness is a rich and creamy beer that is perfect for a windy day. Its smooth and velvety texture, combined with a bold and robust flavor, will warm you up and keep you satisfied.`
    } 
      else {
        result.innerHTML =`Sorry, we don't have a recommendation for that combination. Please try again!`
    }
}