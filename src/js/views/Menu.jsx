class Menu extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(this.props.menuItems);

        this.onClick = this.onClick.bind(this);
        // this.triggerVoiceCommand = this.triggerVoiceCommand.bind(this);
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.triggerVoiceCommand();
        }, 3000);
    }

    triggerVoiceCommand() {
        var __object = { "user": null, "menuItem": [{ "apiKey": "6362137", "name": "Regular Pizza - Slice", "description": "  Choice of slice or whole pie.", "basePrice": 2.75 }, { "apiKey": "6362138", "name": "Regular Pizza - Whole Pie", "description": "  Choice of slice or whole pie.", "basePrice": 20.0 }, { "apiKey": "6362139", "name": "Sicilian Pizza - Slice", "description": "  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362140", "name": "Sicilian Pizza - Whole Pie", "description": "  Choice of slice or whole pie.", "basePrice": 23.0 }, { "apiKey": "6362141", "name": "Nonna Maria Pizza - Slice", "description": "Our signature pizza from our old family recipe. Thin crust with fresh mozzarella, homemade marinara sauce, the finest Parmesan and fresh basil.  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362142", "name": "Nonna Maria Pizza - Whole Pie", "description": "Our signature pizza from our old family recipe. Thin crust with fresh mozzarella, homemade marinara sauce, the finest Parmesan and fresh basil.  Choice of slice or whole pie.", "basePrice": 23.0 }, { "apiKey": "6362143", "name": "Grandma Pizza - Slice", "description": "Our homemade marinara sauce, mozzarella, Parmesan, olive oil and fresh garlic on a thick old-world crust.  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362144", "name": "Grandma Pizza - Whole Pie", "description": "Our homemade marinara sauce, mozzarella, Parmesan, olive oil and fresh garlic on a thick old-world crust.  Choice of slice or whole pie.", "basePrice": 23.0 }, { "apiKey": "6362145", "name": "White Pie - Slice", "description": "Mozzarella and ricotta cheese with fresh basil. No sauce.  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362146", "name": "White Pie - Whole Pie", "description": "Mozzarella and ricotta cheese with fresh basil. No sauce.  Choice of slice or whole pie.", "basePrice": 24.0 }, { "apiKey": "6362147", "name": "Vegetable Pie w/ Fresh Mozzarella", "description": null, "basePrice": 25.0 }, { "apiKey": "6362148", "name": "Mushroom Pie", "description": "We NEVER used canned mushrooms!  You WILL taste the difference!", "basePrice": 24.0 }, { "apiKey": "6362149", "name": "Grilled Chicken Mozzarella Pie", "description": null, "basePrice": 25.0 }, { "apiKey": "6362150", "name": "House Special Pie", "description": "Everything on it!", "basePrice": 28.0 }, { "apiKey": "6362151", "name": "Gluten Free Pizza", "description": "100% gluten free 13\".", "basePrice": 16.0 }] };
        
        // voiceService.startSpeechToText(this.onTranscript, 'Please choose a number!');
    }

    onTranscript(command) {
        console.log(command);
        webService.executeCommand(command).then((res) => {
            console.log(res.data);
        }).catch((res) => {
            debugger;
        });
    }

    onClick(e) {
        e.preventDefault();
        console.log(e);
        console.log('The link was clicked.');
    }

    render() {
        var items = [];
        this.props.restaurants.forEach((item, index) => {
            items.push(<Restaurant onClick={this.onClick} key={index} item={item} index={index + 1} />);
        });
        return <div className="full-width app-restaurant">
            <h4>Here is what we found...</h4>
            <div className="fx-row full-width app-restaurant-list">{items}</div>
        </div>;
    }
}