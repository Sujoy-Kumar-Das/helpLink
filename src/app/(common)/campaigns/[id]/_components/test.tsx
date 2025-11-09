"use client";
import PageHeader from "@/components/shared/commonHeader/PageHeader";
import {
  Favorite,
  Groups,
  LocationOn,
  NavigateBefore,
  NavigateNext,
  Receipt,
  Schedule,
  Share,
  Verified,
  VolunteerActivism,
} from "@mui/icons-material";
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Fab,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

// Mock data for the campaign
const campaignData = {
  id: "1",
  slug: "sylhet-flood-relief",
  title: "Sylhet Flood Relief",
  category: "Disaster Relief",
  tags: ["Urgent", "Emergency", "Food", "Shelter"],
  status: "urgent",
  location: "Sylhet, Bangladesh",
  goal: 50000,
  raised: 37450,
  donors: 428,
  daysLeft: 12,
  organizer: {
    name: "Bangladesh Red Crescent",
    avatar: "/images/org-red-crescent.jpg",
    verified: true,
  },
  images: [
    "/images/sylhet-flood-1.jpg",
    "/images/sylhet-flood-2.jpg",
    "/images/sylhet-flood-3.jpg",
  ],
  impact: "1,200 families supported with essential supplies",
};

// Mock story content
const campaignStory = {
  introduction: `The recent floods in Sylhet have devastated communities, leaving thousands of families without homes, food, or access to clean water. Entire villages are submerged, and the situation grows more dire with each passing day.`,

  problem: `Over 4 million people across Sylhet division have been affected by the worst flooding in decades. Homes have been destroyed, crops washed away, and basic infrastructure severely damaged. Families are stranded without access to food, clean water, or medical assistance.`,

  solution: `We are working around the clock to provide immediate relief to affected families. Your support will help us deliver:
  • Emergency food packages for families
  • Clean drinking water and purification tablets
  • Temporary shelter materials
  • Medical aid and hygiene kits
  • Long-term recovery support`,

  timeline: [
    {
      date: "2024-11-20",
      action: "Initial assessment completed",
      amount: 5000,
    },
    { date: "2024-11-25", action: "First relief distribution", amount: 15000 },
    { date: "2024-12-01", action: "Medical camp setup", amount: 8000 },
    {
      date: "2024-12-10",
      action: "Shelter materials distribution",
      amount: 9450,
    },
  ],

  updates: [
    {
      id: 1,
      date: "2024-12-01",
      title: "Medical Camps Established",
      content:
        "We have successfully set up 3 medical camps in the most affected areas, providing healthcare to over 500 patients daily.",
      image: "/images/medical-camp-update.jpg",
    },
    {
      id: 2,
      date: "2024-11-25",
      title: "First Relief Distribution",
      content:
        "Distributed food packages to 300 families in Sunamganj district. Each package contains rice, lentils, oil, and essential supplies for 2 weeks.",
      image: "/images/food-distribution-update.jpg",
    },
  ],
};

// Mock donors data
const recentDonors = [
  { name: "A. Rahman", amount: 500, time: "2 hours ago", anonymous: false },
  { name: "Anonymous", amount: 200, time: "3 hours ago", anonymous: true },
  { name: "S. Chowdhury", amount: 1000, time: "5 hours ago", anonymous: false },
  { name: "M. Ahmed", amount: 250, time: "6 hours ago", anonymous: false },
  { name: "Anonymous", amount: 750, time: "8 hours ago", anonymous: true },
];

// Mock comments data
const comments = [
  {
    id: 1,
    user: { name: "R. Islam", avatar: "/images/user-1.jpg" },
    comment:
      "I visited the area last week and the situation is heartbreaking. Thank you for your efforts!",
    time: "2 days ago",
    likes: 12,
  },
  {
    id: 2,
    user: { name: "T. Hassan", avatar: "/images/user-2.jpg" },
    comment:
      "My family is from Sylhet. It means so much to see people helping our community. Donated and shared!",
    time: "1 day ago",
    likes: 8,
  },
];

// Progress Ring Component
const ProgressRing = ({
  progress,
  size = 120,
}: {
  progress: number;
  size?: number;
}) => {
  const theme = useTheme();
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={theme.palette.grey[200]}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#progress-gradient)`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
        <defs>
          <linearGradient
            id="progress-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={theme.palette.primary.main} />
            <stop offset="100%" stopColor={theme.palette.secondary.main} />
          </linearGradient>
        </defs>
      </svg>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          {progress}%
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Funded
        </Typography>
      </Box>
    </Box>
  );
};

