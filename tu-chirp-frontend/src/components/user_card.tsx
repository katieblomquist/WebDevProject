import { Avatar, Button, Card } from '@mui/material';
import { Profile } from '../services/entities';

export default function UserCard(props: { user: Profile, onAddUser: (userId: number) => void }) {

    // Handle adding user
    const handleAddUser = () => {
        props.onAddUser(props.user.user_id);
    };

    let initial = props.user.handle.charAt(0).toUpperCase();

    return (
        <Card variant="outlined" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', margin: '0 20px' }}>
            <Avatar>{initial}</Avatar>
            <p>{props.user.username}</p>
            <Button onClick={handleAddUser}>Add</Button>
        </Card>
    );
}
