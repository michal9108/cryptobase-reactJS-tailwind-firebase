import React from 'react';
import UlozenaKrypto from '../components/UlozenaKrypto';
import { UserAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Ucet = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div className='max-w-[1140px] mx-auto'>
        <div className='flex justify-between items-center my-12 py-8 rounded-div'>
          <div>
            <h1 className='text-2xl font-bold'>Účet</h1>
            <div>
              <p>Vitaj u nás, {user?.email}!</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleSignOut}
              className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'
            >
              Odhlásenie
            </button>
          </div>
        </div>
        <div className='flex justfiy-between items-center my-12 py-8 rounded-div'>
          <div className='w-full min-h-[300px]'>
            <h1 className='text-2xl font-bold py-4'>Sledujúci list</h1>
            <UlozenaKrypto />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to='/prihlasenie' />;
  }
};

export default Ucet;