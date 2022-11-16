import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { divedesNumbers } from '../../utils/divedesNumbers';
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

export const IconList = [
   { id: 0, icon: <LevelOne />, },
   { id: 1, icon: <LevelTwo />, },
   { id: 2, icon: <LevelThird />, },
   { id: 3, icon: <LevelRest />, },
]

const DataRow = [
   { id: 0, rowName: 'Южная строительная площадка', salary: divedesNumbers(20348), equipment: divedesNumbers(1750), overheads: divedesNumbers(108.07), estimated: divedesNumbers(1209122.5), icon: IconList[0].icon },
   { id: 1, rowName: 'Фундаментальные работы', salary: divedesNumbers(20348), equipment: divedesNumbers(1750), overheads: divedesNumbers(108.07), estimated: divedesNumbers(1209122.5), icon: IconList[1].icon },
   { id: 2, rowName: 'Статья работы № 1', salary: divedesNumbers(20348), equipment: divedesNumbers(1750), overheads: divedesNumbers(108.07), estimated: divedesNumbers(189122.5), icon: IconList[2].icon },
   { id: 3, rowName: 'Статья работы № 2', salary: divedesNumbers(38200), equipment: divedesNumbers(1200), overheads: divedesNumbers(850), estimated: divedesNumbers(1020000), icon: IconList[3].icon },
]

const Main = () => {
   useEffect(() => {
      const eID = axios.post(`http://185.244.172.108:8081/v1/outlay-rows/entity/create`)
      axios.get(`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/list`)
   }, [])

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
                     <div className="row__title-work" > {<EditableSpan value={t.rowName} />}</div >
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


