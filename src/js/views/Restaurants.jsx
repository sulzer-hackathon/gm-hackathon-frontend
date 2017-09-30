class Restaurants extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(this.props.restaurants);

        this.state = {
          restaurants: []
        }

        this.onClick = this.onClick.bind(this);
        this.onTranscript = this.onTranscript.bind(this);


    }

    componentDidMount() {
      this.setState({
        restaurants: this.props.restaurants
      });
        window.setTimeout(() => {
            this.triggerVoiceCommand();
        }, 3000);
    }

    triggerVoiceCommand() {
        // var __object = { "user": null, "menuItems": [{ "apiKey": "6362137", "name": "Regular Pizza - Slice", "description": "  Choice of slice or whole pie.", "basePrice": 2.75 }, { "apiKey": "6362138", "name": "Regular Pizza - Whole Pie", "description": "  Choice of slice or whole pie.", "basePrice": 20.0 }, { "apiKey": "6362139", "name": "Sicilian Pizza - Slice", "description": "  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362140", "name": "Sicilian Pizza - Whole Pie", "description": "  Choice of slice or whole pie.", "basePrice": 23.0 }, { "apiKey": "6362141", "name": "Nonna Maria Pizza - Slice", "description": "Our signature pizza from our old family recipe. Thin crust with fresh mozzarella, homemade marinara sauce, the finest Parmesan and fresh basil.  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362142", "name": "Nonna Maria Pizza - Whole Pie", "description": "Our signature pizza from our old family recipe. Thin crust with fresh mozzarella, homemade marinara sauce, the finest Parmesan and fresh basil.  Choice of slice or whole pie.", "basePrice": 23.0 }, { "apiKey": "6362143", "name": "Grandma Pizza - Slice", "description": "Our homemade marinara sauce, mozzarella, Parmesan, olive oil and fresh garlic on a thick old-world crust.  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362144", "name": "Grandma Pizza - Whole Pie", "description": "Our homemade marinara sauce, mozzarella, Parmesan, olive oil and fresh garlic on a thick old-world crust.  Choice of slice or whole pie.", "basePrice": 23.0 }, { "apiKey": "6362145", "name": "White Pie - Slice", "description": "Mozzarella and ricotta cheese with fresh basil. No sauce.  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362146", "name": "White Pie - Whole Pie", "description": "Mozzarella and ricotta cheese with fresh basil. No sauce.  Choice of slice or whole pie.", "basePrice": 24.0 }] };
        // this.props.updateMenu(__object.menuItems);
        voiceService.startSpeechToText(this.onTranscript, 'Please choose a restaurant by number!');
    }

    onTranscript(command) {
        console.log(command);
        webService.executeCommand(command).then((res) => {
            if (res.data.cancellation) {
                this.props.cancelSelection();
            } else {
                this.props.updateMenu(res.data.menuItems);
            }
        }).catch((res) => {
            voiceService.startSpeechToText(this.onTranscript, 'Sorry, I did not understand. Please choose a restaurant by number!');
        });
    }

    onClick(e) {
        e.preventDefault();
        console.log(e);
        console.log('The link was clicked.');
    }

    render() {
        var items = [];
        this.state.restaurants.forEach((item, index) => {
            items.push(<Restaurant onClick={this.onClick} key={index} item={item} index={index + 1} delay={index}/>);
        });
        return <div className="full-width app-restaurant">
            <h3>Restaurants</h3>
            <ReactCSSTransitionGroup component="div" className="fx-row full-width app-restaurant-list" transitionName="slide" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
              {items}
            </ReactCSSTransitionGroup>
        </div>;
    }
}
