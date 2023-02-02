import { useState } from "react";
export const CreateData = (props) => {
    const { setIsChanged,createNewData, parentId} = props;
    const [update, setUpdate] = useState(true);
    const [newData, setNewData] = useState({
        equipmentCosts: 0, // oborydovanie
        estimatedProfit: 0, //
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: 0, // nakladnye
        rowName: "New row", //name
        salary: 0, //zp
        supportCosts: 0,
        parentId: parentId,
    });

    const handleKey = (e) => {
        if (e.key === "Enter") {
            createNewData(newData);
            setUpdate(false);
            setIsChanged(true);
        }
    };
    return (
        <>
            <tr>
                <td>
                    <div className="main__data__table__level_none">
                        <div className="main__data__table__icon">
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
                    </div>
                </td>
                <td className="name">
                    {update && (
                        <input
                            type="text"
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
                    {update && (
                        <input
                            type="number"
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
                    {update && (
                        <input
                            type="number"
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
                    {update && (
                        <input
                            type="number"
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
                    {update && (
                        <input
                            type="number"
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
        </>
    );
};
