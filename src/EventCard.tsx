import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/joy/Grid';
import MoreEventInformation from './MoreEventInformation';

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
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    <Typography level="body-xs">Due {eventDetail.time} on {eventDetail.date}</Typography>
                    <Tooltip title={<MoreEventInformation key={eventDetail.id} eventDetail={eventDetail} />} variant="soft" sx={{ mb: -1, mr: -1, mt: -2 }}>
                        <IconButton>
                            <ExpandMoreIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </CardContent>
        </Card >
    );
}