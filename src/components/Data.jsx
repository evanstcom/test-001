import React from "react";
import { CreateNewData } from "./CreateNewData";

export const Data = (props) => {
    const {
        item,
        parentId,
        deleteData,
        changeData,
        createNewData,
        setIsChanged,
    } = props;
    const [mouse, setMouse] = React.useState(false);
    const [update, setUpdate] = React.useState(false);
    const [create, setCreate] = React.useState(false);
    let newParentId = item.id;
    const [newData, setNewData] = React.useState({
        equipmentCosts: item.equipmentCosts, // oborydovanie
        estimatedProfit: item.estimatedProfit, //
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: item.overheads, // nakladnye
        rowName: item.rowName, //name
        salary: item.salary, //zp
        supportCosts: 0,
        parentId: item.id,
    });
    const mouseHover = () => {
        setMouse(true);
    };
    const mouseUnHover = () => {
        setMouse(false);
    };

    const deleteRow = () => {
        setIsChanged(true);
        deleteData(item.id);
        setUpdate(false);
        setCreate(false);
    };

    const handleDoubleClick = () => {
        setUpdate(!update);
        if (update) {
            changeData(newData, item.id);
            setIsChanged(true);
            setUpdate(false);
        } else {
            setCreate(false);
        }
    };

    const handleKey = (e) => {
        if (e.key === "Enter") {
            setUpdate(false);
            changeData(newData, item.id);
            setCreate(false);
            setIsChanged(true);
        }
    };

    return (
        <>
            <tr id={item.id} onDoubleClick={handleDoubleClick}>
                <td className="level">
                    {parentId !== 34106 ? (
                        <div className="line">
                            <svg
                                className="line__img"
                                width="12"
                                height="53"
                                viewBox="0 0 12 53"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="0.5"
                                    y1="53"
                                    x2="0.499998"
                                    y2="2.18557e-08"
                                    stroke="#C6C6C6"
                                />
                                <path d="M1 52.5H12" stroke="#C6C6C6" />
                            </svg>
                        </div>
                    ) : (
                        ""
                    )}
                    <div
                        className={
                            mouse
                                ? "main__data__table__level"
                                : "main__data__table__level_none"
                        }
                        onMouseOver={mouseHover}
                        onMouseOut={mouseUnHover}
                    >
                        <div
                            className="main__data__table__icon"
                            onClick={() => setCreate(true)}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.5556 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V4.44444L11.5556 0ZM3.55556 3.55556H8V5.33333H3.55556V3.55556ZM12.4444 12.4444H3.55556V10.6667H12.4444V12.4444ZM12.4444 8.88889H3.55556V7.11111H12.4444V8.88889ZM10.6667 5.33333V1.77778L14.2222 5.33333H10.6667Z"
                                    fill="#7890B2"
                                />
                            </svg>
                        </div>
                        <div
                            className={
                                mouse ? "main__data__table__icon" : "none"
                            }
                            onClick={deleteRow}
                        >
                            <svg
                                width="14"
                                height="15"
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.5 1C1.23478 1 0.98043 1.10536 0.792893 1.29289C0.605357 1.48043 0.5 1.73478 0.5 2V3C0.5 3.26522 0.605357 3.51957 0.792893 3.70711C0.98043 3.89464 1.23478 4 1.5 4H2V13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H10C10.5304 15 11.0391 14.7893 11.4142 14.4142C11.7893 14.0391 12 13.5304 12 13V4H12.5C12.7652 4 13.0196 3.89464 13.2071 3.70711C13.3946 3.51957 13.5 3.26522 13.5 3V2C13.5 1.73478 13.3946 1.48043 13.2071 1.29289C13.0196 1.10536 12.7652 1 12.5 1H9C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0L6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1H1.5ZM4.5 5C4.63261 5 4.75979 5.05268 4.85355 5.14645C4.94732 5.24021 5 5.36739 5 5.5V12.5C5 12.6326 4.94732 12.7598 4.85355 12.8536C4.75979 12.9473 4.63261 13 4.5 13C4.36739 13 4.24021 12.9473 4.14645 12.8536C4.05268 12.7598 4 12.6326 4 12.5V5.5C4 5.36739 4.05268 5.24021 4.14645 5.14645C4.24021 5.05268 4.36739 5 4.5 5ZM7 5C7.13261 5 7.25979 5.05268 7.35355 5.14645C7.44732 5.24021 7.5 5.36739 7.5 5.5V12.5C7.5 12.6326 7.44732 12.7598 7.35355 12.8536C7.25979 12.9473 7.13261 13 7 13C6.86739 13 6.74021 12.9473 6.64645 12.8536C6.55268 12.7598 6.5 12.6326 6.5 12.5V5.5C6.5 5.36739 6.55268 5.24021 6.64645 5.14645C6.74021 5.05268 6.86739 5 7 5ZM10 5.5V12.5C10 12.6326 9.94732 12.7598 9.85355 12.8536C9.75979 12.9473 9.63261 13 9.5 13C9.36739 13 9.24021 12.9473 9.14645 12.8536C9.05268 12.7598 9 12.6326 9 12.5V5.5C9 5.36739 9.05268 5.24021 9.14645 5.14645C9.24021 5.05268 9.36739 5 9.5 5C9.63261 5 9.75979 5.05268 9.85355 5.14645C9.94732 5.24021 10 5.36739 10 5.5Z"
                                    fill="#DF4444"
                                />
                            </svg>
                        </div>
                    </div>
                </td>
                <td className="name">
                    {!update ? (
                        newData.rowName
                    ) : (
                        <input
                            type="text"
                            value={newData.rowName}
                            className="main__input__create name"
                            onKeyDown={handleKey}
                            onChange={(e) =>
                                setNewData({
                                    ...newData,
                                    rowName: e.target.value,
                                })
                            }
                        />
                    )}
                </td>
                <td>
                    {!update ? (
                        newData.salary
                    ) : (
                        <input
                            type="number"
                            value={newData.salary}
                            className="main__input__create"
                            onKeyDown={handleKey}
                            onChange={(e) =>
                                setNewData({
                                    ...newData,
                                    salary: e.target.value,
                                })
                            }
                        />
                    )}
                </td>
                <td>
                    {!update ? (
                        newData.equipmentCosts
                    ) : (
                        <input
                            type="number"
                            value={newData.equipmentCosts}
                            className="main__input__create"
                            onKeyDown={handleKey}
                            onChange={(e) =>
                                setNewData({
                                    ...newData,
                                    equipmentCosts: e.target.value,
                                })
                            }
                        />
                    )}
                </td>
                <td>
                    {!update ? (
                        newData.overheads
                    ) : (
                        <input
                            type="number"
                            value={newData.overheads}
                            className="main__input__create"
                            onKeyDown={handleKey}
                            onChange={(e) =>
                                setNewData({
                                    ...newData,
                                    overheads: e.target.value,
                                })
                            }
                        />
                    )}
                </td>
                <td>
                    {!update ? (
                        newData.estimatedProfit
                    ) : (
                        <input
                            type="number"
                            value={newData.estimatedProfit}
                            className="main__input__create"
                            onKeyDown={handleKey}
                            onChange={(e) =>
                                setNewData({
                                    ...newData,
                                    estimatedProfit: e.target.value,
                                })
                            }
                        />
                    )}
                </td>
            </tr>
            {item.child &&
                item.child.map((item, ind) => (
                    <Data
                        key={ind}
                        item={item}
                        parentId={newParentId}
                        deleteData={deleteData}
                        changeData={changeData}
                        createNewData={createNewData}
                        setIsChanged={setIsChanged}
                    />
                ))}
            {create && (
                <CreateNewData
                    createNewData={createNewData}
                    parentId={item.id}
                    setIsChanged={setIsChanged}
                    setCreate={setCreate}
                />
            )}
        </>
    );
};
