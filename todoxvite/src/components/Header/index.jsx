import todoLogo from "../../assests/Logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./header.module.css";
import { useState } from "react";

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          type="text"
          placeholder="Add new task"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
