class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet(){
        const greetingMessage = this.createChatBotMessage("Hi, friend");
        this.updateChatBotState(greetingMessage); 
    }

    handleJavascriptList = () => {
        const message = this.createChatBotMessage(
            "You will talk to our customercare executive shortly!:",
        {
            widget: "javascriptLinks",
        }
     );
        
        this.updateChatbotState(message);
    };

    updateChatBotState(message) {

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
    }));
}
}

export default ActionProvider;
