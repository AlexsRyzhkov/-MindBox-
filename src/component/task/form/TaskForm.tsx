import { ChangeEvent, FC, FormEvent, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useTaskContext } from "../context/TaskContext.tsx";
import { v4 as uuidv4 } from 'uuid';

export const TaskForm: FC = () => {
    const [taskName, setTaskName] = useState<string>('')
    const { setTasks } = useTaskContext()

    const onCreate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (taskName.length === 0) {
            return
        }

        setTasks(prev => [...prev, {
            id: uuidv4(),
            name: taskName,
            completed: false
        }])

        setTaskName('')
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value)
    }

    return (
        <form onSubmit={onCreate} className='flex gap-2'>
            <InputText
                className="p-1 px-4 w-[300px]"
                placeholder={'Название'}
                value={taskName}
                onChange={onInputChange}
                data-testid={'input-task'}
            />
            <Button
                label='Создать'
                className='p-2 px-6 text-[12px]'
                data-testid={'add-task-btn'}
            />
        </form>
    )
}