import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  // incharge of creating new state object based on the action it receives
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

const intitialState = {
  budget: 2000,
  expenses: [],
};
export const AppContext = createContext(); // create a context

export const AppProvider = (props) => {
  // wrap the components // holds the state and passes to the components
  const [state, dispatch] = useReducer(AppReducer, intitialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
