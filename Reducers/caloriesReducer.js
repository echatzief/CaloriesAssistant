/* Set the initial state */
const initState = {
    "carbon":"0",
    "fat":"0",
    "protein":"0",
}

/* Reducer in order to achieve the calculation of BMR */
const caloriesReducer = (state=initState,action)=>{
    switch(action.type){
        case "CHANGE_CARBON":
            return{
                ...state,
                carbon:action.value,
            }
        case "CHANGE_FAT":
            return{
                ...state,
                fat:action.value,
            }
        case "CHANGE_PROTEIN":
            return{
                ...state,
                protein:action.value,
            }
        default:
            return state;
    }
};
export default caloriesReducer;