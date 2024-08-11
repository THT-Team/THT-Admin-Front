const SERVICE_AGREE_CATEGORY = {
  'PERSONAL_PRIVACY_INFO_AGREE': '개인정보 이용약관',
  'SERVICE_USE_AGREE': '서비스 이용약관',
  'LOCATION_SERVICE_AGREE': '위치정보 이용약관',
  'MARKETING_AGREE': '마케팅 이용약관'
}

export function convertServiceAgreeToString(category) {
  return SERVICE_AGREE_CATEGORY[category]
}

const RELIGION = {
  'NONE' : '무교',
  'CHRISTIAN' : '기독교',
  'CATHOLICISM' : '천주교',
  'BUDDHISM' : '불교',
  'WON_BUDDHISM' : '원불교',
  'OTHER' : '기타'
}
export function convertReligion(data){
  return RELIGION[data]
}

const FREQUENCY = {
  'NONE' : '안함',
  'SOMETIMES' : '가끔',
  'FREQUENTLY' : '자주'
}

export function convertFrequency(data) {
  return FREQUENCY[data]
}

const SEXUALITY = {
  'MALE' : '남성',
  'FEMALE' : '여성',
  'BISEXUAL' : '양성'
}

export function convertGender(data) {
  return SEXUALITY[data]
}

const SNS_TYPE = {
  'NORMAL': '일반',
  'KAKAO': '카카오',
  'NAVER': '네이버',
  'GOOGLE': '구글'
}

export function convertSnsType(data) {
  return SNS_TYPE[data]
}