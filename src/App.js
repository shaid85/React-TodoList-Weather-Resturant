import {
  BrowserRouter as Router,
  Routes,Route,Link
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
        <Link to="/">Weather</Link> |{" "}
        <Link to="/todo">TodoList</Link> |{" "}
        <Link to="/resturant">Resturant</Link> |{" "}
        <Link to="/usestate">UseState</Link> |{" "}
        <Link to="/UseEffect">UseEffect</Link> |{" "}
        <Link to="/usereducer">UseReducer</Link>
    </div>
  ) 
}

const App = () => {
  return (
    <>
      <Router>
          <TopMenu />

        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="todo" element={<TodoList />} />
          <Route path="resturant" element={<Resturant />} />
          <Route path="usestate" element={<UseState />} />
          <Route path="UseEffect" element={<UseEffect />} />
          <Route path="usereducer" element={<UseReducer />} />
        </Routes>
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