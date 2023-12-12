import { useForm, SubmitHandler } from "react-hook-form";

type Input = {
    title: string
    body: string

}

const Posts = () => {
    const {
      register,
      handleSubmit,
    } = useForm<Input>();
    const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

    return (
      <div>
        <h2>Post</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <label>
              <span>title</span>
              <input
                type="text"
                {...register("title", {
                   required: true,
                })}
              />
            </label>
          </div>
          <div className="form-item">
            <label>
              <span>body</span>
              <input
                type="text"
                {...register("body", {
                   required: true,
                })}
              />
            </label>
          </div>
          <div className="submit-button">
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }

export default Posts;