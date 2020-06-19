// local imports
import { SAVE_USER } from "../actions"

// define initial state
const initialState = []

// define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {username: action.username} 
    default: 
      return state
  }
}

// export reducer
export default reducer