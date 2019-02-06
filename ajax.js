
// const second = () =>{
//     setTimeout(()=>{
//         console.log("Hey There");  
//     }, 2000);    
// }

// const first = () =>{
//     console.log("Hey There"); 
//     second();
//     console.log('END');
    
// }

// first();

// function getRecipe() {
//     setTimeout(() => {
//         const recipeID = [523,123,582,1578];
//         console.log(recipeID);
        
//         setTimeout((id) => {
//             const recipe = {
//                 title: "Fresh tomato pasta",
//                 published: 'Troy'
//             };
//             console.log(`${id}: ${recipe.title}`);
//             setTimeout(published => {
//                 const recipe = {
//                     title: "Italian Pizza",
//                     published: 'Troy'
//                 };
//                 console.log(recipe);
                
//             }, 1500, recipe.published)
//         }, 1500, recipeID[2]);
//     }, 1500);
// }
// getRecipe();

// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([523,123,582,1578]);
//     }, 1500);
// });

// const getRecipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const recipe = {
//                 title: 'Fresh tomato pasta',
//                 publisher: 'Troy'};
//             resolve(`${ID}: ${recipe.title}`);
//         }, 1500, recID);
//     });
// };

// const getRelated = publisher => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(pub => {
//             const recipe = {
//                 title: "Italian Pizza",
//                 published: 'Troy'
//             };
//             resolve(`${pub}: ${recipe.title}`);
//         }, 1500, publisher);
//     });
// };

// getIDs
// .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);

// })
// .then(recipe => {
//     console.log(recipe);
//     return getRelated('Troy');
// })
// .then(recipe => {
//     console.log(recipe);
    
// })
// .catch(error => {
//     console.log('error!!');
// });

// async function getRecipesAW(){
//     const IDs = await getIDs; 
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);
//     const related = await getRelated('Troy');
//     console.log(related);
    
//     return recipe;
// }
// getRecipesAW().then(result => console.log(`${result} is the best ever`));

// function getWeather(woeid) {
//     fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
//     .then(result => {
//         // console.log(result);
//         return result.json();
//     })
//     .then(data => {
//         const today = data.consolidated_weather[0];
//         console.log(`Today's weather in SF is ${today.min_temp} - ${today.max_temp}`);
        
//     })
//     .catch(error => {
//         console.log(error); 
//     });
// }

async function getWeatherAW(woeid) { 
    try{
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const today = await data.consolidated_weather[0];
        console.log(`Today's weather in SF is ${today.min_temp} - ${today.max_temp}`);
    }catch(error){
        console.log(error);   
    }

}

getWeatherAW(2487956);

