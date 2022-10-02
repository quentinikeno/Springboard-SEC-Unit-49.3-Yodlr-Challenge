"use strict";

const e = React.createElement;

const App = () => {
	return <div>App</div>;
};

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
