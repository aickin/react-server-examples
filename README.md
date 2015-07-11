# react-server-examples

A very simple example app for `aickin/react-server-code-drop`. You will need `aickin/react-server-cli` as well. To run this app:

```
npm install
./node_modules/gulp/bin/gulp
path-to-react-server-cli/bin/react-server ./target/routes.js
```

Then go to http://localhost:3000/ . You will see a simple page that pre-renders and that is interactive on load. If you want to optimize the client code (at the expense of some startup time), use the following line instead:

```
path-to-react-server-cli/bin/react-server -o ./target/routes.js
```
