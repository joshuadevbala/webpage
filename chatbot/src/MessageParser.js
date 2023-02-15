class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

    parse(message) {
        const LowerCaseMessage = message.toLowerCase();

        if (LowerCaseMessage.includes("hello")) {
            this.actionProvider.greet()
        }
        
        if (LowerCaseMessage.includes("javascript")) {
            this.actionProvider.handleJavascriptList();
        }
    }
}            


export default MessageParser;