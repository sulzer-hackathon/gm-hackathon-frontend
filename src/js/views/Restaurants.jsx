class Restaurants extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(this.props.restaurants);
    }
    
    render() {
        var items = [];
        this.props.restaurants.forEach((item, index) => {
            items.push(<Restaurant key={index} item={item}/>);
        });
        return <div>{items}</div>;
    }
}