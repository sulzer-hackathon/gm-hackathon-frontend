class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    this.gps = '';
  }

  componentDidMount(){
    this.gps = infoService.getInfo();
    componentHandler.upgradeDom();
  }

  render() {
    return (
      <div className="dashboard fx fx-center">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Title</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Title</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content fx fx-center">
              Dashboard
              <br/>Lat: {this.gps.lat}
              <br/>Lng: {this.gps.lng}
              <br/>Heading: {this.gps.heading}
            </div>
          </main>
        </div>

      </div>
    );
  }
}
