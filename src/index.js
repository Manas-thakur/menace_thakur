#!/usr/bin/env node
// Color codes for terminal (ANSI escape codes)
const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fgBlack: "\x1b[30m",
    fgRed: "\x1b[31m",
    fgGreen: "\x1b[32m",
    fgYellow: "\x1b[33m",
    fgBlue: "\x1b[34m",
    fgMagenta: "\x1b[35m",
    fgCyan: "\x1b[36m",
    fgWhite: "\x1b[37m",
    
    bgBlack: "\x1b[40m",
    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgWhite: "\x1b[47m"
};

// Array of jokes about Menace
const menaceJokes = [
    "Why did Menace bring a GPS to a party? Because even when he's lost, he's mapping out new solutions!",
    "Menace doesn't just debug code; he debugs life—too bad there's no 'npm install energy' for when he's feeling 'mude'!",
    "Menace calls his thinking time 'Menace Mode'—it's dangerous to interrupt!",
    "Ever seen Menace without his laptop? Neither have I—he’s always coding, even in his dreams!",
    "Menace once optimized his playlist to match his workflow speed. Now he codes like a DJ!"
];

// Function to get a random joke
function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * menaceJokes.length);
    return menaceJokes[randomIndex];
}

// Portfolio description with colorful ASCII kitty and improved layout
const menacePortfolio = () => {
    return `
${colors.fgBlue}${colors.bright}╔══════════════════════════════════════════════════╗${colors.reset}
${colors.fgCyan}${colors.bright}  Welcome to the vibrant world of Menace!${colors.reset}
${colors.fgBlue}${colors.bright}╚══════════════════════════════════════════════════╝${colors.reset}

${colors.fgGreen}${colors.bright}Menace (aka 'Manas') is a creative coder and problem-solver with a passion for blending tech and creativity. 
He's working on futuristic projects ranging from AI-based tolling systems to lunar image enhancement.${colors.reset}

${colors.fgYellow}${colors.bright}Key Projects:${colors.reset}
${colors.fgMagenta}- ${colors.bright}'Experience'${colors.reset}${colors.fgMagenta}: An app that crafts a unique persona based on your music tastes from Spotify and YouTube Music.
- ${colors.bright}'GNSS Tolling System'${colors.reset}${colors.fgMagenta}: A map-matching algorithm using AI to improve toll accuracy on highways.
- ${colors.bright}'PSR Lunar Imaging'${colors.reset}${colors.fgMagenta}: Enhancing low-light images of permanently shadowed lunar craters to aid in landing site selection.
- ${colors.bright}'ISL Translation'${colors.reset}${colors.fgMagenta}: Using YOLOv8 to enhance non-manual features in Indian Sign Language.${colors.reset}

${colors.fgCyan}${colors.bright}Here's an adorable kitty just for fun:${colors.reset}

${colors.fgRed}   /\\___/\\${colors.reset}
${colors.fgRed}  /        \\${colors.reset}
${colors.fgRed}  l  u   u  l${colors.reset}
${colors.fgRed}--l----*----l--${colors.reset}      ${colors.fgYellow}- Meow!${colors.reset}
${colors.fgRed}   \\   w   /${colors.reset}
${colors.fgRed}     ======${colors.reset}
${colors.fgRed}   /       \\ __${colors.reset}
${colors.fgRed}  l        l\\ \\${colors.reset}
${colors.fgRed}  l        l/ /${colors.reset}
${colors.fgRed}  l  l l   l /${colors.reset}
${colors.fgRed}   \\ ml lm /_/ ${colors.reset}

${colors.fgBlue}${colors.bright}╔══════════════════════════════════════════════════╗${colors.reset}
${colors.fgGreen}${colors.bright}   And here's a random joke about Menace for you:${colors.reset}
${colors.fgBlue}${colors.bright}╚══════════════════════════════════════════════════╝${colors.reset}

${colors.fgGreen}${getRandomJoke()}${colors.reset}
    `;
};

// Export the portfolio and joke generator
module.exports = {
    menacePortfolio,
    getRandomJoke
};

// Refresh portfolio and joke on each run
console.log(menacePortfolio());
