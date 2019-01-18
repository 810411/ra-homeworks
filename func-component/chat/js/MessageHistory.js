'use strict';

const MessageHistory = ({list}) => {
  const messagesList = list.map(({id, from, type, time, text}) => {
    const message = {time, text};
    let ListItem;

    switch (type) {
      case 'message':
        ListItem = Message;
        break;
      case 'response':
        ListItem = Response;
        break;
      case 'typing':
        ListItem = Typing;
        break;
      default:
        ListItem = null;
        break;
    }

    return <ListItem from={from} message={message} key={id}/>
  });

  return <ul>{messagesList}</ul>
};
