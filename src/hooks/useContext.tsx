import { createContext, ReactNode, useContext, useState } from "react";

type ContextProps = {
  state: string;
  action: (nextState: string) => void;
};

const someContext = createContext<ContextProps>({
  state: "ur mom",
  action: () => {},
});

/**
 * Wrap this component around the parent of the components
 * you want to store state across.
 *
 * @example
 * <ContextProvider>
 *   <Component1/>
 *   <Component2/>
 * </ContextProvider>
 */

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<string>("not ur mom");

  async function action(nextState: string) {
    setState(nextState);
  }

  return (
    <someContext.Provider value={{ state, action }}>
      {children}
    </someContext.Provider>
  );
};

/**
 * Use this hook to read and write to the state
 * @returns {ContextProps}
 */

export const useSomething = () => {
  const { state, action } = useContext(someContext);
  return { state, action };
};
