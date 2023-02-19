const todo_list = [{
        "user": "a",
        "id": '1234566',
        "complete": true
    },
    {
        "user": "b",
        "id": '1234566',
        "complete": false
    },
    {
        "user": "c",
        "id": '1234566',
        "complete": true
    }
]

const getcomplete = () => {
    return todo_list.filter((each_todo_item) => each_todo_item.complete === true);

};
export default getcomplete;
console.log(getcomplete())