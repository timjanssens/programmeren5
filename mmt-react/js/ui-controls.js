function ALabel(props) {
    const style = {
        display: "inline-block",
        color: "#ffffff",
        backgroundColor: "#3d94f6",
        textShadow: "0px 1px 0px #1570cd",
        padding: "6px 24px",
        textShadow: "0px 1px 0px #1570cd",
        borderRadius: "6px",
        border: "1px solid #337fed"
    }
    return (<div>
        <label style={style}>{props.caption}</label>
    </div>);
}

function AButton(props) {
    const style = {
        boxShadow: "inset 0px 1px 0px 0px #97c4fe",
        background: "linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%)",
        backgroundColor: "#3d94f6",
        borderRadius: "6px",
        border: "1px solid #337fed",
        display: "inline-block",
        cursor: "pointer",
        color: "#ffffff",
        fontFamily: "Arial",
        fontSize: "1em",
        fontWeight: "bold",
        padding: "6px 24px",
        margin: "5px 0",
        textShadow: "0px 1px 0px #1570cd"
    }

    return (<button onClick={props.onClick}
        style={style}>{typeof props.caption !== 'undefined'
            ? props.caption : 'button'}</button>);
}

function ImageSummary(props) {
    const style = {
        borderRadius: "6px",
    }
    return (<img style={style} alt={`afbeelding van ${props.name}`} src={props.image} />
    );
}

function ImageDetail(props) {
    const style = {
        width: "25em",
    }

    return (<img style={style} alt={`afbeelding van ${props.name}`} src={props.image} />);
}

function UnorderedList(props) {
    return (<ul>
        {props.ul.map(item => (<li key={item.key}>{item.key}</li>))}
    </ul>);
}

class LikePanel extends React.Component {

    host = "http://localhost:58013/MmtLike";

    constructor(props) {
        super(props); // Now 'this' is initialized by calling the parent constructor.
        this.state = {
            likes: 0
        };
        this.getLikes();
    }

    getLikes = () => {
        const keyValue = this.props.keyValue;
        let count = 0;
        if (typeof keyValue !== 'undefined') {
            // als de callback wordt uitgevoerd, is this niet meer in de scope
            // daarom slaan we die op in een constante en geven die met de callback mee 
            // const self = this;
            const url = `${this.host}/${keyValue}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        likes: data.likes
                    });
                });
        }
    }

    postLikes = () => {
        let item = {
            Key: this.props.keyValue,
            Name: 'onbelangrijk',
            Likes: 1
        };
        postData(this.host, item)
            .then(data => {
                this.setState({
                    likes: data.likes
                });
            });
    }

    incrementLike = () => {
        const keyValue = this.props.keyValue;
        if (typeof keyValue !== 'undefined') {
            this.postLikes();
        } else {
            let newCount = this.state.likes + 1;
            this.setState({
                likes: newCount
            });
        }

    };

    render() {
        return (
            <div>
                <AButton caption="like" onClick={this.incrementLike} />
                <ALabel caption={this.state.likes} />
            </div>);
    }
}
