import { formatPrice } from "../utils/formatPrice"
import { formatDate } from "../utils/formatDate"
import { formatWeekday } from "../utils/formatWeekday"
import clsx from "clsx";

function Tariff({selected, selectTariff, onSelectTariff}) {
    
     if (!selected) {
    return null
  }
    return (
        <ul className="pt-1.25 pb-6.25">
            <li className="mb-6">
                <article 
                    onClick={() => {onSelectTariff('economy')}}
                    className={clsx(
                        "max-w-112.5 mx-auto bg-white rounded-[10px] cursor-pointer",

                        selectTariff === 'economy' && 'border border-[#015c65]'
                    )}>
                    <div className="flex justify-between">
                        <div className="flex flex-col px-4 p-3.75 border-r border-[#e4e7e8]">
                            <h3 className="mb-2.5 uppercase text-[#35c0cd]">Эконом</h3>
                            <p className="mb-3.75 text-[17px] leading-5">{formatPrice(selected.economy)}</p>
                            <button 
                                className="w-12/12 py-1.25 px-6.25 text-[14px] 
                                leading-4.25 text-white bg-[#ff7800] 
                                border-none rounded-[5px] cursor-pointer ">Выбрать</button>
                        </div>
                        <div>  
                            <div className="flex justify-between gap-2.5 p-3.75">
                                <div className="">
                                    <p className="text-[#015c65] mb-1.25">11:55</p>
                                    <p className="text-[#999999] mb-0.75 text-[12px] leading-3.5">Санкт-Питербург</p>
                                    <p className="text-[#999999] mb-0.75 text-[12px]">
                                        <span>{formatWeekday(selected.date)},</span>
                                        <span>{formatDate(selected.date)}</span>
                                    </p>
                                </div>
                                <div className="flex flex-col w-27.5 self-center gap-px ">
                                    <span className="text-[#999999] text-[10px] self-center">В пути: 3ч 15м</span>
                                    <span className="w-full h-0.5 bg-[#cdd4de] rounded-full"></span>
                                    <div className="flex justify-between"><span>LED</span><span>BUS</span></div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[#015c65] mb-1.25">15:10</p>
                                    <p className="text-[12px] text-[#999999] leading-3.5 mb-0.75">Батуми</p>
                                    <p className="text-[12px] text-[#999999] leading-3.5 mb-0.75">
                                        <span>{formatWeekday(selected.date)}, </span>
                                        <span>{formatDate(selected.date)}</span>
                                    </p>
                                </div>
                            </div>
                            <ul className="flex gap-2.5 mt-auto">
                                <li className="flex items-center gap-1"> 
                                    <span className="inline-block w-1.25 h-1.25 bg-[#d9d9d9] rounded-[50%]"></span>
                                    <span className="text-[12px] text-[#333333] leading-3.5">Страховка</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </li>
            <li className="mb-6 ">
                <article 
                    onClick={() => {onSelectTariff('business')}}
                    className={clsx(
                        "max-w-112.5 mx-auto bg-white rounded-[10px] cursor-pointer",

                        selectTariff === 'business' && 'border border-[#015c65]'
                    )
                }>
                    <div className="flex justify-between">
                        <div className="flex flex-col px-4 p-3.75 border-r border-[#e4e7e8]">
                            <h3 className="mb-2.5 uppercase text-[#35c0cd]">Бизнес</h3>
                            <p className="mb-3.75 text-[17px] leading-5">{formatPrice(selected.business)}</p>
                            <button 
                                className="w-12/12 py-1.25 px-6.25 text-[14px] 
                                leading-4.25 text-white bg-[#ff7800] 
                                border-none rounded-[5px] cursor-pointer ">Выбрать</button>
                        </div>
                        <div>
                            <div className="flex gap-2.5 p-3.75">
                                <div className="">
                                    <p className="text-[#015c65] mb-1.25">11:55</p>
                                    <p className="text-[#999999] mb-0.75 text-[12px] leading-3.5">Санкт-Питербург</p>
                                    <p className="text-[#999999] mb-0.75 text-[12px]">
                                        <span>{formatWeekday(selected.date)},</span>
                                        <span>{formatDate(selected.date)}</span>
                                    </p>
                                </div>
                                <div className="flex flex-col w-27.5 self-center gap-px ">
                                    <span className="text-[#999999] text-[10px] self-center">В пути: 3ч 15м</span>
                                    <span className="w-full h-0.5 bg-[#cdd4de] rounded-full"></span>
                                    <div className="flex justify-between"><span>LED</span><span>BUS</span></div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[#015c65] mb-1.25">15:10</p>
                                    <p className="text-[12px] text-[#999999] leading-3.5 mb-0.75">Батуми</p>
                                    <p className="text-[12px] text-[#999999] leading-3.5 mb-0.75">
                                        <span>{formatWeekday(selected.date)}, </span>
                                        <span>{formatDate(selected.date)}</span>
                                    </p>
                                </div>
                            </div>
                            <ul className="flex gap-2.5 mt-auto">
                                <li className="flex items-center gap-1"> 
                                    <span className="inline-block w-1.25 h-1.25 bg-[#d9d9d9] rounded-[50%]"></span>
                                    <span className="text-[12px] text-[#333333] leading-3.5">Страховка</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <span className="inline-block w-1.25 h-1.25 bg-[#d9d9d9] rounded-[50%]"></span>
                                    <span className="text-[12px] text-[#333333] leading-3.5">Питание</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <span className="inline-block w-1.25 h-1.25 bg-[#d9d9d9] rounded-[50%]"></span>
                                    <span className="text-[12px] text-[#333333] leading-3.5">Багаж</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </li>
        </ul>
    )
}

export default Tariff