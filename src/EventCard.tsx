import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

type EventDetailType = {
    id: number;
    class: string;
    event: string;
    date: string;
    time: string;
};

export default function EventCard({ eventDetail }: { eventDetail: EventDetailType }) {
    return (
        <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
                textAlign: 'left',
                width: 300,
                overflow: 'auto',
                boxShadow: 'lg'
            }}
        >
            <CardOverflow
                variant="solid"
                color="primary"
                sx={{
                    flex: '0 0 60px',
                    display: 'flex',
                }}
            >
            </CardOverflow>
            <CardContent>
                <Typography level="body-xs">{eventDetail.class}</Typography>
                <Typography level="h4">{eventDetail.event}</Typography>
                <Typography level="body-xs">Due {eventDetail.time} on {eventDetail.date}</Typography>
            </CardContent>
        </Card>
    );
}