// CardHeader.tsx와 CardContent.tsx 를 하위 컴포넌트로 사용하여 
// 타입 ("POST","POSTDETAIL","COMMENT")별로 다른 Card컴포넌트를 생성
// More버튼과 editable시 나타날 확인 취소버튼, 댓글input focus시 나타날 reply, 취소 버튼
// More버튼 렌더링 포함할지 확인한 후 렌더링 할 것
// 사용할 때 <Card type={"POST"} data={postData} /> 또는
// <Card {"POST", postData} /> 할 수 있도록
// 아직 구조 체계화 미정

import React from 'react'

function Card() {
  return (
    <div>Card</div>
  )
}

export default Card

