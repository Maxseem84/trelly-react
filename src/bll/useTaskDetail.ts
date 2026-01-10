import { useState, useEffect } from 'react';
import { type TaskDetailsData } from '../dal/api';
import { getTask } from '../dal/api';

export function useTaskDetail(selectedTaskId: string | null, boardId: string | null) {
  const [taskDetail, setTaskDetail] = useState<TaskDetailsData | null>(null);
  useEffect(() => {
    if (!selectedTaskId && !boardId) return;
    const promise = getTask(selectedTaskId, boardId);
    promise.then((json) => {
      setTaskDetail(json.data);
    });
  }, [selectedTaskId]);
  return { taskDetail };
}
