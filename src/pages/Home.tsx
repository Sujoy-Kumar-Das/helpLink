import AboutHome from "../components/home/AboutHome";
import Banner from "../components/home/Banner";
import ContactHome from "../components/home/ContactHome";
import Donation from "../components/home/DonationHome";
import Donors from "../components/home/Donors";
import JoinVolunteer from "../components/home/JoinVolunteer";
import TeamMember from "../components/home/TeamMember";
import Gallery from "../components/home/gallery/Gallery";

export default function Home() {
  return (
    <>
      <Banner />
      <Donation />
      <Donors />
      <Gallery />
      <AboutHome />
      <TeamMember />
      <ContactHome />
      <JoinVolunteer />
    </>
  );
}
