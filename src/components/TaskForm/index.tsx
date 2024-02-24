import { useState, ChangeEvent, FormEvent ,useEffect} from "react";
import styles from "../styles/TaskForm.module.css";

//interface
import { ITask } from "../../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?:React.Dispatch<React.SetStateAction<ITask[]>> ;
  task?:ITask | null;
  handleUpdate?(id:number,title:string,difficult:number): void;
}

export const TaskForm = ({ btnText,taskList,setTaskList,task, handleUpdate}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficult, setDifficult] = useState<number>(0);

  useEffect(()=>{
    if(task){
      setId(task.id)
      setTitle(task.title)
      setDifficult(task.difficult)
    }
  },[task])

  const addTaskHandle = (e:FormEvent<HTMLFormElement>) => {

    e.preventDefault();

  if(handleUpdate){
    handleUpdate(id,title,difficult)
    
  }else {
    const id = Math.floor(Math.random()* 1000)
    const newTask: ITask = {id,title,difficult}

    setTaskList!([...taskList,newTask])

    setTitle("")
    setDifficult(0)

    console.log(taskList);
  }
    

  };

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {

    if(e.target.name === "title"){
      setTitle(e.target.value)
    }else{
      setDifficult(parseInt(e.target.value))
    }


  };

  return (
    <form onSubmit={addTaskHandle} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Título da tarefa"
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficult">Dificuldade:</label>
        <input type="text" name="difficult" value={difficult} placeholder="Dificuldade da tarefa" onChange={handleChange}/>
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};
