
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
//Authenticated application context only, NOT a guest game checkout bundle.
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
For guest commerce configure only the API base URL in an isolated credential-free
SDK context: configured global auth is inherited even on guest entry. Existing
supported install-purpose runtime tokens remain valid only for their documented
install/validation/heartbeat/telemetry endpoints, never commerce authentication or
paid ownership. Do not inject them into guest commerce, remove the game's unrelated
allowed token, or change global SDK auth as a commerce workaround. SDK3.15.0
supports the player flow; SDK4 management is separate. The guide documents exact
hosted HTTPS versus local/testing origins, optional integration evidence, the
published-version compatibility tests and the unpublished follow-up migration.
