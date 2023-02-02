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

      <ComponentBasic
        alt="mittbilde"
        title="basic components"
        anotherName="Some text here"
        className="component-basic"
      />

      {/* du kan ligge bilde i app, utenfor components */}

      <ComponentWithProps
        alt="props"
        title="Component with props"
        anotherName="Some text here"
        className="component-props"
      />

      <ComponentWithChildren
        alt="child"
        title="Components with children"
        anotherName="Some text here"
        className="component-children"
      />

      <PropertiesDesructuring
        alt="destructured"
        title="Components destructured"
        anotherName="Some text here"
        className="component-destructured"
      />

      <Footer />
    </div>
  );
}

export default App;

// FUTURE IMPLEMENTATIONS FOLLOWS:

//  function App() {
//    const [show, setShow] = useState(true)

//    function toggleShow() {
//      setShow(
//        (oldState) => !oldState
//      )
//    }

//    return (
//      <div className="App">
//      <button onClick={toggleShow}>Show</button>
//      {
//        show && (
//          <>
//        <Getpokemons url="https://pokeapi.com/api/v2/pokemon" />
//        </>
//    )
//      }
//      </div>
//    )




// function Getpokemons() {
//    const [pokemonList, setPokemonList] = useState(null)
//    const [error, setError] = useState(false)

//    useEffect(
//      () => {
//        fetch("https://pokeapi.co/api/v2/pokemon")
//        .then(response => response.json())
//        .then(data => {
        
//          setPokemonList(data)
//        })
//        .catch(
//          (error) => {
//            setError(error)
//          }
//        )
//      },
//      [conditionA, conditionB]
//      )
//      oldCondA === newCondA
//      // quit early if error
//    if (error) return <h1>Error</h1>

//    return (
//      <>
//      <h1> Pokemon</h1>
//      {
     
//        pokemonList.results.map(
//          (pokemon, index) => {
//            return (
//              <div key={index}>
//                <h3>{pokemon.name}</h3>
//                <h4>{pokemon.url}</h4>
//              </div>
//            )
//          }
//        )
//    ) : (
//      <h1>Loading...</h1>
//    )
//    }
    
//      </>
//    )
//  }



// function App() {
//   const [count, setCount] = useState(0) 

//   function increment() {
//     setCount(
//       (oldCount) => {return oldCount +1}
//       (oldCount) => oldCount +1
//     )
//   }

//   console.log("this will run on every render");

//   useEffect(
//     () => {
//       console.log("component mounted")
//     },
//     []
//   )

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       </div>
//   )
// }


// function ProjectCard(props) {
//   const {name, ShortDescription, Techstack} = props

//   return (
//     <div>
//       {/* <h1>{projects.name}</h1>
//       <p>{projects.shortDescription}</p> */}

//       <h1>{name}</h1>
//       <p>{ShortDescription}</p>
//       {/* <h3>{TechStack[0]}</h3>
//       <h3>{TechStack[1]}</h3>
//       <h3>{TechStack[2]}</h3>
//       <h3>{TechStack[3]}</h3> */}
//       </div>

//       {
//        Techstack.map((Element, index) => {
//         return (
//         //   <div key={index}>
//         //  <h3>{element}</h3>
//           {/* <h3 key={index}>{element}</h3> */}
//         <TechBadge key=/>
//         )
//        }
//        )
//       }
//       </div>





// function TechBadge(name) {
//         return (
//           <div>
//             <h3>{element}</h3>
//             </div>
//         )

        
//       }

//       function TechBadge(props) {
//         return ()

//       }



// function App() {
//   //const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <Header Title="This is the title" subTitle="this is another prop" />

//       <Main>
//         <p>some text here</p>
//         <p>some text here</p>
//         <StyledComponent />
//       </Main>
//       <footer className="footer">
//         <h1> Footer </h1>
//       </footer>
//     </div>
//   );
// }



// function App() {
//    return (
//      <div className="App" style={{position: "relative"}}>
//        <StateCollapseMenu></StateCollapseMenu>
//      </div>
//    ) 
//  }
// export default App 



// function ProjectCard(props) {
//   const {name, ShortDescription, Techstack} = props

//   return (
//     <div>
//       {/* <h1>{projects.name}</h1>
//       <p>{projects.shortDescription}</p> */}

//       <h1>{name}</h1>
//       <p>{ShortDescription}</p>
//       {/* <h3>{TechStack[0]}</h3>
//       <h3>{TechStack[1]}</h3>
//       <h3>{TechStack[2]}</h3>
//       <h3>{TechStack[3]}</h3> */}
//       </div>

//       {
//        Techstack.map((Element, index) => {
//         return (
//         //   <div key={index}>
//         //  <h3>{element}</h3>
//           {/* <h3 key={index}>{element}</h3> */}
//         <TechBadge key=/>
//         )
//        }
//        )
//       }





//  function App() {
//     const [show, setShow] = useState(true)

//     function toggleShow() {
//       setShow(
//         (oldState) => !oldState
//       )
//     }

//     return (
//       <div className="App">
//       <button onClick={toggleShow}>Show</button>
//       {
//         show && (
//           <>
//         <Getpokemons url="https://pokeapi.com/api/v2/pokemon" />
//         </>
//     )
//       }
//       </div>
//     )


// IMPORTS 
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import Gallery from "./assets/gallery";
// import counterone from "./assets/counter";
// import Header from "./components/Header";
// import projects from "./data/projects";
// // CSS
// import "./styles/app.css";
// import "/styles/Global.css";
// import "/styles/overides.css";
// import StyledComponent from "./components/styledComponent/styledcomponent";
// // Components

// import StateBool from "./components/stateBool";
// import StateCollapseMenu from "./components/stateCollapseMenu";
// import StateCounter from "./components/StateCounter";

// import data from "./data";
// import { useEffect } from "react";
// import Getpokemons from "./components/GetPokemons";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   NavLink,
// } from "react-router-dom";

// import LandingPage from "../my-app/src/Assets/LandingPage";
// import AboutPage from "../my-app/src/Assets/aboutPage";















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
