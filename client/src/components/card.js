function Card({ img, name,desc }) {
    return (
        <div className="card">
            <div className="name"><h2>{name}</h2></div>

            <div className="card-body">
                <img src={img}  alt="img" className="card-img"/>
                <div className="desc"><p>{desc}</p></div>
            </div>
        </div>
    )
}

export default Card;