function saturdayFun(decision) {
    const message = "This Saturday, I want to "
    switch(decision) {
        case 'bathe my dog':
            return message + "bathe my dog!";
        default:
            return message + "roller-skate!";
    }
}

function mondayWork(choice) {
    const message = "This Monday, I will ";
    switch(choice) {
        case 'work from home':
            return message + "work from home.";
        default:
            return message + "go to the office.";
    }
}

function wrapAdjective(death = "*") {
    return function endMy(suffering = "special") {
       return "You are " + death + suffering + death + "!";
    }
}