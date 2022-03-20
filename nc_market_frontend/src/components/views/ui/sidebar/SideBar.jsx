import {
  Feedback,
  LineStyle,
  Mail,
  Message,
  Money,
  Person,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarWrapper">
          {/* dashboard */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to={"/"} className="link">
                <li className="sidebarListItem">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>

              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
          {/* quick menu */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to={"users"} className="link">
                <li className="sidebarListItem">
                  <Person className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to={"/vendorproductlist"} className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Products
                </li>
              </Link>

              <li className="sidebarListItem">
                <Money className="sidebarIcon" />
                Transactions
              </li>
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
          {/* notifications */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <Mail className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <Feedback className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <Message className="sidebarIcon" />
                Message
              </li>
            </ul>
          </div>
          {/* Staff */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Report
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
