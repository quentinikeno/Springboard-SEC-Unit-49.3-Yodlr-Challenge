"use strict";

const e = React.createElement;

const App = () => {
	return <Index />;
};

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
