import React from 'react';


class PetItem extends React.Component{
    constructor(props){
        super(props);
    }    
   
    render(){
        const {name, owner, description, date } = this.props;
        return (
            <li>
                <div className="float-right">{date}</div>
                
                <h3>
                <span>{name}</span> 
                <button className="btn btn-danger btn-sm">Удалить</button>
                </h3>

                <h5>{owner}</h5>
                <p>{description}</p>
            </li>
        )
    }
};

export default PetItem;