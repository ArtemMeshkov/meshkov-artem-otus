const fs = require('fs')
const path = require('path')
const folderPath = process.argv.slice(2).toString();

// Если хотим аккуратный вывод без директории полностью,то path.join
// Иначе path.resolve(...paths)

const findPath = function (folderPath, result, firstDir, next) {
    fs.readdir(folderPath, function (err, items) {
        if (err) {
			return next(err);
		}

		// Нужно указать текущую директорию по тз
		if (firstDir) {
			result.dirs.push(path.join(folderPath));
		}

        let itemsLeft = items?.length;
		
        items.forEach(function (item, i, arr) {
            const newPath = path.join(folderPath, items[i]);
            fs.stat(newPath, function (err, stats) {
                if (stats.isDirectory()) {
                    findPath(newPath, result, false, function (err, res) {
                        result.dirs.push(newPath);
                        if (!--itemsLeft) {
                            next(null, result);
                        }
                    });
                } else {
                    result.files.push(newPath);

                    if (!--itemsLeft) {

                        next(null, result);
                    }
                }
            })
        })
        if (!itemsLeft) {
            return next(null, result);
        }

    })
}

var files = {
    dirs: [],
    files: []
};

findPath(folderPath, files, true, function (err, res) {
    files = res;
    var files_json = JSON.stringify(files);
    console.log(files_json);
});