# Roster by Jake Campa 4.7.2017

## Description
_a website that tracks the players on a basketball team. It currently has the Roster for the Washington Wizards_
## Requirements

- [Node.js and NPM](http://nodejs.org)
- [Bower](https://bower.io/)
- [Angular-cli](https://cli.angular.io/)
- [Typescript](https://www.typescriptlang.org/)

## Setup

- Clone repo
- Open terminal and Navigate to root directory of the project
- In terminal and run `npm install` (It may take a minute)
- In terminal and run `bower install`
- In terminal and run `ng serve`
- Open web browser and go to `localhost:4200`

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## User stories

* As a user, I'd like to visit a page to see a list of all players.
* As a user, I'd like to click a player's entry in the list to visit their profile page, which should include more details about them.
* As a user, I'd like the option to visit an "About" page that explains what the team is, and what they do.
* As a user, I'd like all data persisted in a database, so it's always there when I need it.
* As a user, I'd like to filter the list of players by their particular position
* As an administrator, I want to add new users to the club. (User authentication is not required).
* As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details.
* As an administrator, need the option to delete a user, in case they leave the club or team.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Components, Pipes, ect

| Type | Name | Functionality |
|---|---|---|
|Component| about|displays information about the team|
|Component| edit-player | offers CRUD functionality to players in the firebase app|
|Component| index | serve as a splash page, currently displaying PlayerListComponent|
|Component| player-list | display a list of players on the roster|
|Component| manager | serve all the crud components in one page|
|Component| player-page | dynamic route to display information on a given player|
|Pipe| position | returns only a given player position |
|model| Player | class with properties name, position, playerNumber, img |
## Bugs

None known at this time

## Support

Support and bug reporting a pending

## Technologies Used

- HTML
- CSS
- Bootstrap
- Node.js
- Node package manager
- Bower
- Git
- Angular2
- Typescript
- Javascript
- Angular-cli

## Licensing

MIT licensing
