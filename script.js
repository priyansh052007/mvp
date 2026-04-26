const main_tabs = document.querySelectorAll('.main_tab');

main_tabs[0].classList.add('active');

main_tabs.forEach(click_tab => {
  click_tab.addEventListener('click', () => {
    main_tabs.forEach(click_tab => click_tab.classList.remove('active'));
    click_tab.classList.add('active');
  });
});


const tabs = document.querySelectorAll('.tab');

tabs[0].classList.add('active');

tabs.forEach(select_tab => {
  select_tab.addEventListener('click', () => {
    tabs.forEach(select_tab => select_tab.classList.remove('active'));
    select_tab.classList.add('active');
  });
});


const todo_tabs = document.querySelectorAll('.todo_tab');

todo_tabs[0].classList.add('active');

todo_tabs.forEach(find_tab => {
  find_tab.addEventListener('click', () => {
    todo_tabs.forEach(find_tab => find_tab.classList.remove('active'));
    find_tab.classList.add('active');
  });
});


function selectOption(option) {
  const todo__tabs = document.querySelectorAll('.todo_tab');
  todo__tabs[0].classList.add('active');
  todo__tabs[1].classList.remove('active');
  todo__tabs[2].classList.remove('active');
  todo__tabs[3].classList.remove('active');
  const one = document.getElementById("1");
  const two = document.getElementById("2");
  const three = document.getElementById("3");
  const four = document.getElementById("4");

  if (option === 'a') {
    one.innerText = "Class";
    two.innerText = "Add Class";
    three.innerText = "Update Class";
    four.innerText = "Remove Class";
  } else if (option === 'b') {
    one.innerText = "Class Atendance";
    two.innerText = "Add Class Attendance";
    three.innerText = "Update Class Attendance";
    four.innerText = "";
  }
}






