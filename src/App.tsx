import React, { createContext, useReducer } from "react";

import { Route, Routes, Link, Outlet, BrowserRouter } from "react-router-dom";

import "./App.css";
import ProtectedRoute from "./routes/protected";
import Login from "./components/login";
import Account from "./components/account";
import Articles from "./components/articles";
import Home from "./components/home";
import RootBloodyRoot from "./components/root";
import NavBar from "./components/nav-bar";
import About from "./components/about";

export interface MainContext {
  model: MainState;
  controller: {
    mainDispatch: MainContextDispathType | null;
  };
}

export interface MainState {
  isModalOpen: boolean;
}

export type MainContextDispathType = React.Dispatch<{
  type: MainReducerActionType;
  payload: Partial<MainState>;
}>;

export const main_context = createContext<MainContext>({
  model: { isModalOpen: false },
  controller: { mainDispatch: null },
});

export type MainReducerActionType = "modal-open" | "foo-bar";

function mainReducer(
  state: MainState,
  action: { type: MainReducerActionType; payload: Partial<MainState> },
) {
  switch (action.type) {
    case "modal-open":
      return { ...state, ...action.payload };
    case "foo-bar":
      return { ...state };
    default:
      return { ...state };
  }
}

function App() {
  
  const [state, dispatch] = useReducer(mainReducer, { isModalOpen: false });

  return (
    <main_context.Provider
      value={{
        model: state,
        controller: { mainDispatch: dispatch },
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<RootBloodyRoot />}>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/articles" element={<Articles />}></Route>
              <Route
                path="/auth"
                element={
                  <div>
                    <Outlet />
                  </div>
                }
              >
                <Route path="/auth/login" element={<Login />}></Route>
                <Route
                  path="/auth/registration"
                  element={
                    <div>
                      <h1>REGISTRATION</h1>
                    </div>
                  }
                ></Route>
              </Route>
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/about" element={<About />}></Route>
            </Route>
            <Route
              path="/*"
              element={<div>404 (not found , baby)</div>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </main_context.Provider>
  );
}

export default App;
