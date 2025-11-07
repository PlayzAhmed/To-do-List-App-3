import { NavLink, Outlet } from "react-router";
import "./styles/app.css";
import { useState } from "react";

interface TaskType {
  name: string;
  description: string;
  status: "Not Started" | "In Progress" | "Finished";
}

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      name: "A2SV Web Task",
      description:
        "Building a To-do List App for the A2SV Web Track Task 4 using React, TypeScript and CSS.",
      status: "In Progress",
    },
    {
      name: "A2SV Problem Solving",
      description: "Solving a problem on A2SV Hub to not lose the streak!",
      status: "Finished",
    },
    {
      name: "Physics Session",
      description: "Watching the lectures and solving H.W.",
      status: "Not Started",
    },
  ]);

  return (
    <>
      <main>
        <section className="sidebar">
          <h1>To-do List App</h1>
          <hr/>
          <div className="add-task-container">
            <input type="text" placeholder="Type the task name...." />
            <button>Add</button>
          </div>
          <hr/>
          <div className="tasks-list">
            <ul>
              {tasks.map((task: TaskType, index: number) => (
                <li key={index} className={"task-item"}>
                  <NavLink to={`/task/${index}`} className={({ isActive }) => (
                    isActive ? "active" : ""
                  ) }>{task.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="task">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default App;
