import { blogInter } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"
import parse from 'html-react-parser';
import '../style.css'


 

export const Fullblog = ({blog} : {blog : blogInter}) => {
    return <div>
            <AppBar></AppBar>
            <div className=" grid grid-cols-12 gap-4 w-full p-20 ">
                <div className="col-span-8">
                    <div className="text-3xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="style">
                        {parse(blog.content)}
                    </div>
                </div>
                <div className="col-span-4">
                    <Avatar name = {blog.author.name} ></Avatar>
                    <div>
                        {blog.author.name}
                    </div>
                    <div>
                        some thing about author that he/she would like to tell to its audience
                    </div>
                </div>

            </div>  
    </div>
}