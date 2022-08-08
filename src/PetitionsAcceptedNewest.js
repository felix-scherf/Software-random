
import { Petition } from "./Petition";
import { NavbarBottom } from "./NavbarBottom";
import Spielplatz from "./img/playground_petition.jpg";
import Parkbank from "./img/bench.jpg";
import Sportplatz from "./img/sportsfield.jpg";
import Radweg from "./img/bikeway.jpg";
import { Link } from "react-router-dom";
import Header from './components/Header';

export const PetitionsAcceptedNewest = () => {


	return (
    <div>
      <Header />
      <div className='campaigns no-data'>In diesem Gebiet befinden sich noch keine akzeptierten Crowdfundingkampagnen. Wir sind bereits im Dialog mit der öffentlichen Verwaltung. Gerne können Sie diese auch persönlich kontaktieren.</ div>
      <NavbarBottom
        classstart='under-navitem-selected'
        classsearch='under-navitem-unselected'
        classactivity='under-navitem-unselected'
        classprofile='under-navitem-unselected'
      />
    </div>
  );

}