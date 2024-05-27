import { createContext, useReducer } from "react";

import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";

import "./App.css";
import ProtectedRoute from "./routes/protected";
import Login from "./components/login";
import Account from "./components/account";
import Home from "./components/home";
import RootBloodyRoot from "./components/root";
import About from "./components/about";
import PageArticles from "./pages/articles";
import { MainContext, MainReducerActionType, MainState } from "./types";

export const main_context = createContext<MainContext>({
  model: { isModalOpen: false, articlesFilter: "" },
  controller: { mainDispatch: null },
});

function mainReducer(
  state: MainState,
  action: { type: MainReducerActionType; payload: Partial<MainState> },
) {
  switch (action.type) {
    case "modal-open":
      return { ...state, ...action.payload };
    case "articles-filter":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

function App() {
  const [state, dispatch] = useReducer(mainReducer, {
    isModalOpen: false,
    articlesFilter: "",
  });

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
              <Route path="/articles" element={<PageArticles />}></Route>
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
