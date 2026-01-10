import clsx from 'clsx';
import { type GlobalTaskListItemJsonApiData } from '../dal/api';
import styles from './TaskItem.module.css';

type Props = {
  task: GlobalTaskListItemJsonApiData;
  isSelected: boolean;
  onTaskSelect: (task: GlobalTaskListItemJsonApiData) => void;
};

export function TaskItem({ task, isSelected, onTaskSelect }: Props) {
  return (
    <li
      className={clsx([styles.task], isSelected && [styles.selected])}
      onClick={() => onTaskSelect(task)}>
      <div>
        <strong>Заголовок:</strong>
        <span className={clsx([styles.title], task.attributes.status == 2 && [styles.linethrough])}>
          {task.attributes.title}
        </span>
      </div>
      <div>
        <strong>Статус: </strong>
        <input type="checkbox" checked={task.attributes.status == 2} />
      </div>
      <div>
        <strong>Дата создания задачи: </strong>
        {new Date(task.attributes.addedAt).toLocaleDateString()}
      </div>
    </li>
  );
}
