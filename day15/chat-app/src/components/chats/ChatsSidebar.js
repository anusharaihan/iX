import React from 'react';

export default function ChatSidebar({
  chats,
  user,
  profiles,
}) {

  function getOtherPersonProfile(chat) {
    const otherPersonId = chat.users.find((userId) => userId !== user.uid);
    return profiles.find((profile) => profile.id === otherPersonId);
  }

  return (
    <div className='chats-sidebar'>

      {
        chats.map((chat) =>
          <div key={chat.id} className='profile-holder'>
            <div className='profile'>
              <img src={getOtherPersonProfile(chat).imageUrl} />

              <div className='ms-3'>
                {getOtherPersonProfile(chat).name} {getOtherPersonProfile(chat).surname}
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}
