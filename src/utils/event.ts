import type { Todo } from '@/types/todo';
import { createEventBus, createUseEventBus } from '@kambing86/event-bus-ts';

export enum EventType {
  ADD_TODO = 'addTodo',
}

export type EventDataMapping = {
  [EventType.ADD_TODO]: Todo;
};

export const eventBus = createEventBus<EventDataMapping>();

export const useEventBus = createUseEventBus<EventDataMapping>(eventBus);
