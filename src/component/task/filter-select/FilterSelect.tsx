import { FC, useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useTaskContext } from "../context/TaskContext.tsx";
import './filter-select.css'

interface IFilter {
    name: string,
    code: string
}

export const FilterSelect: FC = () => {
    const filters: IFilter[] = [
        { name: 'Все', code: 'all' },
        { name: 'Выполненые', code: 'completed' },
        { name: 'Активные', code: 'active' },
    ];
    const [selectedFilters, setSelectedFilters] = useState<IFilter>(filters[0]);
    const { setFilter } = useTaskContext()

    const onFilterChange = (e: DropdownChangeEvent) => {
        setFilter(e.value.code)
        setSelectedFilters(e.value)
    }

    return (
        <Dropdown
            value={selectedFilters}
            onChange={onFilterChange}
            options={filters}
            optionLabel="name"
            data-testid={'select-filter'}
            pt={{ item: { 'data-testid': 'select-item' }, }}
            className="p-2 min-w-[120px]"
        />
    )
}