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


// Сначала создаем массив, где каждому из элементов, через фильтр сравнения parendId и id - создаем массив его потомков
const newMenu = array => array.filter(item => {
    item.children = array.filter(i => i.parentId === item.id);
    console.log(item);
    //И оставляем только те элементы, которые находятся на верхнем уровне, то есть parentId === 'root'
    return item.parentId === 'root';
})

console.log(newMenu(MenuItems));


// function createTree(data, id, parentId, root) {
//     const
//         tree = {},
//         obj = {};

//     data.forEach(n => obj[n[id]] = Object.assign({}, n));

//     Object.values(obj).forEach(n => {
//         if (n[parentId] === root) {
//             tree[n[id]] = n;
//         } else {
//             const t = obj[n[parentId]];
//             t.children = t.children || {};
//             t.children[n[id]] = n;
//         }
//     });

//     return tree;
// }


// const tree = createTree(MenuItems, 'id', 'parentId', "root");
// console.log(tree);

// const FinalMenu = [];

// MenuItems.forEach(item => {
//     if(item.parentId === 'root') {
//         FinalMenu.push({...item, subItems: []})
//     }
// });

// console.log(FinalMenu);

// FinalMenu.forEach(item => {

//     if(item.parentId === )
// })



// MenuItems.forEach(item => {
//     if (item.parentId === 'root') {
//         FinalMenu.push({
//             ...item,
//             items: []
//         });
//     }
// })
// console.log(FinalMenu);

// FinalMenu.forEach(menu => {
//     MenuItems.filter(item => {
//         if (item.parentId === menu.id) {
//             menu.items.push({
//                 ...item,
//                 items: []
//             })
//         }
//     })
// })

// console.log(FinalMenu);

// FinalMenu.forEach(i => {
//     i.items.forEach(y => {
//         MenuItems.filter(item => {
//             if (item.parentId === y.id) {
//                 menu.items.push({
//                     ...item,
//                     items: []
//                 })
//             }
//         })
//     })
// })