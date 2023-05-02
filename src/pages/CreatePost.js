import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../features/postSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import CreatePostForm from "../components/CreatePostForm";
import { toast } from "react-toastify";

function CreatePost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/blog")
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getPosts());
  }, [user, navigate, isError, isSuccess, message, dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <h2 className="text-center pt-[5%] font-bold text-2xl">
        Create a new post
      </h2>

      <CreatePostForm />
    </section>
  );
}

export default CreatePost;