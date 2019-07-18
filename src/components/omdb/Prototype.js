import React from 'react'

export default class Prototype extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            searchTerm: '',
            movie: {
                Title: '',
                Poster: ''
            }
        }
    }

    componentDidMount() {
        this.searchForMovies('batman')
            .then(data => this.setState({movies: data.Search}))
    }

    searchForMovies = searchTerm =>
        fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=4a249f8d`)
            .then(response => response.json())

    searchForMovie = imdbID =>
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a249f8d`)
            .then(response => response.json())

    handleSearchMovieButton = searchTerm =>
        this.searchForMovies(this.state.searchTerm)
            .then(data => this.setState({movies: data.Search}))

    handleSearchMovie = imdbID =>
        this.searchForMovie(imdbID)
            .then(movie => this.setState({movie: movie}))

    render() {
        return (
            <div>
            <h1>Prototype</h1>
                <div className="row">
                    <div className="col-3">
                        <input
                            value={this.state.searchTerm}
                            onChange={e => this.setState({searchTerm: e.target.value})} className='form-control'/>
                        <button onClick={() => this.handleSearchMovieButton(this.state.searchTerm)} className="btn btn-block btn-primary">Search</button>
                        <ul className='list-group'>
                            {
                                this.state.movies.map(movie=>
                                    <li className='list-group-item'
                                        onClick={() => this.handleSearchMovie(movie.imdbID)}
                                        key={movie.imdbID}>
                                        {movie.Title}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-9">
                        <h1>
                            {this.state.movie.Title}
                        </h1>
                        <img src={this.state.movie.Poster}/>
                        <p>
                            {this.state.movie.Plot}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}