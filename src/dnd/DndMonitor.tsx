import { useDndMonitor } from '@dnd-kit/core';
import { useDispatch } from 'react-redux';
import { dragStart, dragOver, dragEnd } from 'src/store/dndSlice';
import { DroppableData } from './types';

export function DndMonitor(): null {
  const dispatch = useDispatch();

  useDndMonitor({
    onDragStart(event) {
      dispatch(dragStart(event.active.data.current?.dragItem ?? null));
    },

    onDragOver(event) {
      if (!event.over) {
        dispatch(dragOver({ overId: null, isAllowed: false }));
        return;
      }

      const data = event.over.data.current as DroppableData<any, any> | undefined;

      dispatch(
        dragOver({
          overId: event.over.id as string,
          isAllowed: Boolean(
            data?.canDrop &&
              data.canDrop(data.value, event.active.data.current?.dragItem?.value)
          ),
        })
      );
    },

    onDragEnd(event) {
      const data = event.over?.data.current as DroppableData<any, any> | undefined;
      const activeItem = event.active.data.current?.dragItem;

      if (activeItem && data?.canDrop?.(data.value, activeItem.value)) {
        data.onTake?.(data.value, activeItem.value);
      }

      dispatch(dragEnd());
    },

    onDragCancel() {
      dispatch(dragEnd());
    },
  });

  return null;
}