const fs = require('fs');
const path = require('path');
const SVGSpriter = require('svg-sprite');
const File = require('vinyl');
const glob = require('glob');

const spriter = new SVGSpriter({
    dest: 'out',
    mode: {
        symbol: true, // Create a «symbol» sprite

    }
});
const cwd = path.resolve('src/assets/icons');

// Add SVG source files — the manual way ...
// Find SVG files recursively via `glob`
glob('**/*.svg', { cwd }, (err, files) => {
    files.forEach(file => {
        // Create and add a vinyl file instance for each SVG
        spriter.add(new File({
            path: path.join(cwd, file), // Absolute path to the SVG file
            base: cwd, // Base path (see `name` argument)
            contents: fs.readFileSync(path.join(cwd, file)) // SVG file contents
        }));
    })

    spriter.compile((error, result, data) => {
        for (const type in result.symbol) {
            fs.writeFileSync('src/assets/icons-sprite.svg', result.symbol[type].contents);
        }
    });
});

// generate list of icons
const dir = './src/assets/icons/';
const getDirectories = function(dir, callback) {
    glob(dir + '/**/*.svg', callback);
};

getDirectories(dir, function(err, res) {
    if (err) {
        console.log('Error', err);
    } else {
        fs.writeFileSync(
            './src/assets/icons.json',
            JSON.stringify(res.map(i => {
                return i
                    .replace(dir, '')
                    .replace('.svg', '')
                    .replace('/', '--')
            })),
        );
    }
});

