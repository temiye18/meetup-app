import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 5465 A City",
    description: "This is a second meetup!",
  },
];

const MeetupDetails = () => {
  const router = useRouter();
  const meetupId = router.query.meetupId;
  const details = DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);
  return (
    <MeetupDetail
      image={details.image}
      title={details.title}
      address={details.address}
      description={details.description}
    />
  );
};
export default MeetupDetails;
