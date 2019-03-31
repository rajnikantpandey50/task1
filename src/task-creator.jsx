import React from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
export const TaskCreator = props => {
  return (
    <div>
      <h3 className="App">Task Creator</h3>
      <div className="form">
        <div className="form-group">
          <div className="">Task Name :</div>

          <InputText
            className=""
            type="text"
            value={props.taskName}
            onChange={props.taskNameChange}
            size="50"
          />
        </div>
        <div>Task Description :</div>
        <InputText
          type="text"
          value={props.taskDesc}
          onChange={props.taskDescChange}
          size="50"
        />
        <div style={{ marginTop: 20 }}>
          <Calendar
            value={props.taskDate}
            onChange={props.taskDateChange}
            placeholder="Select Date"
          />
          <Calendar
            timeOnly={true}
            hourFormat="12"
            value={props.taskTime}
            onChange={props.taskTimeChange}
            placeholder="Select Time"
          />
        </div>
        <Button
          onClick={props.createTask}
          label="Create Task"
          style={{ float: "right", marginTop: 20 }}
        />
      </div>
    </div>
  );
};
