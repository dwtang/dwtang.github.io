function toggleDisplay(id) {
  const element = document.getElementById(id);
  if (!element) return;

  const isDisplaying = getComputedStyle(element).display === 'block';
  element.style.display = isDisplaying ? 'none' : 'block';
  document.getElementById(`${id}-toggle`).innerText = isDisplaying ? '(view more)' : '(collapse)';
}