const timeSinceStart = (startDate) => {
    const now = new Date();
    const diff = now.getTime() - new Date(startDate).getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { years, months, hours, minutes }
}

export default timeSinceStart