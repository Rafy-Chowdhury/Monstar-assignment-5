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
        
            <img onclick="getFood('${food.idMeal}')"  src=${food.strMealThumb} />
            <h3 class="text">${food.strMeal}</h3>
         
            
        
        `;
        foodArea.appendChild(foodDiv);
    });
}

const getFood = punchFood =>{


   
     const instruction = document.getElementById('slideShow');

 
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${punchFood}`

    

     fetch(url)
     .then(res => res.json())
     .then(data => foodCort(data.meals))
     .catch(error => console.log(error));

}
 const foodCort = singleIteam =>{

    
     const iteamContainer = document.getElementById('slideShow');

     iteamContainer.innerHTML = '';

         singleIteam.forEach(pasta => {
             
          const pastaDiv = document.createElement('div');

          pastaDiv.className ="foodPasta"

          pastaDiv.innerHTML =`
          <img src="${pasta.strMealThumb}" >
          <h3>${pasta.strIngredient1}</h3>
          <h3>${pasta.strIngredient2}</h3>
          <h3>${pasta.strIngredient3}</h3>
          <h3>${pasta.strIngredient4}</h3>
          <h3>${pasta.strIngredient5}</h3>
          <h3>${pasta.strIngredient6}</h3>
          <h3>${pasta.strIngredient7}</h3>
          <h3>${pasta.strIngredient8}</h3>
       
           `;

         iteamContainer.appendChild(pastaDiv);
     });
  }
