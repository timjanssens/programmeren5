class Marvel extends React.Component {

    marvelCharacterStyle = {
        list: {
            color: 'green',
            display: 'flex',
            flexWrap: 'wrap'
        },
        tile: {
            color: 'white',
            backgroundColor: 'red',
            textAlign: 'center',
            width: '10em',
            fontSize: '2em',
            fontFamily: 'Arial',
            paddingTop: '0.5em',
            padding: '20px'

        },
        image: {
            color: 'blue',
            width: '10em',
            paddingTop: '0.5em',
            height: "450px"
        }
    };

    MarvelCharacter(props) {
        return (
        <div style={this.marvelCharacterStyle.tile} key={props.name}>
            {props.name}
            <img src={props.imageUrl}
                style={this.marvelCharacterStyle.image} alt={"foto van " + props.name} />              
            <LikeButton />
        </div>);
    }

    render() {
        return (
            <div>
                <h1>{this.props.heading}</h1>
                <div style={this.marvelCharacterStyle.list}>
                    {this.props.list.map(element => this.MarvelCharacter(element))}
                                   
                </div>
            </div>
        );
    }
}