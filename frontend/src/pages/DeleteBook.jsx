import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        alert('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4 text-center'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to DELETE this book?</h3>

        <button
          className='p-4 bg-sky-600 text-white mt-16 mb-4 w-full'
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
        <button
          className='p-4 bg-sky-600 text-white mt-2 w-full'
          onClick={handleCancel}
        >
          No, Keep it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook;