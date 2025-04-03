import { FormEvent, useState } from "react";

export const TodoForm = ({ addToDo }: { addToDo: (description: string) => void }) => {
    const [value, setValue] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) {
            alert("Preencha os campos corretamente");
            return;
        }
        addToDo(value);
        setValue("");
    };

    return (
        <div className="todoForm">
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={value}
                    placeholder="Digite o título" 
                    onChange={(e) => setValue(e.target.value)} 
                />
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    );
};
