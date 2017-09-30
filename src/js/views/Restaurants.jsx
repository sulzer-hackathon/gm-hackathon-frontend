class Restaurants extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(this.props.restaurants);

        this.onClick = this.onClick.bind(this);
        // this.triggerVoiceCommand = this.triggerVoiceCommand.bind(this);


    }

    componentDidMount() {
        debugger;
        window.setTimeout(() => {
            this.triggerVoiceCommand();
        }, 3000);
    }

    triggerVoiceCommand() {
        voiceService.startSpeechToText(this.onTranscript, 'Please choose a number!');
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