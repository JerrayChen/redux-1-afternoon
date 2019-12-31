import { createStore } from 'redux';

const initState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
};

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_AUTHOR_FIRST_NAME = 'UPDATE_AUTHOR_FIRST_NAME';
export const UPDATE_AUTHOR_LAST_NAME = 'UPDATE_AUTHOR_LAST_NAME';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS';
export const UPDATE_RECIPES = 'UPDATE_RECIPES';
export const CLEAR_FIELD = 'CLEAR_FIELD';
export const DELETE_RECIPES = 'DELETE_RECIPES';




function reducer(state = initState, action) {
    let { type, payload } = action;
    switch (type) {
        case UPDATE_NAME: return {
            ...state,
            name: payload
        }

        case UPDATE_CATEGORY: return {
            ...state,
            category: payload
        }
        case UPDATE_AUTHOR_FIRST_NAME: return {
            ...state,
            authorFirst: payload
        }
        case UPDATE_AUTHOR_LAST_NAME: return {
            ...state,
            authorLast: payload
        }
        case UPDATE_INGREDIENTS: return {
            ...state,
            ingredients: [...state.ingredients, payload]
        }
        case UPDATE_INSTRUCTIONS: return {
            ...state,
            instructions: [...state.instructions, payload]
        }
        case UPDATE_RECIPES: 
        const {name,
            category,
            authorFirst,
            authorLast,
            ingredients,
            instructions
        } = state;
        const newRecipe = {name,
            category,
            authorFirst,
            authorLast,
            ingredients,
            instructions
        };
        return {
            ...state,
            recipes: [...state.recipes, newRecipe]
        }

        case CLEAR_FIELD: return {
            ...state,
            name: '',
            category: '',
            authorFirst: '',
            authorLast: '',
            ingredients: [],
            instructions: [],
        }
        case DELETE_RECIPES: 
        // payload = index
        console.log(payload);
        
        const newRecipes = [...state.recipes];
        newRecipes.splice(payload,1);
        return {
            ...state,
            recipes: newRecipes
        }

        default: return initState;
    }
}

export default createStore(reducer);