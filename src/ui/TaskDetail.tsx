import { useTaskDetail } from '../bll/useTaskDetail';
import styles from './TaskDetail.module.css';

type Props = {
  selectedTaskId: string | null;
  boardId: string | null;
};

export function TaskDetail({ selectedTaskId, boardId }: Props) {
  const { taskDetail } = useTaskDetail(selectedTaskId, boardId);
  return (
    <div className={styles.task}>
      <h2>Task details</h2>
      {!taskDetail && 'Track is not selected'}
      {!taskDetail && selectedTaskId && 'Loading...'}
      {taskDetail && selectedTaskId && taskDetail.id !== selectedTaskId && 'Loading...'}
      {taskDetail && selectedTaskId && taskDetail.id === selectedTaskId && (
        <div>
          <h3>Title: {taskDetail.attributes.title}</h3>
          <h4>Board Title: {taskDetail.attributes.boardTitle}</h4>
          <p>Description: {taskDetail.attributes.description ?? 'no description'}</p>
        </div>
      )}
    </div>
  );
}
