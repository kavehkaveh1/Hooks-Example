import React from "react";
import UseMemo from "./Usememo";
import Usecallback from "./Usecallback";
import UseRef from "./UseRef";
import UseEffect from "./UseEffect";
import Counter from "./Usereducer";
import PersonComponent from "./speardOprator";

function App() {
  return (
    <div>
      <div>
        <h2>
          <UseMemo />
        </h2>
      </div>
      <div>
        <h2>
          <Usecallback />
        </h2>
      </div>
      <div>
        <h2>
          <UseRef />
        </h2>
      </div>
      <div>
        <h2>
          <UseEffect />
        </h2>
      </div>
      <div>
        <h2>
          <Counter />
        </h2>
      </div>
      <div>
        <h2>
          <PersonComponent />
        </h2>
      </div>
    </div>
  );
}

export default App;
