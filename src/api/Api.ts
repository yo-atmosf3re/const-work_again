import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://185.244.172.108:8081/v1/outlay-rows/entity/',
   headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
   }
})

export type RowResponseType = {
   equipmentCosts: number
   estimatedProfit: number
   machineOperatorSalary: number
   mainCosts: number
   materials: number
   mimExploitation: number
   parentId: number | null
   rowName: string,
   salary: number
   supportCosts: number
}

export const tableAPI = {
   // ** Completed
   createEntity: async () => {
      const response = await instance.post(`create`)
      return response.data.id
   },
   // todo Failed
   createRow: async (eId: number, request: RowResponseType) => {
      const response = await instance.post(`${eId}/row/create`, { request })
      console.log(response)
      return response
   },
   // ** Completed
   getTreeRows: async (eId: number) => {
      const response = await instance.get(`${eId}/row/list`)
      return response.data
   },
   updateRow: async (eId: number, rId: number, updatedDataRow: RowResponseType) => {
      const response = await instance.post(`${eId}/row/${rId}/update`, { updatedDataRow })
      return response.data
   }
}

// const response = await instance.post(`${eId}/row/create`, { row })