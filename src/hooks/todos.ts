import { atom, useAtom } from 'jotai';

import type { Todo } from '@/types/todo';

const todosAtom = atom<Todo[]>([]);

export const useTodos = () => {
  return useAtom(todosAtom);
};
