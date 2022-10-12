//asyncFunctions - массив асинхронных функций, возвращающих промис
//reduce(memo, value) - функция, которая будет вызвана для каждого успешно завершившегося промиса.
//initialValue - стартовое значение для функции reduce
async function promiseReduce(asyncFunctions, reduce, initialValue) {
	if (!Array.isArray(asyncFunctions) || typeof reduce !== 'function' || initialValue === undefined) {
		throw new Error('Wrong promiseReduce method parameters');
	}

	let temp = initialValue;

	for (let asyncFunction of asyncFunctions) {
		try {
			temp = reduce(temp, await asyncFunction());
		} catch (ex) {
			console.log(ex);
			return temp; // Тут можно возвращать какую-то более адекватную ошибку
		}
	}

	return temp;
}

//Либо можно возвращать так через нативный reduce для самого массива.
function promiseReduce(asyncFunctions, reduce, initialValue) {
	if (!Array.isArray(asyncFunctions) || typeof reduce !== 'function' || initialValue === undefined) {
		throw new Error('Wrong promiseReduce method parameters');
	}

	return asyncFunctions.reduce(
		(acc, fn) =>
			acc.then(async (temp) => {
				try {
					return reduce(temp, await fn());
				} catch (ex) {
					console.log(ex);
					return temp;
				}
			}),
		Promise.resolve(initialValue)
	);
}
