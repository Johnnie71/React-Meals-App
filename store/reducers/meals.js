import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS, 
    filteredMeals: MEALS,
    favoriteMeals: [],
}


const mealsReducer = (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_FAVORITE:
            
    }
    return state;
};

export default mealsReducer;