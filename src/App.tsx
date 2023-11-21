import Todos from "./components/Todos";
// import Posts from './components/Post'
import { QueryClientProvider } from 'react-query'
import queryClient from './components/QueryClient'

export const App = () => {
  return (
    //Reactフラグメント→divを使いたくない時に使う。rootになるタグがある場合は不要。
    <>
      <QueryClientProvider client={queryClient}>
        <h2>- Todo List -</h2>
        {/* <Todo /> */}
        <Todos/>
      </QueryClientProvider>
    </>
  );
};