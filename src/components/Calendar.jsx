import clsx from 'clsx'
import awworLeft from '../assets/image/arrow-left.svg'
import awworRight from '../assets/image/arrow-right.svg'
import { formatDate } from '../utils/formatDate'
import { formatPrice } from '../utils/formatPrice'
import { formatWeekday } from '../utils/formatWeekday'
import { isWeekend } from '../utils/isWeekend'

function Calendar({shownTickets, shift, setShift, maxShift, selectedDate, setSelectedDate}) {
    return (
        <div>
            <div className="w-md mx-auto mb-3.75 flex justify-end gap-1.25">
           <button
                disabled={!shift}
                onClick={() => setShift(prev => prev - 1)}
                className="     disabled:opacity-50
                                disabled:cursor-default
                                flex justify-center items-center w-7.5 h-7.5 bg-white border border-[#015c65] rounded-lg cursor-pointer" >
                <img src={awworLeft} alt=''/>
            </button>
            <button
                disabled={shift === maxShift}
                onClick={() => setShift(prev => prev + 1)}
                className="     disabled:opacity-50
                                disabled:cursor-default
                                flex justify-center items-center w-7.5 h-7.5 bg-white border border-[#015c65] rounded-lg cursor-pointer" >
                <img src={awworRight} alt=''/>
            </button>
            </div>
            <table className='mx-auto mb-12.5 border-collapse'>
                <tbody>
                    <tr>
                            {shownTickets.map(({date}) => (
                                <th className='w-22.5 py-2.5 px-0.5 bg-[#5ec4cd] border border-[#028e9b] text-white' key={date}>
                                    <span
                                        className={clsx(
                                        'block font-bold mb-0.5',
                                        isWeekend(date) && 'text-[#ff7800]'
                                        )}
                                    >{formatWeekday(date)}</span>
                                    <span>{formatDate(date)}</span>
                                </th>
                            ))}
                    </tr>
                    <tr>
                            {shownTickets.map(({economy: price,date}) => (
                                <td 
                                    onClick={() => setSelectedDate(date)}
                                    className={clsx(
                                    'w-22.5 py-3.75 px-2.5 border border-[#028e9b] text-[#028e9b] cursor-pointer text-center',
                                    
                                    selectedDate === date ? 'bg-[rgba(1,92,101,.09)]' : 'bg-[white]'
                                    )}
                                    key={date}>
                                    <span>{formatPrice(price)}</span>
                                </td>
                            ))}
                    </tr>
               </tbody>
            </table>
        </div>
    )
}

export default Calendar