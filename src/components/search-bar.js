import React,{Component} from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {searchText:"", placeholder:"Taper votre film..."}
    }
    render(){
        return (
            <div>
                <input 
                onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder}/>
            </div>
            ) 
    }
    handleChange(e){
        this.setState({searchText:e.target.value})
    }
}

    
export default SearchBar;