function animateButton(button) {
  // get the URL text to copy from the corresponding URL element
  const urlText = button.parentNode.querySelector('a').href;

  // create a temporary textarea element
  const textarea = document.createElement('textarea');
  textarea.value = urlText;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';

  // add the textarea to the DOM
  document.body.appendChild(textarea);

  // select its contents and copy to clipboard
  textarea.select();
  document.execCommand('copy');

  // remove the textarea from the DOM
  document.body.removeChild(textarea);

  // animate the corresponding URL when it's copied
  const urlSet = button.parentNode;
  const urlElement = urlSet.querySelector('a');
  urlElement.style.color = 'red';
  setTimeout(() => {
    urlElement.style.color = '';
  }, 1000); // timeout to remove color after display duration

  // add prompt to confirm that URL was copied
  const prompt = document.createElement('div');
  prompt.className = 'prompt';
  prompt.textContent = 'Copied!';
  button.appendChild(prompt);
  setTimeout(() => {
    prompt.parentNode.removeChild(prompt);
  }, 1000); // timeout to remove prompt after display duration

  // remove the "animate" class after the animation has played
  setTimeout(() => {
    button.classList.remove('animate');
  }, 500); // adjust timeout to match animation duration or URL animation duration
}
