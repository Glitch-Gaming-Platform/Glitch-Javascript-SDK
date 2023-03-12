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
```npm install tbd-command --save```

This will add the package to your package.json

### How To Use
The API coincendes with the Glitch Backend.

```
import Glitch from tbd-import;

//Set the config
new Glitch.config.Config("http://www.baseUrl.com/", 'some-auth-otken');

Glitch.Api.Auth.login("john@example.com", "abc123").then(()=> {
}).catch(error => {
)
```