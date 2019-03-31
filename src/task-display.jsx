import React, { Component } from "react";
import { Button } from "primereact/button";

class TaskDisplay extends Component {
  state = { tasks: [], all: false };

  taskTemplate = (task, index) => {
    if (!task) return;
    return (
      <div className="task" key={index}>
        <span>{task.name}</span>
        <span style={{ float: "right" }}>
          <div style={{ float: "right" }}>
            {task.date.getMonth() + 1}/{task.date.getDate()}
          </div>
          <div>
            {task.time.getHours()}:
            {task.time.getMinutes() / 10 < 1
              ? "0" + task.time.getMinutes()
              : task.time.getMinutes()}
          </div>
        </span>
      </div>
    );
  };
  componentDidMount() {
    this.setState({ tasks: this.props.tasks });
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.tasks.length !== nextProps.tasks.length) {
      this.setState({ tasks: nextProps.tasks });
    }
  }

  selectAll = e => {
    e.preventDefault();
    this.setState({ all: true });
  };
  selectUpcoming = e => {
    e.preventDefault();
    this.setState({ all: false });
  };
  render() {
    let tasks = this.state.tasks;

    if (!this.state.all) {
      tasks = tasks
        .sort((a, b) => {
          return a.date - b.date;
        })
        .sort((a, b) => a.time - b.time);

      tasks = tasks.slice(0, 3);
    }
    return (
      <div className="display">
        <Button label="Upcoming" onClick={this.selectUpcoming} />
        <Button
          label="All"
          style={{ float: "right" }}
          onClick={this.selectAll}
        />

        {tasks.map((task, index) => this.taskTemplate(task, index))}
      </div>
    );
  }
}

export default TaskDisplay;
