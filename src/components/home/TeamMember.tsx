import { Grid } from "@mui/material";
import TeamMemberCard from "../card/TeamMemberCard";
import CustomContainer from "../ui/shared/CustomContainer";
import Header from "../ui/shared/Header";

export default function TeamMember() {
  const teamMembersArray = [
    {
      name: "Sarah Johnson",
      role: "Marketing Coordinator",
      bio: "Sarah is a passionate advocate for social causes, with a background in marketing and communication. She believes in the power of storytelling to drive engagement and inspire action. Sarah enjoys creating compelling campaigns that raise awareness and support for important causes. In her free time, she volunteers at local animal shelters and mentors young professionals interested in nonprofit work.",
      social_links: {
        twitter: "https://twitter.com/SarahJohnson",
        linkedin: "https://linkedin.com/in/SarahJohnson",
      },
      image:
        "https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg",
      post: "Excited to be part of the team at [Your Charity Foundation Name]! Together, we can make a difference in the lives of those in need. #CommunityImpact",
    },
    {
      name: "David Nguyen",
      role: "Fundraising Manager",
      bio: "David is a results-driven professional with extensive experience in fundraising and donor relations. He is skilled at building and nurturing relationships with supporters, sponsors, and partners. David is committed to maximizing the impact of charitable initiatives through strategic fundraising efforts. Outside of work, he enjoys hiking, photography, and participating in community service projects.",
      social_links: {
        twitter: "https://twitter.com/DavidNguyen",
        linkedin: "https://linkedin.com/in/DavidNguyen",
      },
      image:
        "https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg",
      post: "Thrilled to join [Your Charity Foundation Name] as the Fundraising Manager! Let's work together to raise vital funds and support our community. #FundraisingForGood",
    },
    {
      name: "Maria Rodriguez",
      role: "Event Coordinator",
      bio: "Maria is an organized and detail-oriented individual with a passion for event planning and management. With a background in hospitality, she brings creativity and logistical expertise to the team. Maria enjoys creating memorable experiences that engage participants and leave a lasting impact. In her spare time, she volunteers at local community centers and advocates for youth empowerment programs.",
      social_links: {
        twitter: "https://twitter.com/MariaRodriguez",
        linkedin: "https://linkedin.com/in/MariaRodriguez",
      },
      image:
        "https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg",
      post: "Excited to kick off some amazing events with [Your Charity Foundation Name]! Looking forward to bringing our community together for a great cause. #EventPlanning",
    },
    {
      name: "Michael Chen",
      role: "Volunteer Coordinator",
      bio: "Michael is a dedicated volunteer with a strong commitment to community service. He has a talent for recruiting, training, and motivating volunteers to support various charitable causes. Michael believes in the importance of creating a welcoming and inclusive environment for volunteers to thrive and make a difference. When he's not volunteering, he enjoys playing soccer, reading, and exploring new hiking trails.",
      social_links: {
        twitter: "https://twitter.com/MichaelChen",
        linkedin: "https://linkedin.com/in/MichaelChen",
      },
      image:
        "https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg",
      post: "Honored to serve as the Volunteer Coordinator at [Your Charity Foundation Name]! Let's come together and make an impact through the power of volunteering. #CommunityEngagement",
    },
  ];
  return (
    <CustomContainer bgColor={false}>
      <Header
        title="Meet Our Team"
        subTitle="Our Expert Volunteer Always Ready"
      />
      <Grid
        container
        spacing={5}
        data-aos="fade-zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {teamMembersArray.map((item, index) => (
          <TeamMemberCard key={index} item={item} />
        ))}
      </Grid>
    </CustomContainer>
  );
}
