import { combineReducers } from 'redux';
import { FernsNPetals, indexValues } from './FernsNPetalsReducer';
// import TodosReducer from './TodosReducer'
// import VisibilityFilterReducer from './VisibilityFilterReducer'

// export default combineReducers({
//     TodosReducer,
//     VisibilityFilterReducer
// });

export default combineReducers({
    FernsNPetals,
    indexValues
});