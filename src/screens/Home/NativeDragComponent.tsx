import React, { FC, useState } from 'react';

// const NativeDragComponent: FC = () => {
//   const [list, setList] = useState([{ currentList: 'first' }]);
//
//   const handleDrop = (e: any) => {
//     e.preventDefault();
//     const idElement = e.dataTransfer.getData('text');
//     console.log('idElement', idElement);
//
//     if (idElement === 'first') {
//       setList([{ currentList: 'second' }]);
//     } else {
//       setList([{ currentList: 'first' }]);
//     }
//   };
//
//   return (
//     <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e)}>
//       <div style={{ width: '300px', height: '300px', background: 'blue' }}>
//         {list.map(({ currentList }, index) => {
//           if (currentList === 'first') {
//             return (
//               <div
//                 key={index}
//                 id={currentList}
//                 style={{ width: '100px', height: '100px', background: 'red' }}
//                 draggable
//                 onDragStart={(e: any) => {
//                   e.dataTransfer.setData('text', e.target.id);
//                 }}
//               />
//             );
//           }
//         })}
//       </div>
//
//       <div style={{ width: '300px', height: '300px', background: 'green' }}>
//         {list.map(({ currentList }, index) => {
//           if (currentList === 'second') {
//             return (
//               <div
//                 key={index}
//                 id={currentList}
//                 style={{ width: '100px', height: '100px', background: 'red' }}
//                 draggable
//                 // `onDragStart` сохраняет `id` квадратика в `dataTransfer`.
//                 // В onDragStart событии, id элемента берется из DOM элемента, на котором событие было вызвано.
//                 onDragStart={(e: any) => {
//                   console.log('e.target.id', e.target.id);
//                   e.dataTransfer.setData('text', e.target.id);
//                 }}
//               />
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// };

// Компонент проверяет значение `currentList` для каждого элемента в `list`
// и рендерит квадратик в соответствующей области.
const NativeDragComponent: FC = () => {
  const [list, setList] = useState([{ currentList: 'first' }]);

  // `handleDrop` проверяет, в какую область был сброшен элемент.
  // Если текущий `id` квадратика совпадает с `targetList`, состояние `list` обновляется.
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetList: 'first' | 'second') => {
    e.preventDefault();
    const idElement = e.dataTransfer.getData('text');

    if (idElement === 'first' && targetList === 'second') {
      setList([{ currentList: 'second' }]);
    } else if (idElement === 'second' && targetList === 'first') {
      setList([{ currentList: 'first' }]);
    }
  };

  return (
    <div>
      <div
        style={{ width: '300px', height: '300px', background: 'blue' }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, 'first')}
      >
        {list.map(
          ({ currentList }, index) =>
            currentList === 'first' && (
              <div
                key={index}
                id={currentList}
                style={{ width: '100px', height: '100px', background: 'red' }}
                draggable
                // `onDragStart` сохраняет `id` квадратика в `dataTransfer`.
                onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
                  e.dataTransfer.setData('text', (e.target as HTMLDivElement).id);
                }}
              />
            )
        )}
      </div>

      <div
        style={{ width: '300px', height: '300px', background: 'green' }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, 'second')}
      >
        {list.map(
          ({ currentList }, index) =>
            currentList === 'second' && (
              <div
                key={index}
                id={currentList}
                style={{ width: '100px', height: '100px', background: 'red' }}
                draggable
                onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
                  e.dataTransfer.setData('text', (e.target as HTMLDivElement).id);
                }}
              />
            )
        )}
      </div>
    </div>
  );
};

export default NativeDragComponent;
