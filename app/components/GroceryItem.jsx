var React = require('react');


module.exports = React.createClass({
    render: function(){
        return(
            <h4>
                <div className={this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</div>
            </h4>
        )
    }
})
