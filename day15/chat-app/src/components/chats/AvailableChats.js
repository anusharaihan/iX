import React from 'react';

import ChatService from '../../services/chat.service';
import { Chat } from '../../models/chat';

import Button from '../common/Button';

export default function AvailableChats({
  user,
  profiles,
  chats,
}) {

  async function createChatWith(profile) {
    try {
      await ChatService.createChat(new Chat({
        users: [user.uid, profile.id],
      }));
    } catch (err) {
      // TODO handle the error
    }
  }

  function getAvailableProfiles() {
    return profiles
      .filter((profile) => profile.id !== user.uid)
      .filter((profile) => {
        return !chats.find((chat) => chat.users.includes(profile.id));
      });
  }

  return (
    <div className=''>
      {
        getAvailableProfiles().map(profile =>
          <div key={profile.id}
            className="profile-holder">

            <div className='profile'>
              <img src={profile.imageUrl} />

              <div className='ms-3'>
                {profile.name} {profile.surname}
              </div>
            </div>

            <div>
              <Button onClick={() => createChatWith(profile)}>
                +
              </Button>
            </div>
          </div>
        )
      }
    </div>
  )
}
