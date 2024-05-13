import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export default function FindUsers() {
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([]);

    // Search change
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);

    };

    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Search users..."
                />
            </div>
            <div className="user-grid">
                {/* Mapping through users to render user boxes */}
                {users.map((user) => (
                    <div key={user.id} className="user-box">
                        <div className="profile-icon">
                            {/* Render profile icon here */}
                        </div>
                        <div className="user-details">
                            <span className="username">{user.username}</span>
                            <button className="add-user-btn">
                                <FaPlus /> {/* Plus icon */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}