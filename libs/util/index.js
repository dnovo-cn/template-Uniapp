

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作
const install = (Vue, vm) => {
	
	// 缓存存入指定数据
	function setStorage(key, data) {
		// #ifdef H5
		sessionStorage.setItem(key, JSON.stringify(data));
		// #endif
		// #ifndef H5
		uni.setStorageSync(key, JSON.stringify(data))
		// #endif
	}
	
	// 缓存取出指定数据
	function getStorage(key) {
		// #ifdef H5
		if (!sessionStorage.getItem(key)) {
			return sessionStorage.getItem(key);
		}
		return JSON.parse(sessionStorage.getItem(key));
		// #endif
		// #ifndef H5
		if (!uni.getStorageSync(key)) {
			return uni.getStorageSync(key);
		}
		return JSON.parse(uni.getStorageSync(key));
		// #endif
	}
	
	// 缓存去除指定数据
	function removeStorage(key) {
		// #ifdef H5
		sessionStorage.removeItem(key);
		// #endif
		// #ifndef H5
		uni.removeStorageSync(key);
		// #endif
	}
	
	// 缓存去除所有数据
	function clearStorage() {
		// #ifdef H5
		sessionStorage.clear();
		// #endif
		// #ifndef H5
		uni.clearStorageSync();
		// #endif
	}
	
	// 获取系统信息
	function getSystemInfoSync() {
		return uni.getSystemInfoSync()
	}
	
	// 时间戳
	function getTimeStamp() {
		return parseInt(new Date().getTime() / 1000).toString()
	}
	
	// 32位随机字符串
	function getRandomNum() {
		let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
			'K',
			'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
			'g', 'h',
			'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
		];
		let nums = "";
		for (let i = 0; i < 32; i++) {
			let temp = parseInt(Math.random() * 61);
			nums += chars[temp];
		}
		return nums.toString()
	}
	
	// 日志打印
	function log(info, data, status) {
		if(process.env.NODE_ENV !== 'development' && !status){
			return false;
		}else{
			console.log('---------------------' + info + '---------------------');
			console.log(data);
		}
	};
	
	// 对象非空判断
	function isEmptyObj(obj) {
		for (var key in obj) {
			if ({}.hasOwnProperty.call(obj, key)) return false;
		}
		return true;
	};
	
	vm._util = {setStorage, getStorage, removeStorage, clearStorage, getTimeStamp, getRandomNum, log, isEmptyObj};
}

export default {
	install
}