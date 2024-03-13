let userInput = document.querySelector('input');
const sendButton = document.querySelector('button')
const chatcontainer = document.querySelector('.chatcontainer')

const responses = [
    {userInput: 'hi', response: 'hello there'},
    {userInput: 'how are you', response: 'I am fine How are you?'},
    {userInput: 'good', response: 'Nice to here'},
    {userInput: 'bye', response: 'Nice to talk to you. Good Bye.'},

];

function sendMessage (){
    const userValue = userInput.value;

    if(userValue !== ""){
    renderUserChat(userValue);
    userInput.value = '';
    
 const filteredResponses = responses.filter((item)=>userValue.includes(item.userInput)) 
    if(filteredResponses.length > 0){
        const responseMessage = filteredResponses[0].response;
        renderRobotChat(responseMessage);
    }else{
            renderRobotChat('I dont know ' + userValue)
    }
}
}

function renderRobotChat(message){

const roboDiv = document.createElement('div');
roboDiv.classList.add('robot');
roboDiv.innerHTML = `<img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-robot-icon-isolated-on-abstract-background-png-image_1778885.jpg" alt="">
<div>${message}</div>`
chatcontainer.appendChild(roboDiv) 
}

function renderUserChat(message){
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML = ` <div>${message}</div>
    <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="">`
    chatcontainer.appendChild(userDiv) 
}

sendButton.addEventListener('click', sendMessage)

userInput.addEventListener('keyup', function (event){
    if(event.key === "Enter"){
        sendMessage()
    }
})