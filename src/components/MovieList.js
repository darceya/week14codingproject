
import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import ReviewModal from "./ReviewForm-Modal";

export default class MovieData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.movie.id,
            movieTitle: props.movie.movieTitle,
            moviePoster: props.movie.moviePoster,
            releaseYear: props.movie.releaseYear,
            synopsis: props.movie.synopsis,
            audienceRating: props.movie.audienceRating
        }
    };
    
    
    //ReviewModal below will open the form to leave a review, its a cool react bootstrap component.
    render(){
        return (
            <Card>
                <div className="cardBox">
                    <Card.Img variant="top" className="cardImg" src={this.state.moviePoster} width="200" alt={this.state.movieTitle} />
                </div>
            
                <Card.Body>
                    <Card.Title className="card-title">{this.state.movieTitle}</Card.Title>
                    <Card.Text className="card-title">Released: {this.state.releaseYear} Rated: {this.state.audienceRating}</Card.Text>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Synopsis</Accordion.Header>
                            <Accordion.Body className="card-text">{this.state.synopsis}</Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                </Card.Body>
                < ReviewModal key={this.props.movie.id} movieTitle={this.props.movie.movieTitle} />
                <br></br>
            </Card>
     
        );
    }
}