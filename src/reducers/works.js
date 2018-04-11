
import {SEARCH} from '../actions/users';
const initialState = {contents: ['Mirististica', 'Vet'], value: '', works:['Mirististica', 'Vet']};

export default function works(state = initialState, action) {
  switch(action.type) {
    case SEARCH: {
      const {value} = action;
      const works = state.contents.filter((val) => val.includes(value));
      return {...state, value, works};
    }
    default:
      return state;
  }
}