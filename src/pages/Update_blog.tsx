import { useState ,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Tiptap from "../components/Tiptap"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Oval } from 'react-loader-spinner'



function Update_blog () {

  const [ title , setTitle ] = useState('');

  const { id } = useParams();
  const {loading , blog} = useBlog({id : id || ""});

  useEffect(() => {
    // Check if blog exists and has a title
    if (blog && blog.title) {
      setTitle(blog.title);
    }
  }, [blog]); // Run this effect whenever the blog object changes


  const navigate = useNavigate();


  if(loading){
    return <div className="flex items-center justify-center h-screen">
        <Oval
        height="80"
        width="80"
        color="#000000"
        secondaryColor = "#000000"
        ariaLabel="three-dots-loading"
        />
    </div>
}

  const handelEditorContentSave = async (html : string) => {

     const content = html

      const response = await axios.put(`${BACKEND_URL}/api/v1/blog/update/${blog?.id}` , {
        title,
        content
    },{
        headers : {
            Authorization : localStorage.getItem("token")
        }
    });

    navigate(`/blog/${response.data.id}`)
  }


  return (
        <>
            <AppBar></AppBar>
            <div className="flex justify-center my-24">
              <div className="flex flex-col w-1/2">

                <textarea 
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                className="textarea textarea-bordered textarea-lg border-2 border-zinc-200 rounded w-full p-2" placeholder="Title">
                </textarea>

                <Tiptap onEditorContentSave = {handelEditorContentSave} data = {blog?.content}>
                </Tiptap>

                <div className="flex justify-center">
                    <button
                        className="border-2 rounded-md bg-red-500 text-white p-2 "
                        onClick={async () => {
                            await axios.delete(`${BACKEND_URL}/api/v1/blog/delete/${blog?.id}`,
                            {
                                headers : {
                                    Authorization : localStorage.getItem("token")
                                }
                            });
        
                            navigate(`/blogs`)
                        }}
                    >
                    Delete
                    </button>
                </div>

              </div>  
            </div>
        </>
  )
}

export default Update_blog
