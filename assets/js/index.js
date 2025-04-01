const inputs = Array.from(document.getElementsByTagName('input'));
const resetBtn = document.getElementById('reset');
const submitBtn = document.getElementById('submit');
const arrows = Array.from(document.querySelectorAll('.arrow'));
const form = document.querySelector('form');

inputs.forEach((el) => {
  el.addEventListener('keyup', (e) => {
    const tar = inputs.indexOf(e.target);
    const valid = e.target.checkValidity();

    if (tar + 1 >= inputs.length && valid) {
      resetBtn.disabled = false;
      submitBtn.disabled = false;
      arrows[tar].style.display = 'inline-block';
      arrows.forEach((a) => {
        a.style.backgroundImage =
          'linear-gradient(to bottom right, transparent 50%, green 0), linear-gradient(to top right, green 50%, transparent 0)';
      });
    }
    if (valid && tar + 1 <= inputs.length) {
      inputs[tar + 1].style.display = 'block';
      arrows[tar].style.display = 'inline-block';
    } else {
      inputs[tar + 1].style.display = 'none';
    }
  });
});

resetBtn.addEventListener('click', () => {
  form.reset();

  inputs.forEach((input) => {
    input.value = '';
  });
  for (let i = 1; i < inputs.length; i++) {
    console.log('got here!');
    inputs[i].style.display = 'none';
  }

  for (let i = 0; i < arrows.length; i++) {
    arrows[i].style.display = 'none';
    arrows[i].style.backgroundImage =
      'linear-gradient(to bottom right, transparent 50%, red 0), linear-gradient(to top right, red 50%, transparent 0)';
  }

  resetBtn.disabled = true;
  submitBtn.disabled = true;
});
