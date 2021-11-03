import React from "react";

const ResultAlert = ({ variant, children }) => {
    return (
        <div className={"user-select-auto btn btn-" + variant} >
            {children}
        </div>
    );
}

export default ResultAlert;