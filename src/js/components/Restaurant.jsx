class Restaurant extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return <div className="app-restaurant-item">
            <div>
                <img src={this.props.item.logoUrl} />
                <h5>{this.props.item.name}</h5>
            </div>
        </div>;
    }
}