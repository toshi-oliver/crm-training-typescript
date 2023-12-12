import { QueryClientProvider } from 'react-query';
import queryClient from './QueryClient';
import { Todos } from "./Todos";

export const TodoList = () => {
    return (
        <>
        <QueryClientProvider client={queryClient}>
            <h2>- Todo List -</h2>
            {/* <Todo /> */}
            <Todos/>
        </QueryClientProvider>
        </>
    );
};