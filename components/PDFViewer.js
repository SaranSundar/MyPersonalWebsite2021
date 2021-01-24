import React, {useState} from 'react';
import {Document, Page} from 'react-pdf';

// https://gist.github.com/wojtekmaj/f265f55e89ccb4ce70fbd2f8c7b1d95d
function highlightPattern(text, pattern) {
    const splitText = text.split(pattern);

    if (splitText.length <= 1) {
        return text;
    }

    const matches = text.match(pattern);

    return splitText.reduce((arr, element, index) => (matches[index] ? [
        ...arr,
        element,
        <mark key={index}>
            {matches[index]}
        </mark>,
    ] : [...arr, element]), []);
}

const PDFViewer = ({url, pageNumber}) => {
    const [searchText, setSearchText] = useState('');

    const textRenderer = ((textItem) => {
        return highlightPattern(textItem.str, searchText);
    });

    function onChange(event) {
        setSearchText(event.target.value);
    }

    return (
        <>
            <Document file={url}>
                <Page pageNumber={pageNumber} customTextRenderer={textRenderer}/>
            </Document>
            <div>
                <label htmlFor="search">Search:</label>
                <input type="search" id="search" value={searchText} onChange={onChange}/>
            </div>
        </>
    )
}

export default PDFViewer;