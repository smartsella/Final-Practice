// import Sigin from "./commponents/sigin";
// import Sigup from "./commponents/sigup";
import Dashboard from "./commponents/Dashboard";
// import AppProvider from "./context/AppProvider";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import Update from "./commponents/Updata";

const App = () => {
  return (
    <>
      <div>
        {/* <h1>Welcome our site</h1>
        <Sigup />
        <Sigin /> */}
        {/* <AppProvider>
          <Dashboard />
        </AppProvider> */}
        <Provider store={store}>
          <Dashboard />
          {/* <Update /> */}
        </Provider>
      </div>
    </>
  );
};
export default App;
