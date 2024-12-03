function evaluateMeal(mealType) {
    const mealInfo = document.getElementById(mealType);
    if (mealInfo.classList.contains('hidden')) {
        mealInfo.classList.remove('hidden');
        mealInfo.classList.add('visible');
    } else {
        mealInfo.classList.remove('visible');
        mealInfo.classList.add('hidden');
    }
}
