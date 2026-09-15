
# Glitch Javascript SDK

Welcome to the Glitch JavaScript SDK. This SDK is designed to make access Glitch more easy and accessible for developers.

  

### What is Glitch?

  

Glitch an open-source live community platform for gaming publishers and esports organizations to establish vibrant gaming communities. While the technology is retro-fitted for gaming, it can be used for various other use cases such as:

  

- Live Shopping

- Film Events

- Conference Events

- And more

  

### How To Install

  

The library is agnostic to any application that is using Javascript with includes vanilla Javascript, React, Angular, Express and any of the other major frameworks. To install, simply run the following:

```npm install glitch-javascript-sdk --save```

  

This will add the package to your package.json

  

### How To Use

The API coincides with the Glitch Backend. You can use the API as such:


```

import Glitch from 'glitch-javascript-sdk';

//Set the API Url to your backend
Glitch.config.Config.setBaseUrl("https://api.glitch.local/api/", true);

//Set Auth JSON Web Token (if user has loggedin)
Glitch.config.Config.setAuthToken("some-jwt");

//Make API Calls 
Glitch.api.Auth.login("john@example.com", "abc123").then(()=> {

}).catch(error => {

)

```

## Documentation
Documentation is produced via typedoc as the code comments are extensive and turned in readable documentation.

[https://glitch-gaming-platform.github.io/Glitch-Javascript-SDK/](https://glitch-gaming-platform.github.io/Glitch-Javascript-SDK/)
# Game microtransactions

Use `Glitch.api.Microtransactions` for title-scoped products, existing Media uploads,
game-branded hosted checkout, verified account handoff, inventory and refunds.
Read [the integration guide](guides/microtransactions.md) before handling purchases.
Never treat a browser message as payment proof or ship an administrative token.
