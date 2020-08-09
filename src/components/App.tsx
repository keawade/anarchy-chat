import React, { Component, FormEventHandler, ChangeEventHandler } from 'react';
import { Helmet } from 'react-helmet-async';
import { Form, Container, Comment, Segment, Header } from 'semantic-ui-react';

import { IMessage } from '../interfaces/IMessage';
import { layoutTestData } from '../layoutTestData';

export class App extends Component<
  unknown,
  { inputText: string; messages: IMessage[] }
> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      inputText: '',
      messages: layoutTestData,
    };
  }

  handleInputOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      ...this.state,
      inputText: event.target.value,
    });
  };

  handleFormSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    alert('yoooo');
    console.log('Sending message:', this.state.inputText);

    this.setState({
      ...this.state,
      inputText: '',
    });
  };

  render() {
    return (
      <>
        <Helmet title='Anarchy Chat' />
        <Container>
          <Header style={{ paddingTop: '1em' }}>Anarchy Chat</Header>
          <Segment style={{ height: 'calc(100vh - 8em)', overflowY: 'scroll' }}>
            <Comment.Group style={{ maxWidth: '100%' }}>
              {this.state.messages.map((message, index) => (
                <Comment key={index}>
                  <Comment.Content>
                    <Comment.Author>{message.user}</Comment.Author>
                    <Comment.Text>{message.content}</Comment.Text>
                  </Comment.Content>
                </Comment>
              ))}
            </Comment.Group>
          </Segment>
          <Form onSubmit={this.handleFormSubmit}>
            <Form.Input
              fluid
              placeholder='Start typing to send a message...'
              action={{
                content: 'Send',
                primary: true,
              }}
              value={this.state.inputText}
              onChange={this.handleInputOnChange}
            />
          </Form>
        </Container>
      </>
    );
  }
}
