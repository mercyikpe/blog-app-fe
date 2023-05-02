import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../features/postSlice'

function CreatePostForm() {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [postImage, setPostImage] = useState("");
  
    const handleTitleChange = (event) => {
      setPostTitle(event.target.value);
    };
    const handlePostBodyChange = (event) => {
      setPostBody(event.target.value);
    };
    const handleImageChange = (event) => {
      setPostImage(event.target.files[0]);
    };
  
    const dispatch = useDispatch();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      dispatch(createPost({ postTitle, postBody, postImage }));
      setPostTitle("");
      setPostBody("");
      setPostImage(null);
    }

  return (
    <div className="mt-10 block mx-auto max-w-md p-6 shadow dark:bg-neutral-700">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="postTitle"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={postTitle}
            onChange={handleTitleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="article title"
            required
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            name="postBody"
            value={postBody}
            onChange={handlePostBodyChange}
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="article text ..."
          ></textarea>
        </div>

        <div className="relative mb-6">
          <label
            className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
            htmlFor="postImage"
          >
            Article Image
          </label>
          <input
            accept="image/*"
            name="postImage"
            onChange={handleImageChange}
            className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="blogImage"
            type="file"
            required
          />
          {/* <input
            value={""}
            accept="image/*"
            name="postImage"
            onChange={handleImageChange}
            className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="blogImage"
            type="file"
          /> */}
        </div>

        {postImage && (
          <div>
            <figure className="max-w-lg">
              <img
                className="h-auto max-w-xs mx-auto"
                src={URL.createObjectURL(postImage)}
                alt={postTitle}
              />
              <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                Uploaded Post Image
              </figcaption>
            </figure>
          </div>
        )}

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Post
        </button>
      </form>
    </div>
  )
}

export default CreatePostForm