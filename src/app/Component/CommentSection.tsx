"use client";

import React, { useState} from 'react';
import { Card, CardContent} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from '../../components/ui/button';
import { BiCommentEdit } from 'react-icons/bi';
import { comment } from 'postcss';

interface Comment {
    id: string;
    author: string;
    text: string;
};

interface CommentSectionProps {
    postId: string;
}




export default function CommentSection ({postId}:CommentSectionProps){
const [comments, setComments] = useState <Comment[]>([]);
const [newComment, setNewComment] = useState ('');
const [ authorName, setAuthorName] = useState ('');
const [edittingCommentId, setEdittingCommentId] = useState<string|null> (null);

const handleAddComment = ()=>{
    if (newComment.trim() && authorName.trim()){
        const newCommentObj : Comment ={
            id: new Date().toISOString(),
            author: authorName,
            text: newComment
        };
        setComments([...comments, newCommentObj]);
        setNewComment('');
        setAuthorName('');
        }
    };

const handleEditComment =(commentID:string)=>{
    const commentToEdit = comments.find((comment)=>comment.id ===commentID);
    if (commentToEdit){
        setNewComment (commentToEdit.text),
        setAuthorName (commentToEdit.author),
        setEdittingCommentId (commentID)
    }
};

const handleSaveEditedComment =()=> {
    if (newComment.trim() && authorName.trim() && edittingCommentId){
        const updatedComments = comments.map((comments)=> 
            comments.id === edittingCommentId ?
         {...comments, text: newComment, author: authorName}
         : comments);

        setComments(updatedComments);
        setNewComment('');
        setAuthorName('');
        setEdittingCommentId(null);
    }
};

return(
    <div className='bg-black shadow-lg rounded-lg p-6 mx-1 lg:mx-36 border-2 border-slate-300'>
        <h2 className='text-white text-2xl font-semibold'>Comments</h2>
        <div className='mt-4 space-y-4 '>
            {comments.length > 0 ? (comments.map((comment)=> (
            <Card className='bg-black mb-6' key={comment.id}><CardContent className=' bg-black my-2 p-4'>
                <div className='font-semibold text-slate-200'>{comment.author}</div>
                <p className='text-slate-200'>{comment.text}</p>
                <button onClick={()=> handleEditComment(comment.id)} className='text-white mt-6'>Edit</button>
                </CardContent></Card>
        ))) : (<p className='text-slate-400 mb-4'>No Comment yet</p>)}</div>


        <Input
        type='text'
        value={authorName}
        onChange={(e)=> setAuthorName(e.target.value)}
        placeholder='Your Name'
        className='w-full text-white mb-4'/>

        <Input
        type='text'
        value={newComment}
        onChange={(e)=> setNewComment(e.target.value)}
        placeholder='Add Your Comment'
        className='w-full text-white mb-4'/>

        <button
        onClick={edittingCommentId ? handleSaveEditedComment : handleAddComment}
        className='text-white mt-4'>
            {edittingCommentId ? 'Save' : 'Submit'}
        </button>
    </div>
)
}