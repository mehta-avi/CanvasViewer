import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import EventCard from './EventCard';

export default function App() {

  const events = [
    {
      id: 1,
      class: 'COMPUTER SCIENCE 1ST YR SEM',
      event: 'Elevator Pitch',
      date: '9/10/2023',
      time: '11:59 pm',
    },
    {
      id: 2,
      class: 'PUBLIC SPEAKING',
      event: 'REAL PS 2',
      date: '9/11/2023',
      time: '11:59 pm',
    }
  ]

  return (
    <Sheet sx={{ width: 350, height: 600 }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        padding={1}
      >
        <Typography level="h2">
          Canvas Events
        </Typography>
        {events.map(event => <EventCard key={event.id} eventDetail={event} />)}
      </Stack>
    </Sheet>
  );
}