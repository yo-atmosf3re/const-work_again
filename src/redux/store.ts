import { configureStore } from '@reduxjs/toolkit'
import table from './slices/tableSlice'

export const store = configureStore({
   reducer: {
      table
   }
})