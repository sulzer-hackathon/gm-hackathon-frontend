class Menu extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(this.props.menuItems);

        this.state = {
            menuItems: []
        }

        this.onClick = this.onClick.bind(this);
        this.onTranscript = this.onTranscript.bind(this);
    }

    componentDidMount() {
        this.state = {
            menuItems: this.props.menuItems
        }
        window.setTimeout(() => {
            this.triggerVoiceCommand();
        }, 3000);
    }

    triggerVoiceCommand() {
        voiceService.startSpeechToText(this.onTranscript, 'Please choose an item!');
    }

    onTranscript(command) {
        store.dispatch({ type: 'LOADER_STATE', payload: true });
        webService.executeCommand(command).then((res) => {
            store.dispatch({ type: 'LOADER_STATE', payload: false });
            if (res.data.cancellation) {
                this.props.cancelSelection();
            } else if (res.data.total) {
                var totalSummary = 'Thank you for your order, your final is ' + Math.trunc(res.data.total) + ' Dollars and ' + Math.trunc((res.data.total - Math.floor(res.data.total)) * 100) + ' Cents.';
                voiceService.startTextToSpeech(() => { }, totalSummary);
                showSnackbar(totalSummary);
                this.props.finalizeOrder();
            } else if (res.data.menuItems) {
                voiceService.startSpeechToText(this.onTranscript, 'Please choose another item or say order to finish!');
            }
        }).catch((res) => {
            store.dispatch({ type: 'LOADER_STATE', payload: false });
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
        this.state.menuItems.forEach((item, index) => {
            items.push(<MenuItem onClick={this.onClick} key={index} item={item} index={index + 1} delay={index} />);
        });
        return <div className="full-width app-menu">
            <h3>{this.props.restaurantName}&nbsp;-&nbsp;Menu Items</h3>
            <ReactCSSTransitionGroup component="div" className="fx-row fx-wrap full-width app-menu-list" transitionName="slide" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
                {items}
            </ReactCSSTransitionGroup>
        </div>;
    }
}
