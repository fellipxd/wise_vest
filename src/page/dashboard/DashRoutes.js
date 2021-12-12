import Analytics from "../../components/Analytics/Analytics"
import ExpenseTracker from "../../components/ExpenseTracker/ExpenseTracker"
import History from "../../components/history"

export  const dashRoutes = [
    '/history',
    '/analytics',
    '/expense-tracker'
]
export const Transactions = () =>{
   return(
    <History/>
   )
}
export const Beta = () =>{
   return(
    <Analytics/>
   )
}
export const Tracker = () =>{
   return(
    <ExpenseTracker/>
   )
}