import Sample from "../components/Sample";

export default {
  component: Sample,
  title: "Task",
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};
