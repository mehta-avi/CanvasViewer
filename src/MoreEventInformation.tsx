import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function MoreEventInformation({ eventDetail }: { eventDetail: any }) {
    return (
        <Card
            variant="plain"
            sx={{
                textAlign: 'left',
                minWidth: 120,
                boxShadow: 'lg'
            }}
        >
            <CardContent>
                <Typography level="body-xs">{eventDetail.points} pts </Typography>
                <Typography level="body-xs">Teacher: {eventDetail.teacher} </Typography>
            </CardContent>
        </Card>
    );
}