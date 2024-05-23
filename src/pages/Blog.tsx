import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Fullblog } from "../components/Fullblog";
import { Oval } from 'react-loader-spinner'

export const Blog = () => {

    const { id } = useParams();
    const {loading , blog} = useBlog({id : id || ""});

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

    return <div> 
       <Fullblog  blog={blog} />
    </div>
}