const getInputData = (inputData) => {
    const inputfield = document.getElementById(inputData);
    const inputTaka = parseFloat(inputfield.value);
    inputfield.value = '';
    return inputTaka;

}

const getPreviusData = (previusData) => {
    const previousAmount = document.getElementById(previusData);
    const previousTaka = parseFloat(previousAmount.innerText);
    return previousTaka;

}

const setDepositeAmount = (previousData, newTotal) => {
    if (isNaN(newTotal)) {
        newTotal = 0
    } else {
        const previousDepositeTaka = document.getElementById(previousData);
        previousDepositeTaka.innerText = newTotal;
    }

}


// ---------------Deposite section handler ---------------

document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeAmount = getInputData('deposite-field');
    if (isNaN(depositeAmount) || depositeAmount < 0) {
        alert('please input any positive amount')
    } else {
        const oldDepositeAmount = getPreviusData('deposite');
        const totalDepositeAmount = depositeAmount + oldDepositeAmount;
        const totalPreviaceBalance = getPreviusData('Total-Balance');
        const totalFinalBalance = totalPreviaceBalance + depositeAmount;


        setDepositeAmount('deposite', totalDepositeAmount)
        setDepositeAmount('Total-Balance', totalFinalBalance)
        setDepositeAmount('Last-Deposite', depositeAmount)
        setTotalTaka(depositeAmount)
    }

})

// -----------withdraw section handler----------------

document.getElementById('Withdraw-btn').addEventListener('click', function () {
    const withdrawFild = getInputData('Withdraw-field');
    if (isNaN(withdrawFild) || withdrawFild < 0) {
        alert('please input any positive amount')
    } else {
        const previousWithdraw = getPreviusData('Withdraw');
        const totalWithdraw = withdrawFild + previousWithdraw;
        const totalPreviaceBalance = getPreviusData('Total-Balance');
        const totalFinalBalance = totalPreviaceBalance - withdrawFild;


        if (withdrawFild > totalPreviaceBalance) {
            alert('You have no enough money')
        } else if (totalPreviaceBalance === 0) {
            alert('You have no enough money')
        } else {
            setDepositeAmount('Total-Balance', totalFinalBalance);
            setDepositeAmount('Withdraw', totalWithdraw);
            setDepositeAmount('Last-Withdraw', withdrawFild);
            setWithdraw(withdrawFild)
        }


    }
})
// -------Safely logout button -----------------------
document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.href = 'index.html'
})
// ------------------data store section------------------

const getTotalTaka = () => {
    let totalTaka = 0;
    const totalStore = localStorage.getItem('total')
    if (totalStore) {
        totalTaka = parseFloat(totalStore)
    }
    return totalTaka;
}
const getTotalDeposite = () => {
    let totalDepositeTaka = 0;
    const totalDeposite = localStorage.getItem('total-deposite')
    if (totalDeposite) {
        totalDepositeTaka = parseFloat(totalDeposite)
    }
    return totalDepositeTaka;
}

const setTotalTaka = (newTotal) => {
    const finalTotal = getTotalTaka()
    const totalAmount = finalTotal + newTotal
    const totalDeposite = getTotalDeposite()
    const totalDepositeTaka = totalDeposite + newTotal
    localStorage.setItem('total', totalAmount)
    localStorage.setItem('last-Deposite', newTotal)
    localStorage.setItem('total-deposite', totalDepositeTaka)

    // displayFromStore(totalAmount)
}
const displayFromStore = () => {
    const lastTotal = getTotalTaka()
    const totalDeposite = getTotalDeposite()
    const lastDeposite = parseFloat(localStorage.getItem('last-Deposite'))
    setDepositeAmount('Total-Balance', lastTotal)
    setDepositeAmount('deposite', totalDeposite)
    setDepositeAmount('Last-Deposite', lastDeposite)

}
displayFromStore()
// ---------------------Withdra section--------------
const getWithdraw = () => {
    let withdraw = 0;
    const withdrawAmount = parseFloat(localStorage.getItem('total-withdraw'))
    if (withdrawAmount) {
        withdraw = parseFloat(withdrawAmount)
    }
    return withdraw;
}

const setWithdraw = (withdraw) => {
    const totalWithdraw = getWithdraw()
    const totalAmount = getTotalTaka()
    const finalTotal = totalAmount - withdraw;
    const withdrawAmount = totalWithdraw + withdraw;
    localStorage.setItem('total-withdraw', withdrawAmount)
    localStorage.setItem('total', finalTotal)
    localStorage.setItem('last-withdraw', withdraw)

}

const displayWithdraw = () => {
    const totalWithdraw = getWithdraw();
    const lastWithdraw = localStorage.getItem('last-withdraw')
    setDepositeAmount('Withdraw', totalWithdraw)
    setDepositeAmount('Last-Withdraw', lastWithdraw)
}

displayWithdraw()