
const recipeBook = {
    _recipes: [],
    get recipes(){
        return this._recipes
    },

    set addRecipe(recipe){
        if(typeof recipe === 'object' && recipe.name && recipe.ingredients && recipe.instructions){
            this._recipes.push(recipe)
            console.log(`new recipe added`, recipe)
        }else{
            console.log(`Entre valid recipe`)
        }

    },

    set removeRecipe(name){
        const index = this._recipes.findIndex((recipe)=> recipe.name === name)
        if(index > -1){
            const removeRecipe = this._recipes.splice(index,1)[0]
            console.log(`Removed recipe: "${removeRecipe.name}"`);
        }else{
            console.log(`Recipe not found.`)
        }
    },

    // method to find recipe by ingredient 

    set findRecipeByIngredient(ingredient){
        const ingredientRecipe = this._recipes.filter((recipe) => recipe.ingredients.includes(ingredient))
        if(ingredientRecipe.length > 0){
            console.log(`Recipes containing "${ingredient}"`, ingredientRecipe)
        }else{
            console.log(`No recipes found containing ${ingredient}`)
        }
    },

    set findRecipeByKeyword(keyword){
        const keywordRecipes = this._recipes.filter((recipe)=> 
        recipe.name.includes(keyword) || recipe.instructions.includes(keyword))

        if(keywordRecipes.length > 0){
            console.log(`Recipes with "${keyword}" in name or instructions:`, keywordRecipes);

        }else{
            console.log(`No recipes found with "${keyword}" in name or instructions.`)
        }

    },

}




// Add new recipes
recipeBook.addRecipe = {
    name: 'Spaghetti Carbonara',
    ingredients: ['spaghetti', 'eggs', 'guanciale', 'pecorino cheese'],
    instructions: 'Cook spaghetti, mix eggs, guanciale, and cheese, combine with cooked spaghetti.'
  };
  
  recipeBook.addRecipe = {
    name: 'Chocolate Chip Cookies',
    ingredients: ['flour', 'sugar', 'chocolate chips', 'butter'],
    instructions: 'Mix ingredients, bake at 350°F for 10-12 minutes.'
  };
  
  console.log("Recipe Book:", recipeBook.recipes);
  
  // Remove a recipe
  recipeBook.removeRecipe = 'Spaghetti Carbonara';
  console.log("Updated Recipe Book:", recipeBook.recipes);
  
  // Find recipes by ingredient
  recipeBook.findRecipeByIngredient = 'chocolate chips';
  
  // Find recipes by keyword
  recipeBook.findRecipeByKeyword = 'cookies';


