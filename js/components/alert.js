function alertMessage(messageType, message, target) {
  const alertBox = document.querySelector(target);

  alertBox.innerHTML = `<div class="alert alert__${messageType}-message">${message}</div>`;
}

export default alertMessage;
