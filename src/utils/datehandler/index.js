
function getDates() {
    const today = new Date();
    const nextDates = [];

    for (let i = 0; i < 3; i++) {
        for (let i = 0; i < 3; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i + 1);
            const year = nextDate.getFullYear();
            const month = String(nextDate.getMonth() + 1).padStart(2, '0'); 
            const day = String(nextDate.getDate()).padStart(2, '0');
            nextDates[i + 1] = `${year}-${month}-${day}`;
        }
    }

    return nextDates;
}
export {
    getDates,
}