import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'src/components/Page';
import { ManagePanel } from 'src/components/ManagePanel';
import s from './Home.sass';

// const NativeDragComponent = () => {
//   const [list, setList] = useState([{ currentList: 'first' }]);

//   return (
//     <div
//       onDragOver={(e) => e.preventDefault()}
//       onDrop={(e) => {
//         const idElement = e.dataTransfer.getData('text');

//         if (idElement === 'first') {
//           setList([{ currentList: 'second' }]);
//         } else {
//           setList([{ currentList: 'first' }]);
//         }
//       }}
//     >
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
//                   console.log('e.target.id', e.target.id);
//                   e.dataTransfer.setData('text', e.target.id);
//                 }}
//               />
//             );
//           }
//         })}
//       </div>

//       <div style={{ width: '300px', height: '300px', background: 'green' }}>
//         {list.map(({ currentList }, index) => {
//           if (currentList === 'second') {
//             return (
//               <div
//                 key={index}
//                 id={currentList}
//                 style={{ width: '100px', height: '100px', background: 'red' }}
//                 draggable
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

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <Page title={t`screens.HomeScreen.title`} className={s.root}>
      {/* <NativeDragComponent /> */}
      <ManagePanel />
    </Page>
  );
};

export default Home;
