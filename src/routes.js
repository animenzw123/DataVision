import React from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));





const TaskList = React.lazy(() => import("./pages/AssetsTasks/TaskList"));



const AddNewTask = React.lazy(() => import("./pages/AssetsTasks/AddNewTask"));
const Scheduler = React.lazy(() => import("./pages/Scheduler/Scheduler"));




const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
 
  
 


  {
    path: "/tasks",
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
    path: "/task/add-new",
    exact: true,
    name: "Add New Task",
    component: AddNewTask,
  },
 
];

export default routes;
