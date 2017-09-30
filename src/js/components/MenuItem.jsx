class MenuItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="app-menu-item" style={{transitionDelay: '.${this.props.delay * 2}s'}}>
            <div>
                <h5>{this.props.index}.&nbsp;{this.props.item.name}</h5>
                {/* <p>{this.props.item.description}</p> */}
                <p>Price:&nbsp;{`$ ${this.props.item.basePrice}`}</p>
            </div>
        </div>;
    }
}
