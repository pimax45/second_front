import React from "react"
import Header from "../Header";
import { NavLink, useParams } from "react-router-dom";


const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id;

    return <div  >
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Maxim"},
        {id: 2, name: "A"},
        {id: 3, name: "B"},
        {id: 4, name: "D"},
        {id: 5, name: "E"},
        {id: 6, name: "F"}

    ]

    let messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'Andrey'},
        {id: 2, message: 'Pasko'},
        {id: 3, message: "B"},
        {id: 4, message: "D"},
        {id: 5, message: "E"},
        {id: 6, message: "F"}

    ]

    return (
        <div>
         <Header/>
        <span class="grid grid-cols-2 gap-4">
            <div>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}></DialogItem>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}></DialogItem>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}></DialogItem>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}></DialogItem>
                
            </div>
        
        <div>
            <Message message = {messages[0].message}/>
            <Message message={messages[1].message}/>
            <Message message={messages[2].message}/>

        </div>
        </span> 
            
        </div>
    )

}

export default Dialogs;