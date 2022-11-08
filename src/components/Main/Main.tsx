import React from 'react'

const TitleColumnsItem = [
   'Уровень',
   'Наименование работ',
   'Основная з/п',
   'Оборудование',
   'Накладные расходы',
   'Сметная прибыль',
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
            <div className="container__first-column">
               <div className="first-column__level-one"></div>
               <div className="first-column__title-work"></div>
               <div className="first-column__salary"></div>
               <div className="first-column__equipment-costs"></div>
               <div className="first-column__overheads"></div>
               <div className="first-column__estimated"></div>
            </div>
            <div className="container__second-column">
               <div className="second-column__level-one"></div>
               <div className="second-column__title-work"></div>
               <div className="second-column__salary"></div>
               <div className="second-column__equipment-costs"></div>
               <div className="second-column__overheads"></div>
               <div className="second-column__estimated"></div>
            </div>
            <div className="container__third-column">
               <div className="third-column__level-one"></div>
               <div className="third-column__title-work"></div>
               <div className="third-column__salary"></div>
               <div className="third-column__equipment-costs"></div>
               <div className="third-column__overheads"></div>
               <div className="third-column__estimated"></div>
            </div>
            <div className="container__fourth-column">
               <div className="fourth-column__level-one"></div>
               <div className="fourth-column__title-work"></div>
               <div className="fourth-column__salary"></div>
               <div className="fourth-column__equipment-costs"></div>
               <div className="fourth-column__overheads"></div>
               <div className="fourth-column__estimated"></div>
            </div>
         </div>
      </div>
   )
}

export default Main
