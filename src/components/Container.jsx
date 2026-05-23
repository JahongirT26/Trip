function Container({children}) {
    return (
        <div className="max-w-495 mx-auto px-6.25 flex flex-col">
            {children}
        </div>
    )
}

export default Container