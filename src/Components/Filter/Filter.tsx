export type FilterProps = {
 filter: string
 setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const Filter = ({ filter, setFilter }: FilterProps) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options"></div>
            <div>
                <p>Status</p>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="All">Todos</option>
                    <option value="Completed">Concluídas</option>
                    <option value="Incomplete">Pendentes</option>
                </select>
            </div>
        </div>
    );
}