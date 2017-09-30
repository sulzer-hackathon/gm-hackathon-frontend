class Restaurant extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="app-restaurant-item" style={{transitionDelay: '.${this.props.delay * 2}s'}}>
            <div>
                <img src={this.props.item.logoUrl} />
                <h5><b>{this.props.index}.</b>&nbsp;{this.props.item.name}</h5>
            </div>
        </div>;
    }
}
