import { FC, MouseEvent, useState } from "react";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { ITask } from "../../../entity/ITask.tsx";
import { useTaskContext } from "../context/TaskContext.tsx";
import './task-card.css'

interface ITaskCardProps extends ITask {}

export const TaskCard: FC<ITaskCardProps> = ({ id, name, completed }) => {
    const [checked, setChecked] = useState<boolean>(completed)
    const { setTasks } = useTaskContext()

    const onChangeCheckbox = () => {
        setChecked((prev) => !prev)
        setTasks((tasks: ITask[]) => tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !checked
                }
            }
            return task
        }))
    }

    const onRemoveTask = (e: MouseEvent) => {
        e.stopPropagation()
        setTasks((tasks => tasks.filter((task) => task.id !== id)))
    }

    return (
        <Card onClick={onChangeCheckbox} className='cursor-pointer'>
            <Checkbox checked={checked}/>
            <p className='text-xl mx-5 flex-shrink flex-grow' style={{ textDecoration: checked ? 'line-through' : 'inherit' }}>{name}</p>
            <Button
                icon="pi pi-times"
                unstyled
                className={'flex items-center hover:bg-slate-400 pl-[4px] rounded hover:text-white active:bg-slate-500'}
                onClick={onRemoveTask}
            />
        </Card>
    )
}