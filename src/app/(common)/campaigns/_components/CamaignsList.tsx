import { Grid } from "@mui/material";
import CampaignCard from "./CampaignCard";

const fakeCampaigns = [
  {
    id: "1",
    title: "Sylhet Flood Relief",
    description:
      "Emergency relief for flood-affected families in Sylhet region. Providing food, shelter, and medical aid to those in desperate need.",
    category: "Disaster Relief",
    tags: ["Urgent", "Emergency", "Food"],
    status: "urgent" as const,
    location: "Sylhet, Bangladesh",
    goal: 50000,
    raised: 27450,
    organizer: {
      name: "Bangladesh Red Crescent",
      avatar: "/images/org-red-crescent.jpg",
    },
    images: ["/images/sylhet-flood-1.jpg"],
    impact: "1,200 families supported",
    daysLeft: 15,
    progress: 55,
    donors: 342,
  },
  {
    id: "2",
    title: "Education for All Children",
    description:
      "Providing educational materials and scholarships for underprivileged children in rural areas to ensure equal learning opportunities.",
    category: "Education",
    tags: ["Education", "Children", "Scholarship"],
    status: "active" as const,
    location: "Rangpur, Bangladesh",
    goal: 25000,
    raised: 18900,
    organizer: {
      name: "Teach Bangladesh Foundation",
      avatar: "/images/org-teach-bd.jpg",
    },
    images: ["/images/education-1.jpg"],
    impact: "500 students supported",
    daysLeft: 45,
    progress: 76,
    donors: 215,
  },
  {
    id: "3",
    title: "Medical Aid for Rural Clinics",
    description:
      "Funding medical treatments and healthcare services for low-income families in remote areas without access to proper healthcare.",
    category: "Healthcare",
    tags: ["Health", "Medical", "Urgent"],
    status: "urgent" as const,
    location: "Bandarban, Bangladesh",
    goal: 75000,
    raised: 42300,
    organizer: {
      name: "Health for All NGO",
      avatar: "/images/org-health-all.jpg",
    },
    images: ["/images/medical-1.jpg"],
    impact: "800 patients treated",
    daysLeft: 12,
    progress: 56,
    donors: 478,
  },
  {
    id: "4",
    title: "Clean Water Initiative",
    description:
      "Installing water purification systems in communities without access to clean drinking water, preventing water-borne diseases.",
    category: "Environment",
    tags: ["Water", "Environment", "Sustainability"],
    status: "active" as const,
    location: "Khulna, Bangladesh",
    goal: 35000,
    raised: 28500,
    organizer: {
      name: "Green Bangladesh Trust",
      avatar: "/images/org-green-bd.jpg",
    },
    images: ["/images/water-1.jpg"],
    impact: "5 villages provided clean water",
    daysLeft: 89,
    progress: 81,
    donors: 189,
  },
  {
    id: "5",
    title: "Women Entrepreneurship Program",
    description:
      "Empowering women through skill development and small business startup funding to create sustainable livelihoods.",
    category: "Women Empowerment",
    tags: ["Women", "Business", "Education"],
    status: "active" as const,
    location: "Dhaka, Bangladesh",
    goal: 40000,
    raised: 31200,
    organizer: {
      name: "Women Empowerment Society",
      avatar: "/images/org-women-empower.jpg",
    },
    images: ["/images/women-1.jpg"],
    impact: "120 women trained",
    daysLeft: 67,
    progress: 78,
    donors: 156,
  },
  {
    id: "6",
    title: "Cyclone Recovery Fund",
    description:
      "Rebuilding homes and infrastructure in coastal areas affected by recent cyclones, helping communities recover and rebuild.",
    category: "Disaster Relief",
    tags: ["Urgent", "Disaster", "Rebuild"],
    status: "urgent" as const,
    location: "Cox's Bazar, Bangladesh",
    goal: 100000,
    raised: 67800,
    organizer: {
      name: "Coastal Recovery Network",
      avatar: "/images/org-coastal.jpg",
    },
    images: ["/images/cyclone-1.jpg"],
    impact: "300 homes rebuilt",
    daysLeft: 8,
    progress: 68,
    donors: 523,
  },
  {
    id: "7",
    title: "Digital Literacy for Seniors",
    description:
      "Teaching digital skills to elderly citizens to help them stay connected with family and access essential online services.",
    category: "Education",
    tags: ["Education", "Technology", "Seniors"],
    status: "active" as const,
    location: "Chittagong, Bangladesh",
    goal: 20000,
    raised: 12400,
    organizer: {
      name: "Digital Bangladesh Initiative",
      avatar: "/images/org-digital-bd.jpg",
    },
    images: ["/images/digital-1.jpg"],
    impact: "250 seniors trained",
    daysLeft: 52,
    progress: 62,
    donors: 98,
  },
  {
    id: "8",
    title: "Animal Shelter Support",
    description:
      "Providing food, medical care, and shelter for stray animals in urban areas, ensuring their wellbeing and safety.",
    category: "Animal Welfare",
    tags: ["Animals", "Shelter", "Care"],
    status: "active" as const,
    location: "Rajshahi, Bangladesh",
    goal: 15000,
    raised: 8900,
    organizer: {
      name: "Paws and Claws Rescue",
      avatar: "/images/org-paws.jpg",
    },
    images: ["/images/animals-1.jpg"],
    impact: "150 animals cared for",
    daysLeft: 23,
    progress: 59,
    donors: 134,
  },
  {
    id: "9",
    title: "Community Sports Complex",
    description:
      "Building a multi-sport facility for youth development and community engagement, promoting health and teamwork.",
    category: "Sports",
    tags: ["Sports", "Youth", "Community"],
    status: "active" as const,
    location: "Comilla, Bangladesh",
    goal: 80000,
    raised: 45600,
    organizer: {
      name: "Youth Sports Foundation",
      avatar: "/images/org-sports.jpg",
    },
    images: ["/images/sports-1.jpg"],
    impact: "2,000 youth engaged",
    daysLeft: 156,
    progress: 57,
    donors: 267,
  },
];

export default function CampaignsList() {
  return (
    <Grid container spacing={3}>
      {fakeCampaigns.map((campaign) => (
        <Grid item xs={12} sm={6} lg={4} key={campaign.id}>
          <CampaignCard campaign={campaign} />
        </Grid>
      ))}
    </Grid>
  );
}
