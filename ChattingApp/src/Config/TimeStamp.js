export function timeAgo(date) {
    const now = new Date();

    // Ép date UTC -> giờ Việt Nam (+7)
    const pastUTC = new Date(date);
    const pastVN = new Date(pastUTC.getTime() + 7 * 60 * 60 * 1000);

    const secondsAgo = Math.floor((now - pastVN) / 1000);

    if (secondsAgo < 60) return `${secondsAgo} seconds ago`;

    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) return `${minutesAgo} minutes ago`;

    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) return `${hoursAgo} hours ago`;

    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 30) return `${daysAgo} days ago`;

    const monthsAgo = Math.floor(daysAgo / 30);
    if (monthsAgo < 12) return `${monthsAgo} months ago`;

    return `${Math.floor(monthsAgo / 12)} years ago`;
}
