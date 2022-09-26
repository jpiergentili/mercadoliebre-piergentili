import React from "react";

const Item = ({id,tittle,description,price,pictureUrl}) => {
    return(
        <div className="col-md-2 py-3">
            <div className="card card-ofertas" >
                <img src={pictureUrl} className="card-img-top" alt={tittle} />
                    <div className="card-body">
                        <h5 className="card-title"><b>{tittle}</b></h5>
                        <p className="card-text text-center"> {description}</p>
                        <p className="card-text text-center"> ${price}</p>
                    </div>
            </div>
        </div>
    )
}

export default Item;