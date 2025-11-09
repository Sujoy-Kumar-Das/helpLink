import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

interface Donor {
  name: string;
  amount: number;
  time: string;
  anonymous?: boolean;
}

export default function CampaignDetailRecentDonor() {
  const recentDonors: Donor[] = [
    { name: "Karim", amount: 50, time: "2h ago" },
    { name: "Anonymous", amount: 100, time: "1d ago", anonymous: true },
  ];

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom fontWeight={700}>
          Recent Donors
        </Typography>
        <List dense>
          {recentDonors.map((donor, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemText
                primary={
                  <Typography variant="body2" fontWeight={600}>
                    {donor.anonymous ? "Anonymous" : donor.name}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    ${donor.amount.toLocaleString()} • {donor.time}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
