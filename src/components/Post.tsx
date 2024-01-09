import { useMutation } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQueryGetPosts } from '../hooks/useQueryPosts';

type PostData = {
  title: string;
  body: string;
};

const Posts = () => {
  const { register, handleSubmit } = useForm<PostData>();
  const { refetch } = useQueryGetPosts();
  const [post, setPost] = useState<PostData | null>(null);

  // useMutation フックで POST リクエストを定義
  const createPost = useMutation({
    mutationFn:
      async (postData: PostData) =>
        await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        }),
    onSuccess:
      async (res) => {
        const body = await res.json();
        console.log(body);
      }
  });

  const onSubmit: SubmitHandler<PostData> = (data) => {
    // useMutation フックで定義した createPost を呼び出す
    createPost.mutate(data);
  };

  const {data} = useQueryGetPosts()

  if (!data) {
    return <div>loading...</div>
  }

  return (
    <>
      <div>
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              <span>Title</span>
              <input type="text" {...register('title', { required: true })} />
            </label>
          </div>
          <div>
            <label>
              <span>Body</span>
              <input type="text" {...register('body', { required: true })} />
            </label>
          </div>
          <div>
            <button type="submit" disabled={createPost.isLoading}>
              {createPost.isLoading ? 'Creating...' : 'Create Post'}
            </button>
          </div>
        </form>
      </div>
      <div>
        <h2>Posts</h2>
          { data.id }
          { data.title }
          { data.body }
      </div>
    </>
  );
};

export default Posts;
