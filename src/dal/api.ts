type Status = 0 | 1 | 2 | 3;
type Priority = 0 | 1 | 2 | 3 | 4;

type TaskDetailsDto = {
  id: string;
  title?: string;
  description?: string;
  boardId: string;
  boardTitle: string;
  order: number;
  status: Status;
  priority: Priority;
  addedAt: string;
  updateAt: string;
  attachments: Array<string>;
};

export type TaskDetailsData = {
  id: string;
  type: string;
  attributes: TaskDetailsDto;
};

export type GetTaskOutput = {
  data: TaskDetailsData;
};

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) return undefined;
  return {
    'api-key': apiKey,
  };
};

export const getTask = (taskId: string | null, boardId: string | null) => {
  const promise: Promise<GetTaskOutput> = fetch(
    'https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + taskId,
    {
      headers: prepareHeaders(),
    },
  ).then((res) => res.json());
  return promise;
};

type GlobalTaskListItemDto = {
  id: string;
  title?: string;
  boardId: string;
  status: Status;
  priority: Priority;
  addedAt: string;
  attachmentsCount: number;
};

type JsonApiMeta = {
  page: number;
  pageSize: number;
  totalCount: number;
  pagesCount: number;
};

export type GlobalTaskListItemJsonApiData = {
  id: string;
  type: string;
  attributes: GlobalTaskListItemDto;
};

export type GlobalTaskListResponse = {
  data: GlobalTaskListItemJsonApiData[];
  meta: JsonApiMeta;
};

export const getTasks = () => {
  const promise: Promise<GlobalTaskListResponse> = fetch(
    'https://trelly.it-incubator.app/api/1.0/boards/tasks',
    {
      headers: prepareHeaders(),
    },
  ).then((res) => res.json());
  return promise;
};
