let buttonClick = () => {
    
    let searchInput = document.getElementById('searchInput');
    let searchValue = searchInput.value;

    if(searchValue== ''){
        alert('search value not found')
    }
    else{
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        fetch(url)
        .then(response => response.json())
        .then(data => displayFood(data.meals))
    }
    searchInput.value = '';
    let foodDetails = document.getElementById('foodDetails');
    foodDetails.innerHTML = '';
    
}
// Enter Button Added
let searchInput = document.getElementById('searchInput').addEventListener('keyup', function(e){
    if(e.key=== 'Enter'){
        let searchInput = document.getElementById('searchInput');
        let searchValue = searchInput.value;
        searchInput.value = '';
        let foodDetails = document.getElementById('foodDetails');
        foodDetails.innerHTML = '';
    
        if(searchValue== ''){
            alert('search value not found')
        }
        else{
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
            fetch(url)
            .then(response => response.json())
            .then(data => displayFood(data.meals))
    
        }
    }
})

function displayFood(food) {

    let display = document.getElementById('foodDisplay');
    display.innerHTML = '';

    food.forEach(foodElement => {
        let div = document.createElement('div');
        div.classList.add('mx-auto');
        div.innerHTML = `
        <div  class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                
            <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${foodElement.strMeal}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${foodElement.strInstructions.slice(0, 150)}</p>
            </div>

            <button onclick="foodDetails(${foodElement.idMeal})" class=" mb-4 ml-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                see more 
            </button>
        </div>`;


        display.appendChild(div);

    });

}


function foodDetails(foodId) {
    let foodDisplay = document.getElementById('foodDisplay');
    foodDisplay.classList.toggle('active')

    let foodDetails = document.getElementById('foodDetails');
    foodDetails.classList.toggle('active')

    let idUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(idUrl)
        .then(response => response.json())
        .then(data => displayFoodDetails(data.meals[0]));
}

function displayFoodDetails(displayFoodId) {
    let foodDetails = document.getElementById('foodDetails');
    foodDetails.innerHTML = '';
    let div = document.createElement('div');
    div.classList.add('mx-auto');
    div.innerHTML = `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="${displayFoodId.strMealThumb}" alt="" />
        <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${displayFoodId.strMeal}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${displayFoodId.strInstructions.slice(0, 150)}</p>


            <a href="${displayFoodId.strYoutube}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go Youtube  
            </a>

            <button onclick="foodDetails()" class=" mb-4 ml-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                close
            </button>
        </div>
    </div>`
    foodDetails.appendChild(div)
}


//Mood Change

let body = document.getElementById('body');
let btn = document.getElementById('btn');

btn.onclick = function (){
    if(body.className == "black"){
        body.className = 'white';
        btn.className = 'text-white bg-black px-3 py-2 rounded-full mt-2 mr-4';
        btn.innerText = 'Night mood off'
    }else{
        body.className = 'black';
        btn.className = 'text-black bg-white px-3 py-2 rounded-full mt-2 mr-4';
        btn.innerText = 'Night mood on'
    }
}