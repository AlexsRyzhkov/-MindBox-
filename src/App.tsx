import { PrimeReactProvider } from 'primereact/api';
import { Container } from "./component/container/Container.tsx";
import { Header } from "./component/header/Header.tsx";
import { TaskForm } from "./component/task/form/TaskForm.tsx";
import { FilterSelect } from "./component/task/filter-select/FilterSelect.tsx";
import { TaskList } from "./component/task/list/TaskList.tsx";
import { TaskProvider } from "./component/task/context/TaskContext.tsx";
import './app.css'

export const App = () => {
    return (
        <PrimeReactProvider>
            <Container>
                <Header/>
                <TaskProvider>
                    <section className='flex justify-between'>
                        <TaskForm/>
                        <FilterSelect/>
                    </section>
                    <TaskList/>
                </TaskProvider>
            </Container>
        </PrimeReactProvider>
    )
}
