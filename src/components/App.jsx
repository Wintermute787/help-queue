import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewTicketControl from './NewTicketControl'


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            masterTicketList: []
        };
        this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    }
    handleAddingNewTicketToList(newTicket){
        const newMasterTicketList = this.state.masterTicketList.slice();
        newMasterTicketList.push(newTicket);
        this.setState({masterTicketList: newMasterTicketList})
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' render={() =><TicketList ticketList={this.state.masterTicketList}/>} />
                        <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList}/>} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}



export default App;
