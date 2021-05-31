//Задание
class UserList extends React.Component {
    const userList = [
        {id: 1, name: 'user 1', ...},
        {id: 2, name: 'user 2', ...},
        ...
    ];

    render() {
        return <div>
            userList.map(user => {
                <User user={user} />
            })
        </div>
    }
}


//Не совсем понял какие именно ошибки надо было исправить, поэтому отредактировал так, чтобы был полностью рабочий вариант, вплоть до импортов и экспортов.
//Добавил импорты
// массив объектов userList внес в конструктор
//Внутри JSX - JS выражения необходимо заключать в фигурные скобки
//Добавил key - при выводе списков параметр key должен быть обязательным. Причем это должен быть не индекс элемента, а уникальный ID.
//Добавил экспорт


import React from "react";
import User from "./User";

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [
                { id: 1, name: "user 1" },
                { id: 2, name: "user 2" },
            ],
        };
    }

    render() {
        return (
            <div>
                {this.state.userList.map((user) => <User user={user} key={user.id}/>)}
            </div>
        );
    }
}

export default UserList

// Решение на Functional Component

import React, {useState} from "react";
import User from "./User";

const UserList = () => {
     const [userList, setUserList] = useState([
        { id: 1, name: "user 1" },
        { id: 2, name: "user 2" },
    ]);
    
    return (
            <div>
                {userList.map((user) => <User user={user} key={user.id}/>)}
            </div>
        );
}

export default UserList


