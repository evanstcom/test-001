import { Projects } from "./Projects";
import React, { useState, useEffect } from "react";
import { getAllListItem, deleteFromData, createData, updateData } from "../api";

export const Main = () => {
    const projects = [
        {
            id: 34106,
            name: "CMP",
            fullName: "Строительно-монтажные работы",
        },
        {
            id: 34155,
            name: "График",
            fullName: "График полное название",
        },
    ];
    const [listItem, setListItem] = useState([]);
    const [isChanged, setIsChanged] = useState(false);
    const [activeItem, setActiveItem] = useState({
        id: 34106,
        name: "CMP",
        fullName: "Строительно-монтажные работы",
    });

    const handleChooseId = (item) => {
        setActiveItem(item);
    };

    const deleteData = (cId) => {
        deleteFromData(activeItem.id, cId);
    };
    const createNewData = (item) => {
        createData(item);
    };
    const changeData = (item, cId) => {
        updateData(item, activeItem.id, cId);
    };

    useEffect(() => {
        getAllListItem(activeItem.id).then((data) => {
            setListItem(data);
            if (isChanged){
                setIsChanged(false);
            }
        });
    }, [activeItem, isChanged]);

    return (
        <main className="main">
                <Projects
                    listItem={listItem}
                    projects={projects}
                    activeItem={activeItem}
                    handleChooseId={handleChooseId}
                    deleteData={deleteData}
                    createNewData={createNewData}
                    changeData={changeData}
                    setIsChanged={setIsChanged}
                />
        </main>
    );
};
