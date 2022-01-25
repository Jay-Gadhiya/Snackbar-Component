const baselineBtn = document.querySelector('#snack-baseline');
const baselineELe = document.querySelector('.baseline');
const deleteSnack = document.querySelector('.delete');
const leadingBtn = document.querySelector('#snack-leading');
const leadingEle = document.querySelector('.leading');
const deleteLeading = document.querySelector('.delete-leading');
const deleteStack = document.querySelector('.delete-stack');
const stackBtn = document.querySelector('#snack-stacked');
const stackELe = document.querySelector('.stack-snack');


baselineBtn.addEventListener('click', () => {
    baselineELe.classList.remove('js-base-delete');
    baselineELe.classList.add('js-base');
    setTimeout(() => {
        baselineELe.classList.remove('js-base');
    }, 3000);
})


leadingBtn.addEventListener('click', () => {
    leadingEle.classList.remove('js-leading-delete');
    leadingEle.classList.add('js-leading');
    setTimeout(() => {
        leadingEle.classList.remove('js-leading');
    }, 3000);
})


stackBtn.addEventListener('click', () => {
    stackELe.classList.remove('js-stack-delete');
    stackELe.classList.add('js-stack');
    setTimeout(() => {
        stackELe.classList.remove('js-stack');
    }, 3000);
})



deleteSnack.addEventListener('click', () => {
    baselineELe.classList.add('js-base-delete');
})

deleteLeading.addEventListener('click', () => {
    leadingEle.classList.add('js-leading-delete');
})


deleteStack.addEventListener('click', () => {
    stackELe.classList.add('js-stack-delete');
   
})