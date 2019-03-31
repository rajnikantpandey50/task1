import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskCreator } from "./task-creator";
import TaskDisplay from "./task-display";

class App extends Component {
  state = {
    taskName: "",
    taskDesc: "",
    taskDate: "",
    taskTime: "",
    tasks: [
      {
        name: "Task 1",
        desc: "",
        date: new Date(),
        time: new Date()
      },
      {
        name: "Task 2",
        desc: "",
        date: new Date(),
        time: new Date()
      },
      {
        name: "Task 3",
        desc: "",
        date: new Date(),
        time: new Date()
      }
    ]
  };

  taskNameChange = e => {
    this.setState({ taskName: e.target.value });
  };
  taskDescChange = e => {
    this.setState({ taskDesc: e.target.value });
  };
  taskDateChange = e => {
    this.setState({ taskDate: e.value });
  };
  taskTimeChange = e => {
    this.setState({ taskTime: e.value });
  };

  createTask = e => {
    e.preventDefault();
    let tasks = this.state.tasks;
    tasks.push({
      name: this.state.taskName,
      desc: this.state.taskDesc,
      date: this.state.taskDate,
      time: this.state.taskTime
    });
    this.setState({ tasks: tasks });
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm-9">
          <TaskCreator
            taskName={this.state.taskName}
            taskNameChange={this.taskNameChange}
            taskDesc={this.state.taskDesc}
            taskDescChange={this.taskDescChange}
            taskDate={this.state.taskDate}
            taskDateChange={this.taskDateChange}
            taskTime={this.state.taskTime}
            taskTimeChange={this.taskTimeChange}
            createTask={this.createTask}
          />
        </div>
        <div className="col-sm-3">
          <TaskDisplay tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
