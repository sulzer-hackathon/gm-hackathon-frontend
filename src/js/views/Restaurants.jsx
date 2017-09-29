class Restaurants extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(this.props.restaurants);
    }

    render() {
        var items = [];
        this.props.restaurants.forEach((item, index) => {
            items.push(<Restaurant key={index} item={item} />);
        });
        return <div className="full-width app-restaurant">
            <h4>Here is what we found...</h4>
            <div className="fx-row full-width app-restaurant-list">{items}</div>
        </div>;
    }
}