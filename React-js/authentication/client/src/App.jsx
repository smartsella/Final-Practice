// import Sigin from "./commponents/sigin";
// import Sigup from "./commponents/sigup";
import Dashboard from "./commponents/Dashboard";
// import AppProvider from "./context/AppProvider";
import { Provider } from "react-redux";
// import { store } from "./store/Store";
import Update from "./commponents/Updata";
import Data1 from "./props/Data1";

const App = () => {
  const user = { name: "sella", age: 21, role: "developer" };
  return (
    <>
      <div>
        {/* <h1>Welcome our site</h1>
        <Sigup />
        <Sigin /> */}
        {/* <AppProvider>
          <Dashboard />
        </AppProvider> */}
        {/* <Provider store={store}>
          <Dashboard /> */}
        {/* <Update /> */}
        {/* </Provider> */}
        <Data1 data={user} />
      </div>
    </>
  );
};
export default App;
