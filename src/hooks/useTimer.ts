export  const useTimer=(time: number): string[] =>{
    const milliseconds = Math.floor(time % 10);
    const seconds = Math.floor(time / 10) % 60;
    const minits = Math.floor(time / 600) % 60;
    const hours = Math.floor(time / 36000);

    // Formatuje czas do dwucyfrowych godzin, minut i sekund oraz trzycyfrowych setnych sekundy
    const hh = hours < 10 ? `0${hours}` : `${hours}`;
    const mm = minits < 10 ? `0${minits}` : `${minits}`;
    const ss = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const ms = `${milliseconds}`;

    return [hh, mm, ss, ms];
}