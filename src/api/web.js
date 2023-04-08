import request from '../utils/request'


export function getQuestionList() {
  return request({
    url: '/web/question',
    method: 'get',
  })
}

export function startIdentification(data) {
  return request({
    url: '/web/identification',
    method: 'post',
    data
  })
}

export function getIdentificationList(user) {
  return request({
    url: `/web/getIdentificationList/${user}`,
    method: 'get',
    
  })
}
export function getReferenceList() {
  return request({
    url: `/web/reference`,
    method: 'get',
    
  })
}
export function getIdentificationDetail(id) {
  return request({
    url: `/web/identification/${id}`,
    method: 'get',    
  })
}

export function getReferenceDetail(id) {
  return request({
    url: `/web/reference/${id}`,
    method: 'get',    
  })
}

export function getTreatmentCategoryList() {
  return request({
    url: `/web/treatmentCategoryList`,
    method: 'get',    
  })
}

export function getTreatmentList(categoryKey) {
  return request({
    url: `/web/treatmentList/${categoryKey}`,
    method: 'get',    
  })
}

export function getTreatmentDetail(id) {
  return request({
    url: `/web/treatment/${id}`,
    method: 'get',    
  })
}


export function getJingluoList(id) {
  return request({
    url: `/web/jingluo`,
    method: 'get',    
  })
}
export function getJingluoDetail(id) {
  return request({
    url: `/web/jingluo/${id}`,
    method: 'get',    
  })
}

export function getXueweiCategoryList() {
  return request({
    url: `/web/xueweiCategoryList`,
    method: 'get',    
  })
}
export function getXueweiList(categoryKey) {
  return request({
    url: `/web/xueweiList/${categoryKey}`,
    method: 'get',    
  })
}

export function getXueweiDetail(id) {
  return request({
    url: `/web/xuewei/${id}`,
    method: 'get',    
  })
}

export function getFoodDetail(id) {
  return request({
    url: `/web/food/${id}`,
    method: 'get',    
  })
}
export function getFoodList(id) {
  return request({
    url: `/web/food`,
    method: 'get',    
  })
}

export function search(data) {
  return request({
    url: `/web/search`,
    method: 'post', 
    data   
  })
}





 

  

