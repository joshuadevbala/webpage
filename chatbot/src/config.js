import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/Linklist/LinkList";

const config = {
    botName: "LearningBot",
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help.what do you want to know?", {
             widget: "LearningOptions",
        }),
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
    },
      chatButton: {
        backgroundColor: "#376B7E",
      },
    },    
    widgets: [
        {
        widgetName: "learningOptions",
        widgetFunc: (props) => <LearningOptions {...props} />,
        },
        {
            widgetName: "javascriptLInks",
            widgetFunc: (props) => <LinkList {...props} />,
            props:{
                options: [
            {
                text: "supports",
                id: 1,
                },
            ],
        },
    },
        

],
};    
  

export default config;