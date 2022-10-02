import React from "react";

const Item = ({id,tittle,description,price,pictureUrl}) => {
    return(
        <div className="col">
            <div className="card" >
                <img src={pictureUrl} className="card-img-top" alt={tittle} />
                    <div className="card-body">
                        <div className="text-center mt-1 text-decoration-none">
                            <h5 className="card-title text-decoration-none"><b>{tittle}</b></h5>
                            <p className="text-primary mb-1 pb-3 text-decoration-none"> {description}</p>
                            <p className="text-primary mb-1 pb-3 text-decoration-none"> ${price}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Item;