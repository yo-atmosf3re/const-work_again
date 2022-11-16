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
   // useEffect(() => {
   //    const eID = axios.post(`http://185.244.172.108:8081/v1/outlay-rows/entity/create`)
   //    axios.get(`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/list`)
   // }, [])
   const url = `http://185.244.172.108:8081/v1/outlay-rows/entity/create`

   useEffect(() => {
      const fetchData = async () => {
         try {
            // ** Create entity - completed
            const entityCreate = await fetch(url, {
               method: "POST",
               mode: "cors",
               headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
               },
            })
            const entity = await entityCreate.json()
            const eID = entity.id
            console.log(entity, 'Creating entity')
            // ** Create row inside the entity - completed
            const createRowInEntity = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/create`, {
               method: 'POST',
               mode: "cors",
               headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
               },
               body: JSON.stringify({
                  equipmentCosts: 0,
                  estimatedProfit: 0,
                  machineOperatorSalary: 0,
                  mainCosts: 0,
                  materials: 0,
                  mimExploitation: 0,
                  overheads: 0,
                  parentId: null,
                  rowName: 'Test',
                  salary: 0,
                  supportCosts: 0
               })
            })
            const newRow = await createRowInEntity.json()
            console.log(newRow, 'New row')
            // ** Get data about entity - completed
            const getData = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/list`, {
               method: 'GET',
               mode: "cors",
               headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
               },
            })
            const getDataResult = await getData.json()
            console.log(getDataResult, 'Data row')
            const rID = getDataResult.map((m: any) => m.id)
            console.log(rID[0], 'Row Id')
            // ** Update row - completed
            const updateRow = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/${rID[0]}/update`, {
               method: 'POST',
               mode: "cors",
               headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
               },
               body: JSON.stringify({
                  equipmentCosts: 1,
                  estimatedProfit: 1,
                  machineOperatorSalary: 1,
                  mainCosts: 1,
                  materials: 1,
                  mimExploitation: 0,
                  overheads: 0,
                  parentId: null,
                  rowName: 'Test 1',
                  salary: 0,
                  supportCosts: 0
               })
            })
            const updateResult = await updateRow.json()
            console.log(updateResult, 'Updating row')
            // ** Delete row - completed
            const deleteRow = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/${rID}/delete`, {
               method: 'DELETE',
               mode: "cors",
               headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
               },
            })
            const deleteRowResponse = await deleteRow.json()
            console.log(deleteRowResponse, 'Delete row')
            console.log(getDataResult, 'Data row again')
         } catch (error) {
            console.log(error)
         }
      }
      fetchData()
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
                     <>{IconList.map(i => t.id === i.id && i.icon)}</>
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


