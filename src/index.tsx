import React from 'react';
import {createRoot} from "react-dom/client";
import {App} from "./components/App";

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer!);

import "./theme/index.css";

root.render(<React.StrictMode>
    <App/>
</React.StrictMode>)