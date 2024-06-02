import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultImage from "@assets/images/blog.webp";
import BlogCard from "@components/BlogCard/BlogCard";
import getPosts from "@redux/actions/Blog/getPosts";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

const Blog = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    getPosts()(dispatch);
  }, [dispatch]);

  if (posts.length===0) { 
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-accentClear to-fadepa">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-accentClear to-fadepa">
      <div className="py-20">
        <h1 className="text-5xl font-bold text-primary mb-5 text-center">
          BLOG
        </h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 text-white">
            {posts.map(
              (post) =>
                post.active && (
                  <BlogCard
                    key={post.idBlog}
                    id={post.idBlog}
                    image={post.image || defaultImage}
                    title={post.title}
                    date={new Date(post.createdAt).toDateString()}
                    description={post.description}
                    author={post.userId}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
