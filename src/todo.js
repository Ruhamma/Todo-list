const todoArray = [];

export const todo = (title, desc, date, priority, checklist) => {
  todoArray.push({ title, desc, date, priority, checklist });
  return { title, desc, date, priority, checklist };
};
