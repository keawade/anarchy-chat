# Anarchy Chat

This is a recreation of an old joke from college built to experiment with the
updated tech stack.

The basic idea is that every person joining a chat room is assigned a random
name and chaos / memes ensue.

## Running

### Locally

1. `npm i`
2. `npm run start` or `npm run start:watch`
3. Navigate to <http://localhost:3000>

### In Container

1. `docker-compose up`
3. Navigate to <http://localhost:8080>

## Planned Features

* Use cookie to persist user ID
* Generate avatars to go with names
* Support rooms at ad hoc URLs
* Use meme name generators based on keywords in room URL
  * Star Wars
  * Dark Souls
  * etc
* Add emoji reactions
* Notifications
  * Title icon
  * Sound (opt in, with toggle!)
  * Desktop?
* At least partial Markdown support
  * Emphasis / strong
  * Links
    * Probably should put a warning with full link displayed before leaving site
  * Images?
    * Click to collapse/hide/blackout?
  * Full Markdown support would be neat but complicates interfaces with
    multiline editing
