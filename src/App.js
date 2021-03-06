import {
  BrowserRouter as Router,Routes,Route,Link
} from "react-router-dom";

import Resturant from './components/Resturant'
import UseState from './components/Hooks/UseState'
import UseEffect from './components/Hooks/UseEffect'
import UseReducer from './components/Hooks/useReducer'
import TodoList from './components/Todo/todo'
import Weather from './components/weather/Weather'
import "./App.css"

const TopMenu = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/React-TodoList-Weather-Resturant">Weather</Link> |{" "}
        <Link to="/todo">TodoList</Link> |{" "}
        <Link to="/resturant">Resturant</Link> |{" "}
        <Link to="/usestate">UseState</Link> |{" "}
        <Link to="/UseEffect">UseEffect</Link> |{" "}
        <Link to="/usereducer">UseReducer</Link>
      </div>  
    </div>
  ) 
}

const App = () => {
  return (
    <>
      <h1>Welcome my app</h1>
      <Router>
          <TopMenu />
        <div className="container">
          <Routes>      
            <Route exact  path="/React-TodoList-Weather-Resturant" element={<Weather />} />
            <Route exact path="todo" element={<TodoList />} />
            <Route exact path="resturant" element={<Resturant />} />
            <Route exact path="usestate" element={<UseState />} />
            <Route exact path="UseEffect" element={<UseEffect />} />
            <Route exact path="usereducer" element={<UseReducer />} />
            {/* <Navigate to="/" replace /> */}
          </Routes>
        </div>
  </Router>
      {/* <Resturant /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseReducer /> */}
      {/* <TodoList /> */}
      {/* <Weather /> */}
    </>
  )
}



export default App