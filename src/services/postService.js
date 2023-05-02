import axios from "axios";

// make http request, send the data back and set the data in the localhost
const API_URL = "http://127.0.0.1:8080/api/blogs";


// Get all posts
export const getAllBlogsRequest = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

// Create new post
const createPost = async (postData, token) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  // const response = await axios.post(API_URL, postData, config);
  const response = await axios.post(API_URL, postData);

  return response.data;
};

// Get  posts
const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const postService = {
  createPost,
  getPosts,
};

export default postService;
