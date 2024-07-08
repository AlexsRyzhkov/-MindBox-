import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { App } from "../src/App";

test('Test add task', async () => {
    render(<App/>)
    const user = userEvent.setup()

    const input = screen.getByTestId('input-task')
    const addTaskBtn = screen.getByTestId('add-task-btn')

    const inputText = 'Test Task'
    await user.type(input, inputText)
    await user.click(addTaskBtn)

    const task = screen.getByTestId('task-card-name')
    expect(task).toHaveTextContent(inputText)
})

describe('Filter and remove task', () => {
    const user = userEvent.setup()
    const clickFilter = async (i: number) => {
        const select = screen.getByTestId('select-filter')
        await user.click(select)
        const filters = screen.getAllByTestId('select-item')
        await user.click(filters[i])
    }


    beforeEach(() => {
        render(<App/>)
        const taskNames = ['task1', 'task2']

        const input = screen.getByTestId('input-task')
        const addTaskBtn = screen.getByTestId('add-task-btn')

        for (const name of taskNames) {
            fireEvent.change(input, { target: { value: name } })
            fireEvent.click(addTaskBtn)
        }

        const tasksCheckbox = screen.getAllByTestId('checkbox-container')
        fireEvent.click(tasksCheckbox[0])
    })

    test('Test filter task', async () => {
        await clickFilter(0)
        expect(screen.getAllByTestId('checkbox').length).toBe(2)


        await clickFilter(1)
        expect(screen.getByTestId('checkbox')).toBeChecked()

        await clickFilter(2)
        expect(screen.getByTestId('checkbox')).not.toBeChecked()

    })

    test('Test remove task', async () => {
        const removeBtn = screen.getAllByTestId('remove-btn')

        await user.click(removeBtn[0])

        const tasks = screen.getAllByTestId('task-card')
        expect(tasks.length).toBe(1)
    })

})