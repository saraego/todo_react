
import { ITask } from '../../interfaces/Task'

import styles from "../styles/TaskList.module.css"

interface Props {
  taskList:ITask[];
  handleDelete(id:number):void;
  handleEdit(task:ITask):void;
}

export const TaskList = ({taskList,handleDelete,handleEdit}: Props) => {
  return (
    <div>
      {taskList.length > 0 ? (
        taskList.map(task => (
        <div key={task.id}  className={styles.task}>
             <div className={styles.details}>
                <h2>{task.title}</h2>
                <p>Dificuldade: {task.difficult}</p>
             </div>
             <div className={styles.actions}>
                <i className='bi bi-pencil' onClick={()=> handleEdit(task)}></i>
                <i className='bi bi-trash' onClick={()=>handleDelete(task.id)}></i>
             </div>
        </div>
        ))
      ):
        <p>Não há tarefas cadastradas</p>
      }
    </div>
  )
}