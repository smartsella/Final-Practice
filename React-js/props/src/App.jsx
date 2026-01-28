import User from "./commponents/User.jsx";
import UseState from "./commponents/UseState.jsx";
import UseEffect from "./commponents/UseEffect.jsx";
import UseRef from "./commponents/UseRef.jsx";
import UseMemo from "./commponents/UseMemo.jsx";
import Navbar from "./pages/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Forminput from "./LeaveForm/Forminput.jsx";
import Formbody from "./LeaveForm/Formbody.jsx";
import Formhandleupdata from "./FormHandle/Formhandleupdate.jsx";
import UseCallback from "./UseCallback/Usecallback.jsx";
import List from "./UseCallback/List.jsx";
import Formhandle from "./FormHandle/Formhandle.jsx";
import Error from "./pages/Error.jsx";
import UseReduce from "./commponents/UseReduce.jsx";
import { CreateContext } from "./UseContext/CreateContext.jsx";
import Data1 from "./props/Data1.jsx";
import Todo from "./pages/Todo.jsx";

const App = () => {
  // const user = { name: "sella", age: 21, role: "developer" };

  //user data
  const user = { name: "nithya", age: 21, role: "mern", status: "single" };

  return (
    <>
      <Navbar />
      <CreateContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/useref" element={<UseRef />} />
          {/* <Route path="/usememo" element={<UseMemo />} />
          <Route path="/praps" element={<User data={userdata} />} />
          <Route path="/forminput" element={<Forminput />} />
          <Route path="/formbody" element={<Formbody />} />
          <Route path="/formhandle" element={<Formhandleupdata />} /> */}
          {/* <Route path="/form" element={<Formhandle />} /> */}

          {/* <Route path="/usecallback" element={<UseCallback />} />
          <Route path="/usereduce" element={<UseReduce />} /> */}

          {/* <Route path="/usecontext" element={<UsethatContext />} /> */}

          <Route path="*" element={<Error />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </CreateContext.Provider>
    </>
  );
};

export default App;
