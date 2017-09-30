class Menu extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(this.props.menuItems);

        this.onClick = this.onClick.bind(this);
        this.onTranscript = this.onTranscript.bind(this);
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.triggerVoiceCommand();
        }, 3000);
    }

    triggerVoiceCommand() {
        voiceService.startSpeechToText(this.onTranscript, 'Please choose an item!');
    }

    onTranscript(command) {
        webService.executeCommand(command).then((res) => {
            if (res.data.cancellation) {
                this.props.cancelSelection();
            } else if (res.data.total) {
                voiceService.startTextToSpeech(() => { }, 'Thank you for your order, your final is ' + res.data.total + ' US dollar.')
                this.props.finalizeOrder();
            } else if (res.data.menuItems) {
                voiceService.startSpeechToText(this.onTranscript, 'Please choose another item or say order to finish!');
            }
        }).catch((res) => {
            voiceService.startSpeechToText(this.onTranscript, 'Sorry, I did not understand. Please choose an item!');
        });
    }

    onClick(e) {
        e.preventDefault();
        console.log(e);
        console.log('The link was clicked.');
    }

    render() {
        var items = [];
        this.props.menuItems.forEach((item, index) => {
            items.push(<MenuItem onClick={this.onClick} key={index} item={item} index={index + 1} />);
        });
        return <div className="full-width app-menu">
            <h3>Menu Items</h3>
            <div className="fx-row fx-wrap full-width app-menu-list">{items}</div>
        </div>;
    }
}