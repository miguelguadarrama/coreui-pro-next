
const initialState = {
    sidebarShow: 'responsive',
    asideShow: false,
    darkMode: false
}

const reducer = (state = initialState, { type, ...rest }) => {

    switch (action.type) {
        case 'set':
            return { ...state, ...rest }
        default:
            return { ...state }
    }

}

export default reducer