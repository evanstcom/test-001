import { API_URL } from "./config";

const getAllListItem = async (id) => {
    const response = await fetch(API_URL + id + "/row/list");
    return await response.json();
};


const createData = async (item) => {
    const responce = await fetch(API_URL + '34106/row/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    })
    const data = await responce.json();
    console.log(data);
} 
const updateData = async (item, idParent, idChild) => {
    const responce = await fetch(API_URL + idParent + '/row/' + idChild + '/update', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    })
    const data = await responce.json();
    console.log(data);
} 

const deleteFromData = async (pId,id) => {
    try {
        const responce = await fetch(`${API_URL}${pId}/row/${id}/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await responce.json();
        console.log(data);

        if (responce.ok){
            console.log('OK');
        } else {
            throw new Error('ERROR!!!');
        }
    } catch (error) {
        console.log(error);
    }
};

export { getAllListItem, deleteFromData, createData, updateData };
