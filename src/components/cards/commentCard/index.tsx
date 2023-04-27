import { CommentCardData } from '@/types/Card'
import CustomCard from '../customCard'

import { StyledCardContent, StyledCardInput } from '../styles'
import { timeSince } from '@/utils/timeSince'
import { useState } from 'react'
import CustomDrawer, { COMMENT_UTIL_TYPE, DrawerType } from '@/components/customDrawer'
import CommentEdit from '../commentEdit'
import { useMutation } from 'react-query'
import { updateComment } from '@/apis/Comment'

/**
 * @example 
 * <CommentCard profileImg={profileImg} userName={userName} content={content} createdAt={createdAt} updatedAt={updatedAt} moreBtn={moreBtn}/>
 * 또는
 * <CommentCard {...CommentCardData} />

 * @property {string} props.profileImg - 프로필 이미지 URL입니다.
 * @property {string} props.userName - 사용자 이름입니다.
 * @property {string} props.content - 댓글에 들어갈 내용입니다.
 * @property {Date} props.createdAt - 댓글 작성 시 생성된 Date 객체입니다 
 * @property {Date} props.updatedAt - 댓글 수정 시 생성된 Date 객체입니다. 
 * @property {Number} props.commnetId - 댓글 수정 시 생성된 Date 객체입니다. 
 * @return {JSX.Element} `CustomCard` 렌더링된 댓글 카드를 반환합니다.
 * @description CommentCardData는 `@/types/Card.ts`또는 CommentCard 컴포넌트 상단의 import에서 `command + click`으로 확인 가능합니다.
 * @date 2023.04.23
 * @author 임성열
 */
function CommentCard({ commentId, userName, content, createdAt, updatedAt, moreBtn }: CommentCardData) {
    const [contetReadonly, setContetReadonly] = useState<boolean>(true)
    const [isCommentDrawerOpen, setIsCommentDrawerOpen] = useState(false)

    // 작성시간과 수정시간이 같다면 작성된 시간 기준으로 문자열 생성
    // 그게 아니라면 수정이 된 것이므로 수정시간을 기준으로 문자열 생성
    const timeStamp = createdAt.toString() === updatedAt.toString() ? timeSince(createdAt) + ' 작성됨' : timeSince(updatedAt) + ' 수정됨'
   
    const toggleCommentDrawer = () => {
        setIsCommentDrawerOpen((prev) => !prev)
    }

    const toggleReadOnly = () => {
        setContetReadonly((prev) => !prev)
    }

    const commentDrawerProps = {
        type: COMMENT_UTIL_TYPE as DrawerType,
        id: commentId,
        isOpen: isCommentDrawerOpen,
        commentFn: toggleReadOnly,
    }

    const { mutate } = useMutation((variables: { content: string; commentId: number }) => updateComment(variables), {
        onSuccess: () => {
            // invalidate query
        },
        onError: (error) => {
            alert(error)
        },
    })

    const handleCommentUpdate = (updatedContent: string) => {
        mutate({ content: updatedContent, commentId: commentId })
    }

    // CustomCard 컴포넌트 레이아웃안의 자식 요소로 전달
    return (
        <>
            <CustomCard profileImg={'/default.png'} userName={userName} timeStamp={timeStamp}  moreBtn={moreBtn} moreBtnFn={toggleCommentDrawer}>
                {contetReadonly ? (
                    <StyledCardContent>{content}</StyledCardContent>
                ) : (
                    <CommentEdit initialContent={content} isReadOnly={false} onSubmit={handleCommentUpdate} />
                )}
            </CustomCard>
            <CustomDrawer {...commentDrawerProps} toggleDrawer={toggleCommentDrawer } isOpen={isCommentDrawerOpen}/>
        </>
    )
}

export default CommentCard
