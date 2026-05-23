import { useState } from 'react'
import clsx from "clsx"
import Calendar from './Calendar'
import Container from './Container'
import Tariff from './Tariff'

function TicketsPage({shownTickets, shift, setShift, maxShift}) {
    const [activePage, setActivePage] = useState('calendar')
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
                            onClick={() => setActivePage("calendar")}
                            className={clsx(
                                "w-55 py-2.5   text-[16px] border cursor-pointer",
                                'disabled:opacity-50',
                                'disabled:cursor-default',
                                activePage === 'calendar' ? "text-white bg-[#015c65]" :"text-[#015c65] bg-white"
                            )}>Таблица цен
                    </button></li>
                    <li><button
                                onClick={() => setActivePage("tariff")}
                                className={clsx(
                                    "w-55 py-2.5 text-[16px] border cursor-pointer",
                                    'disabled:opacity-50',
                                    'disabled:cursor-default',
                                    activePage === 'tariff' ? "text-white bg-[#015c65]" :"text-[#015c65] bg-white"
                                )}>Сравнение цен
                    </button></li>
                </ul>
            <Calendar 
                maxShift={maxShift}
                shift={shift}
                setShift={setShift}
                shownTickets={shownTickets} 
            />
            <Tariff />
            </section>
        </Container>
    )
}

export default TicketsPage