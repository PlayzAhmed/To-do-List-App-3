import { useParams } from "react-router";

const Task = () => {
    let params = useParams();
  return (
    <>
        <h2>Task {params.taskId}</h2>
    </>
  )
}

export default Task