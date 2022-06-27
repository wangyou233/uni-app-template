const key = "token"
export function getToken(){
	return uni.getStorageSync(key);
}
export function setToken(value){
	uni.setStorageSync(key,value)
}
export function removeToken(){
	uni.removeStorageSync(key)
}
