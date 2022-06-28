const key = "schoolInfo"
export function getSchoolInfo(){
	return uni.getStorageSync(key);
}
export function setSchoolInfo(value){
	uni.setStorageSync(key,value)
}
export function removeSchoolInfo(){
	uni.removeStorageSync(key)
}
