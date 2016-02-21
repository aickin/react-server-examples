# react-server-examples

Some very simple example apps for `redfin/react-server`, which use `react-server-cli` to compile the code and run the server.

## Installation

```
git clone https://github.com/aickin/react-server-examples.git
cd react-server-examples/simple
npm install
cd ../todomvc
npm install
cd ../helloworld
npm install
```

Then to run the apps, `cd` to their directory (`simple`, `todomvc`, or `helloworld`) and type `npm start`.

Then go to [http://localhost:3000/]. You will see a simple page that pre-renders and that is interactive on load. It also will include hot reloading of React components in their own file.

If you want to optimize the client code at the expense of startup time, type `npm start -- --production`. You can also use any of [the other arguments for react-server-cli](https://www.npmjs.com/package/react-server-cli#setting-options-manually).
