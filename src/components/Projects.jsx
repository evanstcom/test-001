import React from "react";
import { Project } from "./Project";
import { ProjectData } from "./ProjectData";
import { Title } from "./Title";

export const Projects = (props) => {
    const { setIsChanged, listItem, projects, activeItem, handleChooseId, deleteData, createNewData, changeData } =
        props;
    return (
        <>
            <Title fullName={activeItem.fullName} />
            <div className="main__data">
                <div className="main__projects">
                    {projects &&
                        projects.map((item, ind) => (
                            <Project
                                key={ind}
                                item={item}
                                activeItem={activeItem}
                                handleChooseId={handleChooseId}
                            />
                        ))}
                </div>
                <ProjectData
                    listItem={listItem}
                    activeItem={activeItem}
                    deleteData={deleteData}
                    createNewData={createNewData}
                    changeData={changeData}
                    setIsChanged={setIsChanged}
                />
            </div>
        </>
    );
};
