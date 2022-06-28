import Request from '@/api/request.js'
let request = new Request().http

// 基础模块

export function login(data) {
	return request({
		url: "/User/Login/Login", //请求头
		method: "POST", //请求方式 
		data: data, //请求数据
	})
}

export function getUserInfo(userId){
	return request({
		url:"/ManagerPersonalsController/ManagerPersonals/GetTeacherInfo",
		method:"POST",
		data:{userId : userId}
	})
}