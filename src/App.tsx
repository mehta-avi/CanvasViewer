import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function App() {
  return (
    <Sheet sx={{ width: 300, height: 600 }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography level='title-lg'>
          CanvasViewer
        </Typography>
        <Card variant="soft">
          <CardContent>
            <Typography level="title-md">Event 1</Typography>
            <Typography>Description of the event.</Typography>
          </CardContent>
        </Card>
        <Card variant="soft">
          <CardContent>
            <Typography level="title-md">Event 2</Typography>
            <Typography>Description of the event.</Typography>
          </CardContent>
        </Card>
      </Stack>
    </Sheet>
  );
}