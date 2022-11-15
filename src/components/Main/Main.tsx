import axios from 'axios';
import React, { useState } from 'react'
import EditableSpan from './EditableSpan/EditableSpan';
import { LevelOne, LevelTwo, LevelThird, LevelRest } from './Level';

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
   { id: 3, rowName: 'Статья работы № 2', salary: '38 200', equipment: "1 200", overheads: '850', estimated: '1 020 000', icon: <LevelRest /> },
]

const Main = () => {
   // const [active, setActive] = useState<boolean>(false)
   // const activeHandler = () => setActive(!active)
   // console.log(active, 'from main')

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
                  return <div key={i} className="items__row">
                     {IconList.map(i => t.id === i.id && i.icon)}
                     <div className="row__title-work" > {< EditableSpan value={t.rowName} />}</div >
                     <div className="row__salary">{<EditableSpan value={t.salary} />}</div>
                     <div className="row__equipment-costs">{<EditableSpan value={t.equipment} />}</div>
                     <div className="row__overheads">{<EditableSpan value={t.overheads} />}</div>
                     <div className="row__estimated">{<EditableSpan value={t.estimated} />}</div>
                  </div>
               }
               )}
            </div>
         </div>
      </div>
   )
}

export default Main


