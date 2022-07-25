//Новый синтаксис который можно встретить в интернете

const {src,	dest, watch, series} = require("gulp");

const moveCSS = () => {
	return src("./src/css/*.css")
		.pipe(dest("./dist/css/"));
}

const moveIMG = () => {
	return src("./src/image/**/*.jpg")
		.pipe(dest("./dist/img/"));
}

const watchers = () => {
	watch('./src/css/*.css', moveCSS);
	watch('./src/image/**/*.jpg', moveIMG);
}

const dev = series(moveCSS, moveIMG, watchers);

exports.watchers = watchers;
exports.moveCSS = moveCSS;
exports.moveIMG = moveIMG;
exports.dev = dev;

