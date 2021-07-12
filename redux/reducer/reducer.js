import SecondSwipperData from "../../data/SecondSwipperData";
const initialState ={
    swipper : null,
    btnValue : true,
    navigationBtn : ''
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
        default:
            return state;
    }
}
export default reducer;