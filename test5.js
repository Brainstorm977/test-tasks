//Задание

class UserList extends React.Component {
    const userList = [{
            id: 1,
            name: 'user 1',
            ...
        },
        {
            id: 2,
            name: 'user 2',
            ...
        },
        ...
    ];

    render() {
        return <div >
            userList.map(user => {
                <
                User user = {
                    user
                }
                />
            }) <
            /div>
    }
}

// Решение на Functional Component

const UserList = () => {
    const userList = [{
            id: 1,
            name: "user 1"
        },
        {
            id: 2,
            name: "user 2"
        },
    ];

    return ( <
        div > {
            userList.map((user) => ( <
                User user = {
                    user
                }
                />
            ))
        } <
        /div>
    );
};