// Image Carousel Component
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        height: 400,
      }}
    >
      <Box
        sx={{
          height: "100%",
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.main,
            0.2
          )} 0%, ${alpha(theme.palette.secondary.main, 0.2)} 100%), url(${
            images[currentIndex]
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease",
        }}
      />

      {images.length > 1 && (
        <>
          <IconButton
            onClick={prevImage}
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: alpha(theme.palette.background.paper, 0.9),
              "&:hover": { backgroundColor: theme.palette.background.paper },
            }}
          >
            <NavigateBefore />
          </IconButton>
          <IconButton
            onClick={nextImage}
            sx={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: alpha(theme.palette.background.paper, 0.9),
              "&:hover": { backgroundColor: theme.palette.background.paper },
            }}
          >
            <NavigateNext />
          </IconButton>

          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 1,
            }}
          >
            {images.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor:
                    currentIndex === index ? "white" : alpha("#fff", 0.5),
                  cursor: "pointer",
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

// Donate Modal Component
const DonateModal = ({
  open,
  onClose,
  campaign,
}: {
  open: boolean;
  onClose: () => void;
  campaign: any;
}) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const theme = useTheme();

  if (!open) return null;

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount.toString());
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setAmount("");
  };

  const proceedToPayment = () => {
    setStep(2);
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setStep(3);
    }, 2000);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: alpha("#000", 0.5),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1300,
        p: 2,
      }}
      onClick={onClose}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <CardContent sx={{ p: 4 }}>
          {step === 1 && (
            <>
              <Typography variant="h5" gutterBottom fontWeight={700}>
                Donate to {campaign.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Select your donation amount
              </Typography>

              <Grid container spacing={2} sx={{ mb: 3 }}>
                {presetAmounts.map((preset) => (
                  <Grid item xs={4} key={preset}>
                    <Button
                      variant={
                        amount === preset.toString() ? "contained" : "outlined"
                      }
                      fullWidth
                      onClick={() => handleAmountSelect(preset)}
                      sx={{ height: 60 }}
                    >
                      ${preset}
                    </Button>
                  </Grid>
                ))}
              </Grid>

              <TextField
                fullWidth
                label="Custom Amount"
                value={customAmount}
                onChange={(e) => handleCustomAmount(e.target.value)}
                placeholder="Enter amount"
                sx={{ mb: 3 }}
              />

              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={proceedToPayment}
                disabled={!amount && !customAmount}
                sx={{ mb: 2 }}
              >
                Continue to Payment
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <Typography variant="h5" gutterBottom fontWeight={700}>
                Payment Details
              </Typography>

              <TextField
                fullWidth
                label="Card Number"
                sx={{ mb: 2 }}
                placeholder="1234 5678 9012 3456"
              />
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Expiry Date"
                    placeholder="MM/YY"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="CVV" placeholder="123" />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handlePayment}
                startIcon={<VolunteerActivism />}
                sx={{ mb: 2 }}
              >
                Donate ${amount || customAmount}
              </Button>
            </>
          )}

          {step === 3 && (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.success.main,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                }}
              >
                <Verified sx={{ fontSize: 40, color: "white" }} />
              </Box>
              <Typography variant="h5" gutterBottom fontWeight={700}>
                Thank You!
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Your donation of ${amount || customAmount} has been processed
                successfully.
              </Typography>
              <Button variant="contained" fullWidth onClick={onClose}>
                Close
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

