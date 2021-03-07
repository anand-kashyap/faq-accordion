const questions = document.querySelectorAll('.question');
for (const ques of questions) {
  ques.addEventListener('click', function (e) {
    const parBlock = this.parentElement;
    if (parBlock.classList.contains('hide')) {
      parBlock.classList.remove('hide');
    } else {
      parBlock.classList.add('hide');
    }
  });
}