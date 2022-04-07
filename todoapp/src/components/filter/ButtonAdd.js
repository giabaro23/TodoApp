import React from "react";

class ButtonAdd extends React.Component{
    render(){
        return(
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button type="button" className="btn btn-info btn-block marginB10">Add Item</button>
        </div>
        );
    }
}

export default ButtonAdd;