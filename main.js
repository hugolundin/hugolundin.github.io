const query = window.location.search;
const parameters = new URLSearchParams(query);

if (parameters.has("db")) {
    const db = parseFloat(parameters.get("db"));
    const gain = 10**(db/10);
    window.alert("Gain = " + gain.toFixed(1));
}

if (parameters.has("gain")) {
    const gain = parseFloat(parameters.get("gain"));
    const db = 10*Math.log10(gain);
    window.alert(db.toFixed(1) + " dB");
}

if (parameters.has("vgain")) {
    const gain = parseFloat(parameters.get("vgain"));
    const db = 20*Math.log10(gain);
    window.alert(db.toFixed(1) + " dB");
}
