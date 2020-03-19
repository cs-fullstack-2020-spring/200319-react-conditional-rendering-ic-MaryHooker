# 20-03-19 React Conditional Rendering IC

## Assignment

Create a page with a cat button and a dog button. When the cat button is clicked display a page with information about cats. When the dog button is clicked display a page with information about dogs.

## Step by Step

#### Set Up
- Create a react app called favorite-pet-app
- Create a class based component called `AppContainer` that displays and h1 tag with the text `Favorite Pet App`
- Reference the `AppContainer` component in the `App` component
- Create a class based component called `Cat` that displays an h2 tag with the text `You're a cat person!` and an image of a cat.
- Reference the `Cat` component in the `AppContainer` component
- Create a class based component called `Dog` that displays an h2 tag with the text `You're a dog person!` and an image of a dog
- Reference the `Dog` component in the `AppContainer` component

#### Conditional Rendering
- Add an `I Love Cats` button and an `I Love Dogs` button `AppContainer` component
- Define `userLikesCats` as a property of state and set the value to false. This value will be updated when the `I Love Cats` button is clicked
- Define `userLikesDogs` as a property of state and set the value to false. This value will be updated when the `I Love Dogs` button is clicked
- If the user clicks the `I Love Cats` button, display the `Cats` component on the page using element variables
- If the user clicks the `I Love Dogs` button, display the `Dogs` component on the page using element variables 