import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 lg:p-28 p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl text-center">
          Welcome to Magdum Blog
        </h1>
        <p className="text-gray-500 text-sm sm:text-base text-center dark:text-gray-400">
          Here, we explore a myriad of topics ranging from technology to
          lifestyle, offering unique insights, tips, and inspiration. Whether
          you're a seasoned enthusiast or a curious mind, Magdum Blog is your
          destination for thought-provoking articles, compelling stories, and
          meaningful discussions. Join us on this journey of discovery and
          enlightenment, where every click brings you closer to new ideas and
          fresh perspectives.
        </p>
        <Link to="/search" className="text-blue-500 font-medium mx-auto">
          <Button gradientDuoTone="pinkToOrange">View All Posts</Button>
        </Link>
      </div>
      <div className="p-4 md:p-12 md:-mt-20">
        <CallToAction />
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-medium text-center">Recent Posts</h2>
            <div className=" flex flex-wrap gap-4">
              {posts.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </div>
            <Link to="/search" className="text-blue-500 font-medium mx-auto">
              <Button gradientDuoTone="pinkToOrange">View All Posts</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
