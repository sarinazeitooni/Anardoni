import SecondSwipperData from "../../data/SecondSwipperData";
const initialState ={
    swipper : null,
    btnValue : true,
    navigationBtn : '',
    userData : []
}
function reducer(state=initialState, action) {
    switch (action.type) {
        case 'btnToggle':
            return {
                ...state,
                btnValue : !state.btnValue
            };
        case 'swipper':
            return{
                ...state,
                swipper : SecondSwipperData
            }
        case 'navigation' :
            return {
                ...state,
                navigationBtn: action.payload
            }
        case 'login':
            return {
                ...state,
                userData : [...state.userData, action.payload]
            };
        default:
            return state;
    }
}
export default reducer;