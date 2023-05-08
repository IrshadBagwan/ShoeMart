
import React, { Fragment } from 'react';

import MealsSumarry from './MealsSumarry';
import AvailableMeals from './AvailableMeals';

const Meals = () =>{
    return(
   <Fragment>
       <MealsSumarry />
       <AvailableMeals />
   </Fragment>
    )
}

export default Meals;