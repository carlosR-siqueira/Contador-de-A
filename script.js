document.addEventListener('DOMContentLoaded', function() {
    const clearResult = document.querySelector('.clear')

    clearResult.addEventListener('click', function() {
        document.querySelectorAll('.resultContainer > *').forEach(allResults => {
            allResults.textContent = ''
        })
    });
});

document.querySelector('.phraseForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const phraseInput = document.querySelector('.phraseInput')
    const resultLowerCase = document.querySelector('.resultLowerCase')
    const resultUpperCase = document.querySelector('.resultUpperCase')
    const resulTotal = document.querySelector('.resultTotal')
    const inputResult = document.querySelector('.inputResult')

    function countLettersA(str) {
        const countLowerCaseA = (str.match(/a/g) || []).length

        const countUpperCaseA = (str.match(/A/g) || []).length

        return {
            lowerCase: countLowerCaseA,
            upperCase: countUpperCaseA,
            total: countLowerCaseA + countUpperCaseA
        };
    }

    const counts = countLettersA(phraseInput.value)
    inputResult.textContent = phraseInput.value
    resulTotal.textContent = `A letra 'A' aparece ${counts.total} vez(es).`
    resultLowerCase.textContent = `${counts.lowerCase} vez(es) minúscula.`
    resultUpperCase.textContent = ` ${counts.upperCase} vez(es) maiúscula.`
    phraseInput.value = ''

});
