import { apiRequest } from "../api/api"

export const transactionService =  {
    add: (data)=>apiRequest('/api/transaction',{
        method : "POST",
        body : JSON.stringify(data)
    }),
};