import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"
import { Oval } from 'react-loader-spinner'

export const Blogs = () => {

    const {loading , blogs} = useBlogs();

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
        <AppBar></AppBar>
        <div className="my-24">
            <div className="flex flex-col space-y-5 cursor-pointer">
                {blogs.map(blog => <BlogCard 
                    id = {blog.id}
                    authorName = {blog.author.name} 
                    title  = {blog.title} 
                    content  = {blog.content}
                    publishedDate = {blog.date.split('T')[0]}
                    update = {false}
                />)}
            </div>
        </div>
    </div>
}