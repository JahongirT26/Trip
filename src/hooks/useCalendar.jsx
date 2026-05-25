import { useState } from "react";

function useCalendar(tickets) {
    const [shift, setShift] = useState(0)
    
    const cortedTickets = [...tickets].sort((a,b) => {
        return a.date > b.date ? 1 : -1
    })
    
    const DAYSHOW = 5
    const shownTickets = cortedTickets.slice(shift, DAYSHOW + shift)
    
    const maxShift = tickets.length - DAYSHOW;
    return (
        {
            shift,
            setShift,
            shownTickets,
            maxShift
        }
    )
}
export default useCalendar