import { Animal, Medicine } from 'src/server.types';

export type DragItem =
  | {
      type: 'animal';
      value: Animal;
    }
  | {
      type: 'medicine';
      value: Medicine;
    };

export type DroppableData<TTarget, TItem> = {
  value: TTarget;
  canDrop?: (target: TTarget, item: TItem) => boolean;
  onTake?: (target: TTarget, item: TItem) => void;
};
