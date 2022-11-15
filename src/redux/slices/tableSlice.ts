import { createSlice } from '@reduxjs/toolkit'
import { IconList } from '../../components/Main/Main';

const initialState = {
   dataRow: [
      { id: 0, rowName: 'Южная строительная площадка', salary: '20 348', equipment: "1 750", overheads: '108,07', estimated: '1 209 122,5', icon: IconList[0].icon },
      { id: 1, rowName: 'Фундаментальные работы', salary: '20 348', equipment: "1 750", overheads: '108,07', estimated: '1 209 122,5', icon: IconList[1].icon },
      { id: 2, rowName: 'Статья работы № 1', salary: '20 348', equipment: "1 750", overheads: '108,07', estimated: '189 122,5', icon: IconList[2].icon },
      { id: 3, rowName: 'Статья работы № 2', salary: '38 200', equipment: "1 200", overheads: '850', estimated: '1 020 000', icon: IconList[3].icon },
   ]
}

export const tableSlice = createSlice({
   name: 'table',
   initialState,
   reducers: {

   }
})

export const { } = tableSlice.actions;

export default tableSlice.reducer;