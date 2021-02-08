const catchItem = () =>{
   const searchItem = document.getElementById('inPut').value;
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`

   fetch(url)
   .then(res => res.json())
   .then(data => displayMeal(data.meals))
   .catch(error => console.log(error));
   
}
const displayMeal = foods =>{
    const foodArea = document.getElementById('food-Area');
    foodArea.innerHTML = '';

    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'spicyFood';
        foodDiv.innerHTML = `
           
            <img src=${food.strMealThumb} />
            <h3 class="text">${food.strMeal}</h3>
            <button onclick="getFood('${food.strInstructions}')" >hi</button>
            
        
        `;
        foodArea.appendChild(foodDiv);
    });
}

const getFood = instructions =>{
    console.log(instructions)
}


