window.fn = module.exports = {
	fn: function () {
		fn('hello');
	}
};

function fn() {
	return this;
}
