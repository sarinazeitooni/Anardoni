import SecondSwipperData from "../../data/SecondSwipperData";
const initialState ={
    swipper : null,
    btnValue : true
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
        default:
            return state;
    }
}
export default reducer;