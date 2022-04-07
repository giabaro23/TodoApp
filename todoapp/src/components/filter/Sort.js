import React from "react";

class Sort extends React.Component {
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort by <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a role="button">Name ASC</a></li>
                        <li><a role="button">Name DESC</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a role="button">Level ASC</a></li>
                        <li><a role="button">Level DESC</a></li>
                    </ul>
                    <span className="label label-success label-medium">NAME - DESC</span>
                </div>
            </div>
        );
    }
}

export default Sort;