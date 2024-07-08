import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import { ITask } from "../../../entity/ITask.tsx";

type TFilter = 'all' | 'completed' | 'active'

interface ITaskContext {
    tasks: ITask[];
    setTasks: Dispatch<SetStateAction<ITask[]>>,
    filter: TFilter
    setFilter: Dispatch<SetStateAction<TFilter>>
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const useTaskContext = () => useContext(TaskContext)

export const TaskProvider: FC<PropsWithChildren> = ({ children }) => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [filter, setFilter] = useState<TFilter>('all');

    return (
        <TaskContext.Provider value={{ tasks, setTasks, filter, setFilter }}>
            {children}
        </TaskContext.Provider>
    )
}