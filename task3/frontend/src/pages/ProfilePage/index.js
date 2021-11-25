import React, { useState, useEffect }  from 'react';
import { useLocation } from 'react-router-dom';

import api from '../../services/api'

import * as S from './styles';

function ProfilePage() {
  const [profile, setProfile] = useState([]);
  const location = useLocation();
  const [id, setId] = useState('');
  
  useEffect(() => {
    if (location.pathname) {
      setId(location.pathname.split('/')[2]);
    }
  }, [location.pathname])

  useEffect(() => {
    async function loadProfile() {

      const response = await api.get(`/profiles/${id}`);

      setProfile(response.data);
    }

    loadProfile();
  }, [id])

  return (
    <S.Container className="container">
      <S.Title>Profile page</S.Title>

      <S.Profile>
        <S.Line>
          <S.Avatar src={profile.avatar} alt={profile.name} />

          <S.Text>
            <h5>{profile.name}</h5>
            
            <p class="card-text">{profile.email}</p>
          </S.Text>
        </S.Line>

        <S.Line>
          <p>{profile.details}</p>
        </S.Line>
      </S.Profile>

      <S.BackLink to="/profile-listing-page" type="button" className="btn btn-primary">
        Back to profile listing page
      </S.BackLink>
    </S.Container>
  );
}

export default ProfilePage;