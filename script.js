function catchItem(){
   const item = document.getElementById('inPut');
   const newEue = item.value;

   fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
   .then(res => res.json())
   .then(data => displayMeal(data))
}

const displayMeal = foods =>{
    const foodsDiv = document.getElementById('mealItam');

  for (let i = 0; i < length; i++) {
     const food = foods[i];
     const foodDiv = document.createElement('div');
       
        const name = document.createElement('h3');
         name.innerText = food.strMeal;

        
         
        foodDiv.appendChild(name);
    
        foodsDiv.appendChild(foodDiv);

        //console.log(foodsDiv);
    
  }




}