import React from "react";

class FormNewsAdd extends React.Component {
    render() {
        return (
            <tr>
                <td className="text-center">{this.props.id}</td>
                <td><input type="text" className="form-control" value={this.props.name} /></td>
                <td className="text-center">
                    <select className="form-control">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </td>
                <td>
                    <button type="button" className="btn btn-default btn-sm">Cancel</button>
                    <button type="button" className="btn btn-success btn-sm">Save</button>
                </td>
            </tr>

        );
    }
}

export default FormNewsAdd;