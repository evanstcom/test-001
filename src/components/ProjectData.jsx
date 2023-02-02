import { Data } from "./Data";
import { CreateData } from "./CreateData";
export const ProjectData = (props) => {
    const { setIsChanged, listItem, activeItem, deleteData, createNewData, changeData } =
        props;
    return (
        <div className="main__data__table">
            <table className="main__table__opt">
                <thead>
                    <tr>
                        <th className="main__table__title main__table__title_level">
                            Уровень
                        </th>
                        <th className="main__table__title main__table__title_name">
                            Наименование работ
                        </th>
                        <th className="main__table__title">Основная з/п</th>
                        <th className="main__table__title">Оборудование</th>
                        <th className="main__table__title">
                            Накладные расходы
                        </th>
                        <th className="main__table__title">Сметная прибыль</th>
                    </tr>
                </thead>
                <tbody>
                    {listItem.length ? (
                        listItem.map((item, ind) => {
                            return (
                                <Data
                                    key={ind}
                                    item={item}
                                    ind={ind}
                                    parentId={activeItem.id}
                                    deleteData={deleteData}
                                    changeData={changeData}
                                    createNewData={createNewData}
                                    setIsChanged={setIsChanged}
                                />
                            );
                        })
                    ) : (
                        <CreateData
                            createNewData={createNewData}
                            parentId={null}
                            setIsChanged={setIsChanged}
                        />
                    )}
                </tbody>
            </table>
        </div>
    );
};
