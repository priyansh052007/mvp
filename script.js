// Get all the tab elements with class 'tabb'
const tabbb = document.querySelectorAll('.tabb');

// Loop through each tab element
tabbb.forEach(ta => {
  // 'ta' here refers to each individual tab element
  ta.addEventListener('click', () => {
    // Remove the 'active' class from all tabs
    tabbb.forEach(ta => ta.classList.remove('active'));

    // Add the 'active' class to the clicked tab
    ta.classList.add('active');
  });
});
