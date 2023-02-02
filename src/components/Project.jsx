import React from "react";

export const Project = (props) => {
    const { 
        item,
        activeItem,
        handleChooseId,
    } = props;
    return (
        <div className={
            activeItem.id === item.id ?
            "main__projects_item main__projects_item_active": 
            "main__projects_item"
            }
            onClick={() => handleChooseId(item)}>
            <svg
            className="main__projects_icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
                    fill="white"
                />
            </svg>
            <h3 className="main__projects_title">{item.name}</h3>
        </div>
    );
};
