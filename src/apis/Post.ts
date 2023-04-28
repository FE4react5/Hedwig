import { PostRequestData } from '@/types/Post'
import { axiosInstance } from './axios'

export const createPost = async (createPostData: FormData) => {
    const { data } = await axiosInstance.post('/post', createPostData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

}

export const getPost = async (id: number) => {
    const response = await axiosInstance.get(`/post/${id}`)
    return response.data
}

export const getPosts = async () => {
    const response = await axiosInstance.get('/post')
    return response.data
}


export const updatePost = async (postId: number, newData: PostRequestData) => {
    const response = await axiosInstance.put(`/post/${postId}`, newData)

}

export const deletePost = async (postId: number) => {
    const response = await axiosInstance.delete(`/post/${postId}`)

}

export const likePost = async (postId: number) => {
   const response = await axiosInstance.post(`/like/${postId}`)

}