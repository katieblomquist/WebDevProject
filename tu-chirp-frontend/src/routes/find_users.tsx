import UserCard from '../components/user_card';
import { Profile } from "../services/entities";

export default function FindUsers() {
    const users: Profile[] = [
        {
            user_id: 1,
            handle: 'user1',
            username: 'User 1',
            email: 'test@test.com',
            date_created: '2024-05-13',
            bio: 'this is my bio...',
            email_notifications: true,
            is_public: true
        },
    ];

    const handleAddUser = (userId: number) => {
        console.log(`User added with ID: ${userId}`);
    };

    return (
        <div>
            <div className="search-bar">
                <input type="text" placeholder="Search users..." />
            </div>
            <div className="user-grid">
                {users.map((user) => (
                    <UserCard key={user.user_id} user={user} onAddUser={handleAddUser} />
                ))}
            </div>
        </div>
    );
}