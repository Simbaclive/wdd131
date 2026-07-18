// Footer dates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Wind Chill Calculation
const temp = 15; // Static temp
const speed = 10; // Static speed

const calculateWindChill = (t, v) => {
    return (t <= 10 && v > 4.8) 
        ? (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1) + "°C" 
        : "N/A";
};

document.getElementById('windChill').textContent = `Wind Chill: ${calculateWindChill(temp, speed)}`;