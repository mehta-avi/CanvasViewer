import Card from '@mui/joy/Card';
import EventCard from './EventCard';
import Typography from '@mui/joy/Typography';

// Define the event type
interface EventType {
    id: number;
    class: string;
    event: string;
    date: string;
    time: string;
    points: string;
    teacher?: string;
}

// Define the props for DayOfEvents component
interface DayOfEventsProps {
    eventsForDay: EventType[];
}

// Define the DayOfEvents component
export default function DayOfEvents({ eventsForDay }: DayOfEventsProps) {
    return (
        <Card>
            <Typography>
                {eventsForDay[0].date}
            </Typography>
            {eventsForDay.map((event: EventType) => <EventCard key={event.id} eventDetail={event} />)}
        </Card >
    );
}