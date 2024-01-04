import { UserAuth } from '../context/AuthContext'

export default function Message({ message }) {
  const { currentUser } = UserAuth();
  return (
    <div className="">
      <div className={`chat ${message.uid === currentUser.uid ? 'chat-start' : 'chat-end'}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="image user"
              src={message.avatar}
            />
          </div>
        </div>
        <div className="chat-header">
          {message.name}
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">{message.text}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
}
