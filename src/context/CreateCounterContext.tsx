import {
  createContext,
  useCallback,
  useReducer,
  ReactElement,
  useContext
} from "react";

type StateType = {
  count: number;
  text: string;
};
const initState: StateType = {
  count: 0,
  text: ""
};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_TYPE
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};
const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      throw new Error();
  }
};

const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );
  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );

  return { state, increment, decrement };
};

type useCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: useCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {}
};

export const CreateCounterContext = createContext<useCounterContextType>(
  initContextState
);

type ChildrenType = {
  children: ReactElement | ReactElement[] | undefined;
};
export const ContextProvider = ({ children }: ChildrenType) => {
  return (
    <CreateCounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CreateCounterContext.Provider>
  );
};

type CounterType = {
  count: number;
  increment: () => {};
  decrement: () => {};
};
export const useCounter = () => {
  const {
    state: { count },
    increment,
    decrement
  } = useContext(CreateCounterContext);

  return { count, increment, decrement };
};
