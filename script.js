const all_tabs = document.querySelectorAll('.tab');

all_tabs[0].classList.add('active');

all_tabs.forEach(find_tab => {
  find_tab.addEventListener('click', () => {
    all_tabs.forEach(find_tab => find_tab.classList.remove('active'));
    find_tab.classList.add('active');
  });
});
