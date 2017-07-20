import  React from 'react'
import AddName from'./AddName'
import NameList from './NameList'
export default class NameContainer extends React.Component{
    constructor(props){
        super(props)
        this.Add=this.Add.bind(this);
        this.state={
            nameList:[]
        } 
    }
    Add(e){
        var list=this.state.nameList
        list.push(e)
        this.setState(
            {
                nameList:list
            }
        )
    }
    render(){
        return(
            <div>
                 <AddName NameAdd={this.Add}/>
                 <NameList List={this.state.nameList}/>
            </div>
        )
    }
}