const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard(index)
        console.log('click', index);
    }
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}
export default Square