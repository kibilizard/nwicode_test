const getConfirm = () => {
   if (confirm("Запустить таймер еще на три секунды?")) {
       setTimeout(getConfirm,3000);
   }
}

const getPrompt = () => {
    let ans = prompt('На сколько секунд поставить таймер?',3);
    if (ans > 0) {
        setTimeout(getPrompt,ans * 1000);
    }
}

//setTimeout(getConfirm,3000);
setTimeout(getPrompt,3000);