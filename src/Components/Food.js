const Food = ({foodName,image_url}) => {
    return (
        <div className="single-food">
            <h2>{foodName}</h2>
            <img src={image_url} alt={foodName}></img>
        </div>
    )
}

export default Food