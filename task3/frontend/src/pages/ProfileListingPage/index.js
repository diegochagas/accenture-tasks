import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import * as S from './styles';

function ProfileListingPage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function loadProfiles() {
      const response = await api.get('/profiles');

      setProfiles(response.data);
    }

    loadProfiles();
  }, [])

  return (
    <S.Container className="container">
      <S.Title>Profile listing page</S.Title>

      <S.Profiles>
        {profiles.map(profile => (
          <S.Card className="card" key={profile.id} to={`/profile-page/${profile.id}`}>
            <img className="card-img-top" src={profile.avatar} alt={profile.name} />

            <div class="card-body">
              <h5 class="card-title">{profile.name}</h5>
              
              <p class="card-text">{profile.email}</p>
            </div>
          </S.Card>
        ))}
      </S.Profiles>
    </S.Container>
  );
}

export default ProfileListingPage;