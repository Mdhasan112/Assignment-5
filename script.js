const searchFood = () => {
    const searchIteam = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchIteam}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}

const displayFood = food => {

    const showDetailDiv = document.getElementById('show-details');
    showDetailDiv.innerHTML = ' ';

    food.forEach(foods => {
        // console.log(foods.strMeal)
        const div = document.createElement('div');
        div.className = 'food-list'
        div.innerHTML = `
        <div> ${foods.strMeal} </div>
        <h3> ${foods.strArea}</h3>
        <img src="${foods.strMealThumb}">
        
        `;

        showDetailDiv.appendChild(div)
    })
    
}