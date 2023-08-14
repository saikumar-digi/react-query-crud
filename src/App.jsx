import { Route, Routes } from "react-router-dom"
import PostList from "./pages/PostList"



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostList/>} />
      </Routes>
    </div>
    
    
  )
}

export default App
