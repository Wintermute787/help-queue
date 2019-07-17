import React from 'react';
import ConfirmationQuestion from './ConfirmationQuestion'
import NewTicketForm from "./NewTicketForm";



class NewTicketControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);

    }

    handleTroubleshootingConfirmation(){
        this.setState({ formVisibleOnPage: true});

    }

    render() {
        let currentlyVisibleContent = null;
        if(this.state.formVisibleOnPage){
            currentlyVisibleContent = <NewTicketForm />;
        } else {
            currentlyVisibleContent = <ConfirmationQuestion onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>
        }
        return(
            <div>
                { currentlyVisibleContent }
            </div>
        );
    }
}

export default NewTicketControl;
