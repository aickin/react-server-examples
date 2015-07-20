# react-server-examples

Some very simple example app for `aickin/react-server-code-drop`. You will need `aickin/react-server-cli` as well. Building this app is a bit tedious because none of the packages are in npm, so to install this app:

```
git clone https://github.com/aickin/react-server-code-drop.git
cd react-server-code-drop
npm install
cd ..

git clone https://github.com/aickin/react-server-cli.git
cd react-server-cli
npm install
cd ..

git clone https://github.com/aickin/react-server-examples.git
cd react-server-examples/src/simple
npm install
cd ../todomvc
npm install
```

Then to run the apps, `cd` to their directory (either `src/simple` or `src/todomvc`) and type `./start`.

Then go to http://localhost:3000/ . You will see a simple page that pre-renders and that is interactive on load. If you want to optimize the client code at the expense of startup time, add `--production`.

