/* Set the initial state */
const initState = {
    weight:"0",
    height:"0",
    age:"0",
    sex:"Male",
    bmr:"0",
    pal:"0",
    calories:"0",
    mode:"Gain Weight",
    weightForMode:"1",
}

/* Reducer in order to achieve the calculation of BMR */
const bmrReducer = (state=initState,action)=>{
    switch(action.type){
        case "CHANGE_WEIGHT":
            return{
                ...state,
                weight:action.value,
            }
        case "CHANGE_HEIGHT":
            return{
                ...state,
                height:action.value,
            }
        case "CHANGE_AGE":
            return{
                ...state,
                age:action.value,
            }
        case "CHANGE_SEX":
            return{
                ...state,
                sex:action.value,
            }
        case "CHANGE_BMR":
            return{
                ...state,
                bmr:action.value,
            }
        case "CHANGE_PAL":
            return{
                ...state,
                pal:action.value,
            }
        case "CHANGE_CALORIES":
            return{
                ...state,
                calories:action.value,
            }
        case "CHANGE_MODE":
            return{
                ...state,
                mode:action.value,
            }
        case "CHANGE_WEIGHT_FOR_MODE":
            return{
                ...state,
                weightForMode:action.value,
            }
        default:
            return state;
    }
}
export default bmrReducer;
