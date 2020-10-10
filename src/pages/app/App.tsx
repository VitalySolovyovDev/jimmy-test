import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/configureStore";
import AppRouter from "../../router";

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
