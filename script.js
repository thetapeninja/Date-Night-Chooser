// Arrays for different generators
const FoodSelectionList = ['At Restaurant', 'Fast Food', 'At Home'];
const CuisineList = ['American', 'Mexican', 'Italian', 'Indian', 'Thai', 'Chinese', 'Japanese', 'COOK AT HOME!'];
const FastFoodList = ['Taco Bell', 'Chik Fil A', 'McDonalds', 'Daves Hot Chicken', 'Chipotle', 'Halal Cart', 'Pizza', 'Sushi Takeout', 'COOK AT HOME'];
const AtHomeList = ['New Recipe', 'Homemade Pizza', 'Pasta', 'Bowl', 'Quesadilla', 'Loaded Nachos'];
const ToDoList = ['Watch TV Show', 'Watch Movie', 'Learn Something New Together', 'Read Together', 'Explore The City', 'Try New Dessert Place/New Dessert Option'];

// Function to decide where to eat
function generateRandomFoodSelection(generatorId) {
    const randomIndex = Math.floor(Math.random() * FoodSelectionList.length);
    const randomFoodSelection = FoodSelectionList[randomIndex];

    document.getElementById(`output-food-selection${generatorId}`).textContent = `Let's eat... ${randomFoodSelection}`;
}

// Function to generate a cuisine for restaurant
function generateRandomCuisine(generatorId) {
    const randomIndex = Math.floor(Math.random() * CuisineList.length);
    const randomCuisine = CuisineList[randomIndex];

    document.getElementById(`output-cuisine${generatorId}`).textContent = `Let's eat... ${randomCuisine}`;
}

// Function to generate a fast food place
function generateRandomFastFood(generatorId) {
    const randomIndex = Math.floor(Math.random() * FastFoodList.length);
    const randomFastFood = FastFoodList[randomIndex];

    document.getElementById(`output-fast-food${generatorId}`).textContent = `We can eat... ${randomFastFood}`;
}

// Function to generate an at-home menu item
function generateRandomAtHomeMenu(generatorId) {
    const randomIndex = Math.floor(Math.random() * AtHomeList.length);
    const randomAtHome = AtHomeList[randomIndex];

    document.getElementById(`output-at-home${generatorId}`).textContent = `Our at-home menu item will be... ${randomAtHome}`;
}

// Function to generate what to do?
function generateRandomToDo(generatorId) {
    const randomIndex = Math.floor(Math.random() * ToDoList.length);
    const randomToDo = ToDoList[randomIndex];

    document.getElementById(`output-todo${generatorId}`).textContent = `We should... ${randomToDo}`;
}
