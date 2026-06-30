import ArrayState from "./components/ArrayState";
import ObjectState from "./components/ObjectState";
import ArrayObjectState from "./components/ArrayObjectState";

const App = () => {
  return (
    <div>
      <h1>React State Update Tasks</h1>

      <ArrayState />

      <hr />

      <ObjectState />

      <hr />

      <ArrayObjectState />
    </div>
  );
};

export default App;
