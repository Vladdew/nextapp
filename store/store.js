import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import users from "./usersSlice";
import counter from "./counterSlice";

const combinedReducer = combineReducers({
  counter,
  users,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      counter: {
        count: state.counter.count + action.payload.counter.count,
      },
      users: {
        users: [...action.payload.users.users, ...state.users.users],
      },
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });

// import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import { mainReducer } from "./mainReducer";

// export const composeEnhancers =
//   (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const middleWares = [thunk];

// export const store = createStore(
//   mainReducer,
//   composeEnhancers(applyMiddleware(...middleWares))
// );

// export type RootState = ReturnType<typeof mainReducer>;
