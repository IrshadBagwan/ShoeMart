

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id:'m1',
        name:'Sushi',
        description:'Finest fish and veggies',
        price:22.99,
    },
    {
        id:'m2',
        name:'Vadapav',
        description:'Finest fish and veggies',
        price:15,
    },
    {
        id:'m1',
        name:'pavbhaji',
        description:'Finest fish and veggies',
        price:12.99,
    }
]
     


const AvailableMeals = () =>{

    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
   return <section className={classes.meals}>
       <ul>
           {mealsList}
       </ul>
   </section>
}

export default AvailableMeals;