import { ReactNode } from "react";
import "./Item.css"


function Main({ children }: { children: ReactNode }) {
    return (
        <div className="body">
            {children}
        </div>
    );
}

export default Main;