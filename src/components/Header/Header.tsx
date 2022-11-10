import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button, Tooltip, Avatar } from '@mui/material'
import React, { useState } from 'react'

const SelectorsFromHeader = [
   { id: 1, title: 'Просмотр', },
   { id: 2, title: 'Управление', },
]

const BorderStyleRigth = { borderRight: 1, borderColor: '#414144' }
const BorderStyleBottom = { borderBottom: 1, borderColor: '#414144' }
const BorderStyleBottomWithFG = { borderBottom: 1, borderColor: '#414144', flexGrow: 2, }

const Header = () => {
   const [selected, setSelected] = useState(0);
   const onClickSwitchSelected = (i: number) => setSelected(i)
   return (
      <div className='header'>
         <div className="header__container">
            <Box sx={BorderStyleBottomWithFG}>
               <AppBar elevation={0} color='secondary' position="relative">
                  <Box sx={BorderStyleBottom} className="header__up">
                     <div className="up__menu">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z" fill="#A1A1AA" />
                        </svg>
                     </div>
                     <div className="up__button">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7 4V0L0 7L7 14V9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z" fill="#A1A1AA" />
                        </svg>
                     </div>
                     <div className="up__selectors">
                        {SelectorsFromHeader.map((s) =>
                           <div key={s.id}>
                              <div
                                 style={selected === s.id ? { borderBottom: '2px solid white', boxSizing: 'border-box' } : { borderBottom: 'none', boxSizing: 'border-box' }} className="selectors__title"
                                 onClick={() => { onClickSwitchSelected(s.id) }}>
                                 {s.title}
                              </div>
                           </div>
                        )
                        }
                     </div>
                  </Box>
                  <Box className="header__down">
                     <Box sx={BorderStyleRigth} className="down__title-project">
                        <div className='title-project__info'>
                           <div className="title-project__title">Название проекта</div>
                           <div className="title-project__abbreviation">Аббревиатура</div>
                        </div>
                        <div className="title-project__checkmark">
                           <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="white" />
                           </svg>
                        </div>
                     </Box>
                     <Box sx={BorderStyleRigth} className="down__main-title">
                        Строительно-монтажные работы
                     </Box>
                  </Box>
               </AppBar>
            </Box>
         </div>
      </div>
   )
}

export default Header
