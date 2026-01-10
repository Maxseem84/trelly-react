import { useState } from 'react';
import styles from './MainPage.module.css';

import { TasksList } from './ui/TasksList';
import { TaskDetail } from './ui/TaskDetail';

export function MainPage() {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [boardId, setBoardId] = useState<string | null>(null);
  return (
    <div>
      <div className={styles.container}>
        <TasksList
          selectedTaskId={selectedTaskId}
          setSelectedTaskId={setSelectedTaskId}
          setBoardId={setBoardId}
        />
        <TaskDetail selectedTaskId={selectedTaskId} boardId={boardId} />
      </div>
    </div>
  );
}