// Campaign Detail Page
const CampaignDetailPage = () => {
  const theme = useTheme();
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("story");
  const progress = Math.round((campaignData.raised / campaignData.goal) * 100);

  const tableOfContents = [
    { id: "story", label: "The Story" },
    { id: "updates", label: "Updates" },
    { id: "donors", label: "Recent Donors" },
    { id: "comments", label: "Comments" },
  ];

  return (
    <>
      <PageHeader title={campaignData.title} subtitle={campaignData.impact} />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Campaign Images */}
          <Grid item xs={12} md={8}>
            <ImageCarousel images={campaignData.images} />
          </Grid>

          {/* Donation Card */}
          <Grid item xs={12} md={4}>
            <Card sx={{ position: "sticky", top: 100 }}>
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <ProgressRing progress={progress} />

                <Typography variant="h4" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                  ${campaignData.raised.toLocaleString()}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  raised of ${campaignData.goal.toLocaleString()} goal
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{ height: 8, borderRadius: 4, mb: 3 }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 4,
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h6" fontWeight={700}>
                      {campaignData.donors}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Donors
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h6" fontWeight={700}>
                      {campaignData.daysLeft}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Days Left
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h6" fontWeight={700}>
                      {progress}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Funded
                    </Typography>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  startIcon={<VolunteerActivism />}
                  onClick={() => setDonateModalOpen(true)}
                  sx={{ mb: 2, py: 1.5 }}
                >
                  Donate Now
                </Button>

                <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                  <Button variant="outlined" fullWidth startIcon={<Favorite />}>
                    Save
                  </Button>
                  <Button variant="outlined" fullWidth startIcon={<Share />}>
                    Share
                  </Button>
                </Box>

                {/* Organizer Info */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    bgcolor: "grey.50",
                  }}
                >
                  <Avatar src={campaignData.organizer.avatar} />
                  <Box>
                    <Typography variant="body2" fontWeight={600}>
                      {campaignData.organizer.name}
                      {campaignData.organizer.verified && (
                        <Verified
                          sx={{ fontSize: 16, color: "primary.main", ml: 0.5 }}
                        />
                      )}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Campaign Organizer
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Left Column - Story & Updates */}
          <Grid item xs={12} lg={8}>
            {/* Table of Contents */}
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ py: 2 }}>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {tableOfContents.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeSection === item.id ? "contained" : "text"}
                      onClick={() => setActiveSection(item.id)}
                      size="small"
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* Campaign Story */}
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom fontWeight={700}>
                  The Story
                </Typography>

                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  {campaignStory.introduction}
                </Typography>

                <Typography
                  variant="h5"
                  gutterBottom
                  fontWeight={600}
                  sx={{ mt: 4 }}
                >
                  The Problem
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  {campaignStory.problem}
                </Typography>

                <Typography
                  variant="h5"
                  gutterBottom
                  fontWeight={600}
                  sx={{ mt: 4 }}
                >
                  Our Solution
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  {campaignStory.solution}
                </Typography>

                {/* Timeline */}
                <Typography
                  variant="h5"
                  gutterBottom
                  fontWeight={600}
                  sx={{ mt: 4 }}
                >
                  Progress Timeline
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {campaignStory.timeline.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        gap: 3,
                        mb: 3,
                        p: 2,
                        borderRadius: 2,
                        bgcolor: "grey.50",
                      }}
                    >
                      <Box sx={{ textAlign: "center", minWidth: 80 }}>
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          color="primary"
                        >
                          ${item.amount.toLocaleString()}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(item.date).toLocaleDateString()}
                        </Typography>
                      </Box>
                      <Typography variant="body1">{item.action}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom fontWeight={700}>
                  Updates
                </Typography>
                {campaignStory.updates.map((update) => (
                  <Box
                    key={update.id}
                    sx={{
                      mb: 4,
                      pb: 3,
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      {update.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      gutterBottom
                    >
                      {new Date(update.date).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {update.content}
                    </Typography>
                    <Button
                      startIcon={<Receipt />}
                      variant="outlined"
                      size="small"
                    >
                      View Receipts
                    </Button>
                  </Box>
                ))}
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom fontWeight={700}>
                  Comments & Support
                </Typography>

                {/* Comment Input */}
                <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                  <Avatar sx={{ width: 40, height: 40 }} />
                  <TextField
                    fullWidth
                    placeholder="Share your support or ask a question..."
                    variant="outlined"
                    multiline
                    rows={2}
                  />
                </Box>

                {/* Comments List */}
                <List>
                  {comments.map((comment) => (
                    <ListItem
                      key={comment.id}
                      alignItems="flex-start"
                      sx={{ px: 0 }}
                    >
                      <ListItemAvatar>
                        <Avatar src={comment.user.avatar} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              mb: 0.5,
                            }}
                          >
                            <Typography variant="subtitle1" fontWeight={600}>
                              {comment.user.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {comment.time}
                            </Typography>
                          </Box>
                        }
                        secondary={
                          <>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                              {comment.comment}
                            </Typography>
                            <Button startIcon={<Favorite />} size="small">
                              {comment.likes}
                            </Button>
                          </>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} lg={4}>
            {/* Quick Stats */}
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight={700}>
                  Campaign Details
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <LocationOn color="primary" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Location
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        {campaignData.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Schedule color="primary" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Days Remaining
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        {campaignData.daysLeft} days
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Groups color="primary" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Donors
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        {campaignData.donors} people
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Recent Donors */}
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
                            ${donor.amount} • {donor.time}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Volunteer Signup */}
            <Card>
              <CardContent sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="h6" gutterBottom fontWeight={700}>
                  Want to Help?
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Join our volunteer team and make a hands-on difference
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<VolunteerActivism />}
                >
                  Volunteer Sign Up
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Donate Modal */}
      <DonateModal
        open={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        campaign={campaignData}
      />

      {/* Floating Action Button */}
      <Fab
        variant="extended"
        color="primary"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        }}
        onClick={() => setDonateModalOpen(true)}
      >
        <VolunteerActivism sx={{ mr: 1 }} />
        Donate Now
      </Fab>
    </>
  );
};

export default CampaignDetailPage;
