import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarTitleSelectors = [
   { id: 1, title: 'По проекту', },
   { id: 2, title: 'Объекты', },
   { id: 3, title: 'РД', },
   { id: 4, title: 'МТО', },
   { id: 5, title: 'СМР', },
   { id: 6, title: 'График', },
   { id: 7, title: 'МиМ', },
   { id: 8, title: 'Рабочие', },
   { id: 9, title: 'Капвложения', },
   { id: 10, title: 'Бюджет', },
   { id: 11, title: 'Финансирование', },
   { id: 12, title: 'Панорамы', },
   { id: 13, title: 'Камеры', },
   { id: 14, title: 'Поручения', },
   { id: 15, title: 'Контрагенты', },
]

const BackgroundColorOld = {
   backgroundColor: '#27272A',
}
const BackgroundColorNew = {
   backgroundColor: '#A1A1AA',
}

const Sidebar = () => {
   const [selected, setSelected] = useState(0);
   const onClickSwitchSelected = (i: number) => setSelected(i)

   return (
      <aside className='sidebar'>
         <Box className="sidebar__container">
            <div className="container__title-selectors">
               {SidebarTitleSelectors.map((s, i) => {
                  return <div
                     key={i}
                     onClick={() => { onClickSwitchSelected(s.id) }}
                     className='title-selectors__item'
                     style={selected === s.id ? BackgroundColorNew : BackgroundColorOld}>
                     <div className='title-selectors__icon'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z" fill="white" />
                        </svg>
                     </div>
                     <div className="title-selectors__title">
                        {/* <Link to={s.title.toLowerCase()}>{s.title}</Link> */}
                        {s.title}
                     </div>
                  </div>
               }
               )}
            </div>
         </Box>
      </aside>
   )
}

export default Sidebar
