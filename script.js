const main_tabs = document.querySelectorAll('.c_tab');

main_tabs[0].classList.add('active');

main_tabs.forEach(find_tab => {
  find_tab.addEventListener('click', () => {
    main_tabs.forEach(find_tab => find_tab.classList.remove('active'));
    find_tab.classList.add('active');
  });
});


const todo_tabs = document.querySelectorAll('.b_tab');

todo_tabs[0].classList.add('active');

todo_tabs.forEach(find_tab => {
  find_tab.addEventListener('click', () => {
    todo_tab.forEach(find_tab => find_tab.classList.remove('active'));
    find_tab.classList.add('active');
  });
});

