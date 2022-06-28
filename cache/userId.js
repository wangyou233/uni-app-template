const key = "userId"
export function getUserId(){
	return uni.getStorageSync(key);
}
export function setUserId(value){
	uni.setStorageSync(key,value)
}
export function removeUserId(){
	uni.removeStorageSync(key)
}
