import Footer from './components/Footer'
import Header from './components/Header'
import TicketsPage from './components/TicketsPage'

import { tickets } from './data/tickets'

import useCalendar from './hooks/useCalendar'

function App() {
  const {
    shift,
    setShift,
    shownTickets,
    maxShift
  } = useCalendar(tickets)
  return (
    <div className='min-h-screen flex flex-col bg-[#f5f5f5]'>
      <Header/>
      <main className='grow'>
        <TicketsPage
          maxShift={maxShift}
          shift={shift}
          setShift={setShift}
          shownTickets={shownTickets}
        />
      </main>
      <Footer/>
    </div>
  )
}

export default App
