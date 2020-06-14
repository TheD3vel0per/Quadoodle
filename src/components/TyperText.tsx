import React from 'react';
import useTypewriter from 'react-typewriter-hook';
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function TyperText(props) {
    const [text, setText] = React.useState(props.message);
    const typing = useTypewriter(text);
    return <p>typing</p>;
}

export default TyperText;