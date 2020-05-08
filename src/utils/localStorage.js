export const getScore = () => {
    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    return localStorage.getItem('score');
}

export const incScore = () => {
    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    const score = localStorage.getItem('score');

    localStorage.setItem('score', +score + 1);
}