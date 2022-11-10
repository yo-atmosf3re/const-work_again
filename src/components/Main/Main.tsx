import React from 'react'
import LevelOne from './Level/LevelOne'
import LevelRest from './Level/LevelRest'
import LevelThird from './Level/LevelThird'
import LevelTwo from './Level/LevelTwo'

const TitleColumnsItem = [
   'Уровень',
   'Наименование работ',
   'Основная з/п',
   'Оборудование',
   'Накладные расходы',
   'Сметная прибыль',
]

const IconList = [
   { id: 0, icon: <LevelOne />, },
   { id: 1, icon: <LevelTwo />, },
   { id: 2, icon: <LevelThird />, },
   { id: 3, icon: <LevelRest />, },
]

const DataRow = [
   { id: 0, rowName: 'Южная строительная площадка', salary: '20 348', equipment: "1 750", overheads: '108,07', estimated: '1 209 122,5', icon: IconList[0].icon },
   { id: 1, rowName: 'Фундаментальные работы', salary: '20 348', equipment: "1 750", overheads: '108,07', estimated: '1 209 122,5', icon: <LevelTwo /> },
   { id: 2, rowName: 'Статья работы № 1', salary: '20 348', equipment: "1 750", overheads: '108,07', estimated: '189 122,5', icon: <LevelThird /> },
   { id: 3, rowName: 'Статья работы № 2', salary: '38 200', equipment: "1 200", overheads: '850,', estimated: '1 020 000', icon: <LevelRest /> },
   { id: 4, rowName: 'Статья работы № 2', salary: '38 200', equipment: "1 200", overheads: '850,', estimated: '1 020 000', icon: <LevelRest /> },
]

// for (let i = 1; DataRow.length >= i; i++) {
//    let iconIndex = IconList.filter(f => f.id === i)
//    let dataIndex = DataRow.filter(f => f.id === i)
//    console.log(iconIndex, 'index')
//    console.log(dataIndex, 'data-index')
//    // dataIndex.map(m => m.id === iconIndex[m.id])
//    // iconIndex.filter(f => f.id)
//    // console.log(DataRow.filter(f => f.id), 'data')
// }

const Main = () => {
   return (
      <div className='main'>
         <div className="main__container">
            <div className="container__title-columns">
               {TitleColumnsItem.map((t, i) =>
                  <div key={i} className="title-columns__items">{t}</div>
               )}
            </div>
            <div className='container__items'>
               {DataRow.map((t, i) => {
                  console.log(i)
                  return <div key={i} className="items__row">
                     {/* {IconList.map(m => m.id === t.id ? m.icon : <LevelRest />)} */}
                     {/* {IconList[t.id].icon} */}
                     <div className="row__title-work">{t.rowName}</div>
                     <div className="row__salary">{t.salary}</div>
                     <div className="row__equipment-costs">{t.equipment}</div>
                     <div className="row__overheads">{t.overheads}</div>
                     <div className="row__estimated">{t.estimated}</div>
                  </div>
               }
               )}
            </div>
         </div>
      </div>
   )
}

export default Main
