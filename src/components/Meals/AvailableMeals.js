import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "../MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Vadapav",
    description: "Finest fish and veggies",
    price: 15,
  },
  {
    id: "m3",
    name: "pavbhaji",
    description: "Finest fish and veggies",
    price: 12.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
      
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
