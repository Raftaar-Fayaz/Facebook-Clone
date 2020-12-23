import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from './StateProvider';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            {/* <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/> */}
            {/* <SidebarRow Icon={PeopleIcon} title="Friends"/> */}
            {/* <SidebarRow Icon={ChatIcon} title="Messenger"/> */}
            {/* <SidebarRow Icon={StorefrontIcon} title="Marketplace"/> */}
            {/* <SidebarRow Icon={VideoLibraryIcon} title="Videos"/> */}
            {/* <SidebarRow Icon={ExpandMoreOutlined} title="See More"/> */}
            <SidebarRow image ="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png" title="COVID-19 Information Center"/>
            <SidebarRow image="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title="Friends"/>
            {/* <SidebarRow Icon={EmojiFlagIcon} title="Pages"/> */}
            <SidebarRow image="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" title="Groups"/>
            <SidebarRow image="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" title="Marketplace"/>
            <SidebarRow image="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title="Videos"/>
            <SidebarRow image="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png" title="Events"/>
            <SidebarRow image="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/GA7Y4WRJMp8.png" title="Memories"/>
            <SidebarRow image="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" title="Saved"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="See More"/>
            <hr />
            <div className="footer">
                <div className="footer__heading">
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <h4 className="footer__header">Add Shortcuts</h4>
                </div>
                <div className="footer__conditions">
                    <p>Privacy · Terms · Advertising · Ad Choices · Cookies Notice · More · © 2020, Facebook-Clone. By Raftaar Fayaz.</p>
                </div>
            <hr />
            </div>

        </div>
    )
};
export default Sidebar
