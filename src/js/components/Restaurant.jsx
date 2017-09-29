class Restaurant extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return <h1>{this.props.item.name}</h1>;
    }
}