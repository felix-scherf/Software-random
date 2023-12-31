
import { NavbarBottom } from "./NavbarBottom";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { localStorageData, Logout } from './services/auth/localStorageData';
import ErrorService from './services/formatError/ErrorService';
import userServices from './services/httpService/userAuth/userServices';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { ImageEndPoint } from './config/config';
import React, { useState } from 'react';

export const Supporters = () => {
  let navigate = useNavigate();
  const { Id } = useParams();

  const [allbidders, setallbidders] = React.useState([]);

  const getComments = useQuery(
    'getBidder',
    () => userServices.commonGetService(`/post/getBidders/${Id}`),
    {
      refetchOnWindowFocus: false,
      onError: (error) => {
        toast.error(ErrorService.uniformError(error));
      },
      onSuccess: (res) => {
        console.log(res.data.data);
        setallbidders(res.data.data);
      },
    }
  );

  return (
    <div>
      <div className='casual-header-div '>
        <button className='back-button-button' onClick={() => navigate(-1)}>
        
          <img
            className='back-button-icon' 
          src={require('./img/arrow-left-short.svg')}
          />
        </button>
        <h4 className=' headline headline-with-back-button '> Spendenzusagen </h4>
      </div>

      <div className='voter-div-one '>
        <div className='voter-div-two '>
          {allbidders.map((item) => (
          
             
                <p className='supporter'>
                <Link to={`/profil/${item.user._id}`} className='linkblack'>
                  {/* <img
                    src={
                      item.user.pic
                        ? ImageEndPoint + item.user.pic
                        : require('./img/profile.png')
                    }
                    className='supporter-list-image border-black'
                  />{' '} */}
                  {item.user.fname}•{item.amount}€</Link> </p>
           
          ))}

          {/* 		  
          <p className='anonym supporter-list'>
            Anonym
            <span className='time-supported'> (Zeit)</span>
          </p>
          <p className='supporter-list'>
            <Link to='/profil' className='linkblack'>
              <img
                src={require('./img/profile.png')}
                style={{ visibility: 'hidden' }}
                className='supporter-list-image'
              />{' '}
              (Name)
            </Link>
            <span className='time-supported'> (Zeit)</span>
          </p> */}
        </div>
      </div>

      <NavbarBottom
        classstart='under-navitem-selected'
        classsearch='under-navitem-unselected'
        classactivity='under-navitem-unselected'
        classprofile='under-navitem-unselected'
      />
    </div>
  );
};