import { CLEAR_LIST,REMOVE_ITEM,RESET_ITEM } from "./actions"
import { data } from "../../../data"

export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }
  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      people: state.people.filter((person) => person.id != action.id),
    }
  }
  if (action.type === RESET_ITEM) {
    return { ...state,people:data }
  }

  throw new Error(`NO Functionality for ${action.type} `)
}