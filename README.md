# Meal Planing App

Front-end is generated from a simple API that returns JSON list of 38 Meals with nutritional data [link](https://tietoevry-mealplan-api.herokuapp.com/api/meals)

## How to use the project

- clone the repo into the working directory

  ```shell
    cd ./dirNameForTheRepository/
    git clone https://github.com/DainiusZ/meal-plan.git
  ```

- install required dependencies from package.json
  ```shell
    npm install
  ```
- start the project on http://localhost:3000
  ```shell
    npm run dev
  ```

### Features (more to come)

- Ability to enter daily caloric intake
- Automated meal plan generation:
  - every meal consists of Main dish, Vegies, Salad and Snacks
  - daily summary of total calories and micronutrients\*
  - weekly meal plan

\*micronutrient data is dummy data and should not be considered accurate

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run deploy`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
