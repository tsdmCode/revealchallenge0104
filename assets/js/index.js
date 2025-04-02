const inputs = Array.from(document.getElementsByTagName('input'));
const resetBtn = document.getElementById('reset');
const submitBtn = document.getElementById('submit');
const arrows = Array.from(document.querySelectorAll('.arrow'));
const form = document.querySelector('form');

inputs.forEach((el) => {
  el.addEventListener('keyup', (e) => {
    const tar = inputs.indexOf(e.target);
    const valid = e.target.checkValidity();

    if (tar === 3 && valid) {
      resetBtn.disabled = false;
      submitBtn.disabled = false;
      arrows[tar].classList.add('green');
    } else if (tar === 3 && !valid) {
      resetBtn.disabled = true;
      submitBtn.disabled = true;
      arrows[tar].classList.remove('green');
    }
    if (valid && tar + 1 <= inputs.length) {
      inputs[tar + 1].style.display = 'block';
      arrows[tar].classList.add('green');
      console.log(arrows[tar].classList);
    } else {
      inputs[tar + 1].style.display = 'none';
      arrows[tar].classList.remove('green');
    }
  });
});

resetBtn.addEventListener('click', () => {
  form.reset();

  for (let i = 1; i < inputs.length; i++) {
    inputs[i].value = '';
    inputs[i].style.display = 'none';
  }

  for (let i = 0; i < arrows.length; i++) {
    arrows[i].classList.remove('green');
  }

  resetBtn.disabled = true;
  submitBtn.disabled = true;
});
