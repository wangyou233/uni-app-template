const key = "token"
function getToken(){
	uni.getStorageSync(key);
}
function setToken(value){
	uni.setStorageSync(key,value)
}
function removeToken(){
	uni.removeStorageSync(key)
}
export default{getToken,setToken,removeToken}