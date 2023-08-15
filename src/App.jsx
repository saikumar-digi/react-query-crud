import { Route, Routes } from "react-router-dom"
import PostList from "./pages/UserList"
import Post from "./pages/User"
import PostEdit from "./pages/UserEdit"



function App() {
  return (
    <div>
    <h1>hii</h1>
    <Routes>
      <Route path="/" element={<PostList />}/>
      <Route path="/user/:id" element={<Post />}/>
      <Route path="/user/:id/edit"  element={<PostEdit />}/>
    </Routes>
 </div>
    
  )
}

export default App
