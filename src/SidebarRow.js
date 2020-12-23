import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';
function SidebarRow({ title, src, Icon, image }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            {image && <img src={image} alt="" />}
            <h4>{title}</h4>
        </div>
    )
};
import './SidebarRow.css';
export default SidebarRow
