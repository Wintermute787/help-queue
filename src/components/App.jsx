import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import { Container } from 'semantic-ui-react';
import Login from './Login';
import Nav from './Nav'
import Video from './Video'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Ticket from "./Ticket";
import NewTicketForm from './NewTicketForm'


function App(){
  return (
      <BrowserRouter>
      <div>
        <Header/>
          <Switch>
              <Route exact path='/' component={TicketList} />
              <Route path='/newticket' component={NewTicketForm} />
          </Switch>
      </div>
    </BrowserRouter>


  );
}

export default App;
