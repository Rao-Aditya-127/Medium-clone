import { AppBar } from "../components/AppBar"
import { usemyblogs } from "../hooks";
import { Oval } from 'react-loader-spinner'
import { BlogCard } from "../components/BlogCard"


function My_blogs() {
  const {loading , myblogs} = usemyblogs();

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

    return (
        <div>
          <AppBar />
          <div className="my-24">
            {myblogs.length === 0 ? (
              <div className="text-center text-gray-600">No blogs found</div>
            ) : (
              <div className="flex flex-col space-y-5 cursor-pointer">
                {myblogs.map((blog) => (
                  <BlogCard
                    id={blog.id}
                    authorName={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={blog.date.split('T')[0]}
                    update = {true}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      );
}

export default My_blogs