const PopularIcon = ({ height, width }) => {
    return (
        <>
            <svg width={width} height={height} className="text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4v6m-4-6v3-3ZM8 4v6-6Z"></path>
                <path d="M12 18.5 9 20l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2L15 20l-3-1.5Z"></path>
            </svg>
        </>
    )
}

export default PopularIcon;