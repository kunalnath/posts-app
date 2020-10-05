import React from 'react'
import { BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import ListPost from './components/ListPost'

function App() {
  return (
    <Router>
      <div>

        <Route path="/" component = {Home} exact={true}/>
        <Route path="/publish" component = {CreatePost} />
        <Route path="/posts" component = {ListPost} />
        
      </div>
    </Router>  
  )
}

export default App
