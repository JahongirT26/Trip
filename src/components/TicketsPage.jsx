import { useState } from 'react'
import clsx from "clsx"
import Calendar from './Calendar'
import Container from './Container'
import Tariff from './Tariff'
import { APP_ROUTE } from '../constants/routes'


function TicketsPage({shownTickets, shift, setShift, maxShift, tickets}) {
    const [activePage, setActivePage] = useState(APP_ROUTE.CALENDAR)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectTariff, setSelectTariff] = useState('economy');
    const selectedDateTickets = tickets.find(({date}) => (date === selectedDate))
    
    const getContent = (activePage) => {
        switch (activePage) {
                case APP_ROUTE.CALENDAR:
                    return ( 
                        <Calendar
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            maxShift={maxShift}
                            shift={shift}
                            setShift={setShift}
                            shownTickets={shownTickets} 
                        />
                    );
                case APP_ROUTE.TARIFF:
                    return (
                        <Tariff
                            selected={selectedDateTickets}
                            shownTickets={shownTickets}
                            selectTariff={selectTariff}
                            onSelectTariff={setSelectTariff}
                        />
                    );
                default: 
                    return <div>404</div>
        }
    }
    return (
        <Container>
            <section className="pt-5 grow">
                <h1 className="flex justify-center items-center gap-1.25 mb-5 text-base">
                    <span className="text-(--color-primary)">Маршрут:</span>
                    <span className="text-[#333333]">Санкт-Питербург<span className="text-[#999999]">(LED)</span></span>
                    <span className="w-4.5 h-0 border-t border-[#333333]"></span>
                    <span className="text-[#333333]">Батуми<span className="text-[#999999]">(BUS)</span></span>
                </h1>
                <ul className="flex justify-center mb-6.25">
                    <li><button 
                            onClick={() => setActivePage(APP_ROUTE.CALENDAR)}
                            className={clsx(
                                "w-55 py-2.5   text-[16px] border cursor-pointer",
                                'disabled:opacity-50',
                                'disabled:cursor-default',
                                activePage === APP_ROUTE.CALENDAR ? "text-white bg-[#015c65]" :"text-[#015c65] bg-white"
                            )}>Таблица цен
                    </button></li>
                    <li><button
                                disabled={!selectedDate}
                                onClick={() => setActivePage(APP_ROUTE.TARIFF)}
                                className={clsx(
                                    "w-55 py-2.5 text-[16px] border cursor-pointer",
                                    'disabled:opacity-50',
                                    'disabled:cursor-default',
                                    activePage === APP_ROUTE.TARIFF ? "text-white bg-[#015c65]" :"text-[#015c65] bg-white"
                                )}>Сравнение цен
                    </button></li>
                </ul>
            {getContent(activePage)}
            </section>
        </Container>
    )
}

export default TicketsPage