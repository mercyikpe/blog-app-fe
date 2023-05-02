const BlogPostCard = (props) => {
    const { postTitle, postImage, postBody, createdAt } = props.blog;
  
    const imageUrl = "http://127.0.0.1:8080/" + postImage;
  
    return (
      <div className="rounded overflow-hidden shadow-lg flex flex-col">
        <div className="relative">
          <a href="#/">
            <figure className="max-w-lg">
              <img
                className="h-auto max-w-md mx-auto"
                src={imageUrl}
                alt={postTitle}
              />
              <figcaption className="sr-only mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                Blog Banner
              </figcaption>
            </figure>
  
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
        </div>
        <div className="px-6 py-4 mb-auto">
          <a
            href="#/"
            className="capitalize font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
          >
            {postTitle}
          </a>
          <p className="capitalize text-gray-500 text-sm">{postBody}</p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
          <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <svg
              height="13px"
              width="13px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                </g>
              </g>
            </svg>
            <span className="ml-1"> {
              new Date(createdAt).toLocaleString('en-US')
            }</span>
          </span>
        </div>
      </div>
    );
  };
  
  export default BlogPostCard;
  