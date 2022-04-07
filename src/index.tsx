import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import './index.scss';
import App from './components/app/App';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
