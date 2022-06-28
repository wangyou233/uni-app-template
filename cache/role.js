const key = "role"
export function getRole(){
	return uni.getStorageSync(key);
}
export function setRole(value){
	uni.setStorageSync(key,value)
}
export function removeRole(){
	uni.removeStorageSync(key)
}
