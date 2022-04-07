import React from "react";

class NewsItem extends React.Component {
    levelSwitch(param) {
        switch (param) {
            case 'High':
                return 'label-danger';
            case 'Medium':
                return 'label-info';
            case 'Small':
                return 'label-default'
            default:
                return 'label-default';
        }
    }
    labelLevel = 'label' + ' ' + this.levelSwitch(this.props.level);
    render() {
        return (
            <tr>
                <td className="text-center">{this.props.id}</td>
                <td>{this.props.name}</td>
                <td className="text-center"><span className={this.labelLevel}>{this.props.level}</span></td>
                <td>
                    <button type="button" className="btn btn-warning btn-sm">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        );
    }
}

export default NewsItem;