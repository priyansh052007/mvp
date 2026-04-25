const all_tabs = document.querySelectorAll('.tab');

all_tabs[0].classList.add('active');

all_tabs.forEach(find_tab => {
  find_tab.addEventListener('click', () => {
    all_tabs.forEach(find_tab => find_tab.classList.remove('active'));
    find_tab.classList.add('active');
  });
});


const todo_tabs = document.querySelectorAll('.todo_tabs');

todo_tabs[0].classList.add('active');

todo_tabs.forEach(find_todo => {
  find_todo.addEventListener('click', () => {
    todo_tabs.forEach(find_todo => find_todo.classList.remove('active'));
    find_todo.classList.add('active');
  });
});