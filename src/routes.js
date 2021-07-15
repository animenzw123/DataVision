import React from "react";

const DashboardDefault = React.lazy(() => import("./pages/Dashboard"));





const AssetsList = React.lazy(() => import("./pages/AssetsTasks/AssetsList"));
const TaskList = React.lazy(() => import("./pages/AssetsTasks/TaskList"));



const AddNewTask = React.lazy(() => import("./pages/AssetsTasks/AddNewTask"));
const Scheduler = React.lazy(() => import("./pages/Scheduler/Scheduler"));




const routes = [
  {
    path: "/dashboard/default",
    exact: true,
    name: "Default",
    component: DashboardDefault,
  },
 
  
 


  {
    path: "/equipement-tasks/tasks",
    exact: true,
    name: "Tasks",
    component: TaskList,
  },




  {
    path: "/scheduler",
    exact: false,
    name: "Scheduler",
    component: Scheduler,
  },



  {
    path: "/equipement-tasks/task/add-new",
    exact: true,
    name: "Add New Task",
    component: AddNewTask,
  },
 
];

export default routes;
