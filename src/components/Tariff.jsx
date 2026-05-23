
function Tariff() {
    return (
        <article className="w-112.5 mx-auto bg-white rounded-[10px]">
            <div className="flex justify-between">
                <div className="flex flex-col px-4 p-3.75 border-r border-[#e4e7e8]">
                    <h3 className="mb-2.5 uppercase text-[#35c0cd]">Эконом</h3>
                    <p className="mb-3.75 text-[17px] leading-5">14000</p>
                    <button 
                        className="w-12/12 py-1.25 px-6.25 text-[14px] 
                        leading-4.25 text-white bg-[#ff7800] 
                        border-none rounded-[5px] cursor-pointer ">Выбрать</button>
                </div>
                <div className="flex justify-between gap-2.5 p-3.75">
                    <div className="">
                        <p className="text-[#015c65] mb-1.25">11:55</p>
                        <p className="text-[#999999] mb-0.75 text-[12px]">Санкт-Питербург</p>
                        <p className="text-[#999999] mb-0.75 text-[12px]">пт. 3 марта</p>
                    </div>
                    <div className="flex flex-col w-27.5 self-center gap-px ">
                        <span className="text-[#999999] text-[10px] self-center">В пути: 3ч 15м</span>
                        <span className="w-full h-0.5 bg-[#cdd4de] rounded-full"></span>
                        <div className="flex justify-between"><span>LED</span><span>BUS</span></div>
                    </div>
                    <div className="text-right">
                        <p className="text-[#015c65] mb-1.25">15:10</p>
                        <p className="">Батуми</p>
                        <p className="">пт, 3 марта</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Tariff