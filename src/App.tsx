import { TodoList } from "./components/TodoList";
import Post from './components/Post'
import { Routes, Route} from 'react-router-dom';


export const App = () => {
  return (
    //Reactフラグメント→divを使いたくない時に使う。rootになるタグがある場合は不要。
    <>
      <Routes>
        <Route path="/post" element={ <Post /> } />
        <Route path="/" element={ <TodoList /> } />
      </Routes>
    </>
  );
};