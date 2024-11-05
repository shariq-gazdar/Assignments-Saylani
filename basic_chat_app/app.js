let chatArr = [];
let messageInput = document.querySelector("#chat");
let chatContainer = document.querySelector(".chatContainer");
const chatPush = () => {
  console.log(messageInput.value);
  if (messageInput.value) {
    chatArr.push(messageInput.value);
  }
  console.log(chatArr);
  renderChat();
};
const renderChat = () => {
  chatContainer.innerHTML = "";
  for (let i = 0; i < chatArr.length; i++) {
    console.log("In Render");
    console.log(chatArr[i]);

    chatContainer.innerHTML += `<div class="chat">
            <p>${chatArr[i]}</p>
        </div>`;
  }
  setTimeout(() => {
    chatContainer.innerHTML += `<div class="chatRecieved">
    <p>Hi Thanks For Messaging</p>
</div>`;
  }, 100);
};
