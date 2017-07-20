import React from 'react'
export default class AddName extends React.Component{
    add(e){
        e.preventDefault();
            this.props.NameAdd(this.refs.name.value);
    }
    render(){
        return(
            <div>
                <input type='text' ref='name'/>
                <button onClick={this.add.bind(this)}>Add</button>
            </div>
        )
    }
}