import React from "react";
import { useState } from "react";
import { wordPressAPIUrl } from "./configuration";

export const LoadedPage = () => {
    const [data, setData] = useState(false);
    if (!data) {
        fetch(wordPressAPIUrl + "/wp/v2/pages/36")
            .then((response) => {
                return response.json();
            })
            .then((respData) => {
                let content = respData.content.rendered;
                setData(content);
            });
    }
    return (
        <>{data && <div dangerouslySetInnerHTML={{ __html: data }}></div>}</>
    );
};
