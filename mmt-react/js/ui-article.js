function ArticleHeader(props) {
    const style = {
        header: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            heigth: "10em" 
        },
        title: {
            alignSelf: "center",
            fontFamily: "Arial",
            color: "red",
            paddingRight: "1em",
            fontSize: "2.5em"
        },
        logo: {
            height: "10em",
            marginLeft: "1em"
        }

    }
    return (<header style={style.header}>
        <img alt={`Logo ${props.title}`} src={props.image} style={style.logo} />
        <h1 style={style.title}>{props.title}</h1>
    </header>);
}

class ArticleSummary extends React.Component {
    style = {
        display: "flex",
        flexDirection: "column",
        width: "10em",
        margin: "1em"    
    }

    showDetail = () => { this.props.action(this.props.item) }

    render() {
        return (<article style={this.style} key={this.props.item.key}>
            <ImageSummary name={this.props.item.city} image={`images/logo/${this.props.item.image}`} />
            <AButton caption={this.props.item.city} onClick={this.showDetail} />
        </article>);
    }
}

function LeafLetNode() {
    const style = {
        width: "40em",
        height: "40em"
    }
    return (<div id="leaflet-id" style={style}></div>)
}

class ArticleDetail extends React.Component {
    style = {
        detail: {
            display: "flex",
            flexDirection: "column",
            width: "70%"
        },
        top: {
            display: "flex",
            flexDirection: "row"
        },
        middle: {
            display: "flex",
            flexDirection: "row",
         
        },
        comment: {
            display: "block",
            height: "100px",
            width: "500px"
        },
        like: {
            // display: "block",
            marginLeft: "30px",
            marginTop: "10px",
        }
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.leafLetView('leaflet-id');
    }

    showOverview = () => { this.props.actionOverview() }

    leafLetView = (id) => {
        // Initialiseert de mijnKaart constante
        const map = L.map(id);
        // Laad de basiskaart
        const baseMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        });
        // plaats de basismap in het html element met id = kaart-id
        baseMap.addTo(map);
        // Stel het gebied van de kaart in
        // de laatste parameter bepaalt de grootte van het getoonde gebied
        // hoe groter het getal, hoe gedetailleerder
        // alert(this.props.article.longitude);
        const pos1 = this.props.article.longitude.substr(0, 5);
        const pos2 = this.props.article.latitude.substr(0, 5);
        const mark = L.marker([this.props.article.latitude, this.props.article.longitude]).addTo(map);
        map.setView([pos2, pos1], 12);
    }

    render() {
        return (<article style={this.style}>
            <AButton caption="Terug naar overzicht" onClick={this.showOverview} />
            <div style={this.style.top}>
                <ImageDetail name={this.props.article.name} image={`images/location/${this.props.article.image}`} />
                <LeafLetNode />
            </div>
            <div style={this.style.middle}>
                <div>
                    <ul>
                        <li>Naam: {this.props.article.name}</li>
                        <li>Hoofdgemeentes: {this.props.article.headcity}</li>
                        <li>Adres: {this.props.article.addres}</li>
                        <li>Stad: {this.props.article.postalcode} {this.props.article.city}</li>
                        <li>Provincie: {this.props.article.province}</li>
                    </ul>
                </div>
                <div style={this.style.like}>
                    <LikePanel keyValue={this.props.article.key}/>
                </div>
            </div>
            <div style={this.style.like}>
             <textarea style={this.style.comment}></textarea>
             <AButton caption="Verzenden" />
            </div>
        </article>);
    }
}

function ArticleOverview(props) {
    const style = {
        color: 'white',
        display: 'flex',
        flexWrap: 'wrap'
    };
    return (
        <main>
            <div style={style}>
                {props.article.map(item => (<ArticleSummary item={item} key={item.key} action={props.action} />))}
            </div>
        </main>
    );
}

class ArticleApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overview: true
        };
    }

    showDetail = (item) => {
        this.setState({
            overview: false,
            article: item
        });
    };

    showOverview = () => {
        this.setState({
            overview: true,
            article: null
        });
    };

    render() {
        if (this.state.overview) {
            return (
                <ArticleOverview article={this.props.article} action={this.showDetail} />
            );
        } else {
            return (<ArticleDetail article={this.state.article} actionOverview={this.showOverview} />)
        }
    }
}

