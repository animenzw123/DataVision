export default {
  items: [
    {
      id: "navigation",
      title: "Navigation",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: "/dashboard/default",
          icon: "feather icon-home",
        },
        {
          id: "tasks",
          title: "Tasks",
          type: "item",
          url: "/equipement-tasks/tasks",
          icon: "feather icon-credit-card",
        },

        {
          id: "scheduler",
          title: "Scheduler",
          type: "item",
          url: "/scheduler",
          icon: "feather icon-calendar",
        },

        
      ],
    },
   
  ],
};
