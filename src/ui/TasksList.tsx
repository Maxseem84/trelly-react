import { TaskItem } from './TaskItem';
import { type GlobalTaskListItemJsonApiData } from '../dal/api';
import { useTasks } from '../bll/useTasks';

type Props = {
  selectedTaskId: string | null;
  setSelectedTaskId: (taskId: string | null) => void;
  setBoardId: (boardId: string | null) => void;
};

export function TasksList({ selectedTaskId, setSelectedTaskId, setBoardId }: Props) {
  const { tasks } = useTasks();
  const handleSelectTask = (task: GlobalTaskListItemJsonApiData) => {
    setSelectedTaskId(task.id);
    setBoardId(task.attributes.boardId);
  };

  if (tasks === null) return 'Загрузка...';
  if (tasks.length === 0) return 'Задачи отсутствуют';
  return (
    <div>
      <button
        onClick={() => {
          setSelectedTaskId(null);
        }}>
        Сбросить выделение
      </button>
      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              isSelected={task.id === selectedTaskId}
              onTaskSelect={handleSelectTask}
            />
          );
        })}
      </ul>
    </div>
  );
}
