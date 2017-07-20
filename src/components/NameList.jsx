import React from 'react'
export default class NameList extends React.Component{
    render(){
        var List=this.props.List.map((name)=>
            <li key={name}>{name}</li>
        )
        return(
           <ul>
               {List}
           </ul>
        )
    }
}