import { FC } from "react";
import { TaskCard } from "../card/TaskCard.tsx";
import { ITask } from "../../../entity/ITask.tsx";
import { useTaskContext } from "../context/TaskContext.tsx";

export const TaskList: FC = () => {
    const { tasks, filter } = useTaskContext()

    if (filter === 'completed') {
        return (
            <section className='flex flex-col gap-4'>
                {tasks.filter((task) => task.completed).map((task: ITask) => <TaskCard key={task.id} {...task}/>)}
            </section>
        )
    }

    if (filter === 'active') {
        return (
            <section className='flex flex-col gap-4'>
                {tasks.filter((task) => !task.completed).map((task: ITask) => <TaskCard key={task.id} {...task}/>)}
            </section>
        )
    }

    return (
        <section className='flex flex-col gap-4'>
            {tasks.map((task: ITask) => <TaskCard key={task.id} {...task}/>)}
        </section>
    )
}