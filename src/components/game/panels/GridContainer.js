const GridContainer = ({ children }) => {
    return (
        <div className="grid-container fluid">
            <div className="grid-x grid-padding-x grid-padding-y">
                {children}
            </div>
        </div>
    )
}

export default GridContainer