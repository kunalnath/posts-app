
const initialState = {
    posts : []
}

const postReducer = (state = initialState, action) =>{

    switch(action.type){
        case 'SET_POST_CRT' : {
            return {
                ...state,
                posts : [...state.posts, action.payload]
            }
            // localStorage.setItem('postsLC',posts)
        }
        default : {
            return state
        }
    }
}

export default postReducer