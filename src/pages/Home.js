import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Blog App
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          You can login and create a blog post
        </p>
        <div className="flex flex-wrap justify-center">
          <Link
            to="/blog"
            className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            See all posts
          </Link>
          <Link
            to="/register"
            className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700"
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
