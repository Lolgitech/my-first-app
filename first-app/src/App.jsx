import ComponentBasic from "./assets/components/ComponentBasic";
import ComponentWithProps from "./assets/components/ComponentWithProps";
import PropertiesDesructuring from "./assets/components/PropertiesDestructuring";
import ComponentWithChildren from "./assets/components/ComponentWithChildren";

import WebCamComponent from "./assets/components/SecondaryComponents/WebCamComponent";
import "./App.css";
import Header from "./assets/components/MainComponents/Header";
import Main from "./assets/components/MainComponents/Main";
import Footer from "./assets/components/MainComponents/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Main />
      <WebCamComponent />

      <ComponentBasic alt="mittbilde" />

      {/* du kan ligge bilde i app, utenfor components */}

      <ComponentWithProps
        title="Component with props"
        anotherName="Some text here"
        className="component-basic"
      />

      <ComponentWithChildren />

      <PropertiesDesructuring />

      <Footer />
    </div>
  );
}

export default App;

// FUTURE IMPLEMENTATIONS FOLLOWS:

{
  /* <ol>
  <li>Coffee</li>
  <li style="list-style-type:lower-alpha">Tea</li>
  <li>Milk</li>
</ol>
<ul>
  <li>Coffee</li>
  <li style="list-style-type:square">Tea</li>
  <li>Milk</li>
</ul> */
}
