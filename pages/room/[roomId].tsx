import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  Container,
  AppBar,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
  Typography,
  Avatar,
  ListItemAvatar,
  InputAdornment,
  IconButton,
  Paper,
  Toolbar,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { useState, FormEvent } from 'react';
import { layoutTestData } from '../_layoutTestData';
import { default as _ } from 'lodash';
import { IMessage } from '../../interfaces/IMessage';

const Home: NextPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState(layoutTestData);
  const [inputText, setInputText] = useState('');
  let { roomId } = router.query;
  if (Array.isArray(roomId)) {
    roomId = roomId.join(' ');
  }
  const roomDisplayName = _.words(roomId).map(_.upperFirst).join(' ');

  const insertMessage = (
    {
      userId,
      timestamp = new Date(),
      content,
    }: { userId: string; content: string; timestamp?: Date },
    existingMessages: IMessage[],
  ): IMessage[] => {
    const newMessage: IMessage = {
      userId,
      timestamp,
      content,
    };

    return _.chain(existingMessages)
      .cloneDeep()
      .push(newMessage)
      .takeRight(100)
      .sortBy('timestamp')
      .value();
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessages(
      insertMessage(
        {
          userId: 'itsamemario',
          content: inputText,
        },
        messages,
      ),
    );

    setInputText('');
  };

  return (
    <div>
      <Head>
        <title>{roomId} | Anarchy Chat</title>
      </Head>

      <Container>
        <AppBar>
          <Container>
            <Toolbar variant='dense'>
              <Typography variant='h6'>
                Anarchy Chat | {roomDisplayName}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Paper
          style={{
            marginTop: '3.5em',
            height: 'calc(100vh - 8.25em)',
            overflowY: 'scroll',
          }}
          variant='outlined'
        >
          <List style={{ maxWidth: '100%' }}>
            {messages.map((message, index) => (
              <ListItem key={`${message.userId}_${message.timestamp}`}>
                <ListItemAvatar>
                  <Avatar>{message.userId.charAt(0).toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={message.userId}
                  secondary={message.content}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
        <form
          onSubmit={handleFormSubmit}
          autoComplete='off'
          style={{ paddingTop: '0.5em' }}
        >
          <OutlinedInput
            fullWidth
            placeholder='Start typing to send a message...'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='send message'
                  edge='end'
                  color='primary'
                >
                  <Send />
                </IconButton>
              </InputAdornment>
            }
          />
        </form>
      </Container>
    </div>
  );
};

export default Home;
