import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import My_blogs from './pages/My_blogs'
import Update_blog from './pages/Update_blog'
import Experiment from './pages/Experiment'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/myblogs" element={<My_blogs />} />
          <Route path="/myblogs/update/:id" element={<Update_blog />} />
          <Route path="/experiment" element={<Experiment/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App