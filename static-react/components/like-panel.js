class LikeButton extends React.Component {
   
    buttonStyle = {
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
        textShadow: "0px 1px 0px #1570cd", 
        margin: "10px"
    }

    labelStyle = {
        display: "inline-block",
        color: "#ffffff",
        backgroundColor: "#3d94f6",
        textShadow: "0px 1px 0px #1570cd",
        padding: "6px 24px",
        textShadow: "0px 1px 0px #1570cd",
        borderRadius: "6px",
        border: "1px solid #337fed"
    }

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
    }

    incrementLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    render() {
        return <div><button onClick={this.incrementLike}
            style={this.buttonStyle}>{typeof this.props.caption !== 'undefined'
                ? this.props.caption : 'button'}</button>
            <label style={this.labelStyle}>{this.state.likes}</label>
        </div>
    }
}

function ALabel(props) {
          return (<div>
        <label style={labelStyle}>{props.caption}</label>
    </div>);
}

function AButton(props) {
    return (<div><button onClick={props.onClick}
        style={buttonStyle}>{typeof props.caption !== 'undefined'
            ? props.caption : 'button'}</button>
    </div>);
}

class LikePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
    }

    incrementLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    render() {
        return (
            <div>
                <AButton caption="I like" onClick={this.incrementLike}/>
                <ALabel caption={this.state.likes} />
            </div>);
    }

}   


//     buttonStyle = {
//         boxShadow: "inset 0px 1px 0px 0px #97c4fe",
//         background: "linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%)",
//         backgroundColor: "#3d94f6",
//         borderRadius: "6px",
//         border: "1px solid #337fed",
//         display: "inline-block",
//         cursor: "pointer",
//         color: "#ffffff",
//         fontFamily: "Arial",
//         fontSize: "15px",
//         fontWeight: "bold",
//         padding: "6px 24px",
//         textShadow: "0px 1px 0px #1570cd",
//         height: "45px",
//         margin: "5px"
//     }
   
//     labelStyle = {
//         display: "inline-block",
//         color: "#ffffff",
//         backgroundColor: "#3d94f6",
//         textShadow: "0px 1px 0px #1570cd",
//         padding: "6px 24px",
//         textShadow: "0px 1px 0px #1570cd",
//         borderRadius: "6px",
//         border: "1px solid #337fed",
//         height: "40px",
//         marginTop: "15px"
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//             likes: 0
//         };
    
//     }

//     incrementLike = () => {
//         let newCount = this.state.likes + 1;
//         this.setState({
//             likes: newCount
//         });
//     };

//     render() {
//         return <div><button onClick={this.incrementLike}
//             style={this.buttonStyle}>{typeof this.props.caption !== 'undefined'
//                 ? this.props.caption : 'Like'}</button>
//             <label style={this.labelStyle}>{this.state.likes}</label>
//         </div>
//     }
// }