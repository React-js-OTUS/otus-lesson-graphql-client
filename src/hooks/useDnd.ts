import { useSelector, useDispatch } from 'react-redux';
import { dragStart, dragOver, dragEnd } from 'src/store/dndSlice';
import { RootState } from 'src/store';

export function useDnd() {
  const dispatch = useDispatch();
  const activeItem = useSelector((state: RootState) => state.dnd.activeItem);
  const activeOverId = useSelector((state: RootState) => state.dnd.activeOverId);
  const isAllowed = useSelector((state: RootState) => state.dnd.isAllowed);

  return {
    activeItem,
    activeOverId,
    isAllowed,
    dragStart: (item: any) => dispatch(dragStart(item)),
    dragOver: (overId: string | null, allowed: boolean) => dispatch(dragOver({ overId, isAllowed: allowed })),
    dragEnd: () => dispatch(dragEnd()),
  };
}
