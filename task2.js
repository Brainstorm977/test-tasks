const MenuItems = [{
        id: 1,
        name: 'Пользователи',
        parentId: 'root'
    },
    {
        id: 7,
        name: 'ТТ категория B',
        parentId: 2
    },
    {
        id: 2,
        name: 'Торговые точки',
        parentId: 'root'
    },
    {
        id: 4,
        name: 'Супервайзеры',
        parentId: 1
    },
    {
        id: 9,
        name: 'Категории точек',
        parentId: 5
    },
    {
        id: 3,
        name: 'Настройки',
        parentId: 'root'
    },
    {
        id: 10,
        name: 'Смена языка',
        parentId: 3
    },
    {
        id: 6,
        name: 'ТТ категория A',
        parentId: 2
    },
    {
        id: 8,
        name: 'Смена пароля',
        parentId: 3
    },
    {
        id: 5,
        name: 'Продавцы',
        parentId: 1
    }
];



function createTree(data, id, parentId, root) {
    const
        tree = {},
        obj = {};

    data.forEach(n => obj[n[id]] = Object.assign({}, n));

    Object.values(obj).forEach(n => {
        if (n[parentId] === root) {
            tree[n[id]] = n;
        } else {
            const t = obj[n[parentId]];
            t.children = t.children || {};
            t.children[n[id]] = n;
        }
    });

    return tree;
}


const tree = createTree(MenuItems, 'id', 'parentId', "root");
console.log(tree);