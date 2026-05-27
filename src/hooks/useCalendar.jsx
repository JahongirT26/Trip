import { useState } from "react";

function useCalendar(tickets) {
    const sortedTickets = [...tickets].sort((a,b) => {
        return a.date > b.date ? 1 : -1
    })
    const DAYSHOW = 5
    const maxShift = tickets.length - DAYSHOW;
    
    
    const [shift, setShift] = useState(0)

    
    const shownTickets = sortedTickets.slice(shift, DAYSHOW + shift)
    
    
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