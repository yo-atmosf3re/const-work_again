import React from 'react'
import LevelOne from './Level/LevelOne'

const TitleColumnsItem = [
   'Уровень',
   'Наименование работ',
   'Основная з/п',
   'Оборудование',
   'Накладные расходы',
   'Сметная прибыль',
]
const DataRow = [
   { rowName: 'Южная строительная площадка', salary: '20 348', equipment: "1 750", overheads: '108,07', estimated: '1 209 122,5', },
   { rowName: 'Фундаментальные работы', salary: '20 348', equipment: "1 750", overheads: '108,07', estimated: '1 209 122,5', },
   { rowName: 'Статья работы № 1', salary: '20 348', equipment: "1 750", overheads: '108,07', estimated: '189 122,5', },
   { rowName: 'Статья работы № 2', salary: '38 200', equipment: "1 200", overheads: '850,', estimated: '1 020 000', },
]

const Main = () => {
   return (
      <div className='main'>
         <div className="main__container">
            <div className="container__title-columns">
               {TitleColumnsItem.map(t =>
                  <div className="title-columns__items">{t}</div>
               )}
            </div>
            <div className='container__items'>
               {DataRow.map(t =>
                  <div className="items__row">
                     <LevelOne />
                     <div className="row__title-work">{t.rowName}</div>
                     <div className="row__salary">{t.salary}</div>
                     <div className="row__equipment-costs">{t.equipment}</div>
                     <div className="row__overheads">{t.overheads}</div>
                     <div className="row__estimated">{t.estimated}</div>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default Main
