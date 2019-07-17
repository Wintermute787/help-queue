import ticketListReducer from './../../src/reducers/ticket-list-reducer';

describe('ticketListReducer' , () => {
    let action;
    const sampleTicketData = {
        names: 'Ryan & Joe',
        location: 'The fucking Moon',
        issue: 'can not get this shit to work',
        timeOpen: 1500000,
        id: 0
    };
    const sampleHomeAddress = {
        home: '555 5th street'
    };



  test('should return default state if no action type is recognized', () => {
      expect(ticketListReducer({}, {type: null})).toEqual({});
  });
    test('Should add new ticket data to masterTicketList', () => {
        const {names, location, issue, timeOpen, id} = sampleTicketData;
        action= {
            type: 'ADD_TICKET',
            names: names,
            location: location,
            issue: issue,
            timeOpen: timeOpen,
            id: id
        };
        expect(ticketListReducer({}, action)).toEqual({
            [id]: {
                names: names,
                location: location,
                issue: issue,
                timeOpen: timeOpen,
                id: id
            }
        });
    });

  test('It should return address of a person', () =>{
      const {home} = sampleHomeAddress;
      action = {
          type: 'ADD_HOME',
          home: home
      }
  })

});

