# Photos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Setup
`git clone` this repository

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` to install Homebrew (package manager)

`brew install node@8` to install Node LTS version

`npm install -g @angular/cli` to install Angular CLI globally


## Development server

`ng serve --open` to start up local dev server. Will open in default browser

## Running unit tests

`ng test` to run unit tests


## Approach

I started off by reading up on bootstrap and looking at the different components I could use. This gave me an idea of how I would design the front end.

Issues I faced:
- Pagination:  
    Spent a lot of time on pagination and trying to understand how the parameters in the `ngb-pagination` element work. I found the ng-bootstrap documentation to be a bit too concise. Perhaps I wasted time on this, but wrote a few bugs in while trying to understand how to use it.

Future features/changes:
- Make responsive - I didn't apply the any media queries to the css so currently the UI only caters for tablets and desktop browsers.
- I did not paginate the search results as I ran out of time. This would be my next step.
- The validation on the search box isn't comprehensive. An empty string enables the search button but doesn't submit the search or provide feedback to the user.