const key = "loginInfo"
export function getLoginInfo(){
	return uni.getStorageSync(key);
}
export function setLoginInfo(value){
	uni.setStorageSync(key,value)
}
export function removeLoginInfo(){
	uni.removeStorageSync(key)
}
