import { Task } from "../../Model/Task"
import { FaRegTrashCan } from "react-icons/fa6";


export type TodoProps = {
    item: Task;
    removeToDo: (id: number) => void;
    completeToDo: (id: number) => void;

}

export const Todo = ({ item, removeToDo, completeToDo }: TodoProps) => {
    return (
        <div className='to-do'
            style={{ textDecoration: item.isCompleted ? "line-through" : "" }}>
            <div className="checkbox">
                <input type="checkbox" onClick={() => completeToDo(item.id)} />
            </div>
            <div className='content'>
                <p>{item.description}</p>
            </div>
            <div>
                <button className="remove" onClick={() => removeToDo(item.id)}>
                    <FaRegTrashCan />
                </button>
            </div>
        </div>
    )
}