const test = {
    value: 1,
    children: [{
            value: 2,
            children: [{
                    value: 4
                },
                {
                    value: 5
                }
            ]
        },
        {
            value: 3,
            children: [{
                    value: 6
                },
                {
                    value: 7
                }
            ]
        }
    ]
}

const allValues = [];

//Логика такая

// Object.keys(test).forEach((key1) => {
//     if (key1 === 'value') {
//         allValues.push(test[key1])
//     };
//     if (key1 === 'children') {
//         test[key1].forEach(arr2 => {
//             Object.keys(arr2).forEach(key2 => {
//                 if (key2 === 'value') {
//                     allValues.push(arr2[key2]);
//                 };
//                 if (key2 === 'children') {
//                     arr2[key2].forEach(arr3 => {
//                         Object.keys(arr3).forEach(key3 => {
//                             if (key3 === 'value') {
//                                 allValues.push(arr3[key3])
//                             }
//                         })
//                     })
//                 }
//             })
//         })
//     }

// })

//Перепишем, используя рекурсию


const recursionValues = (arr) => {
    Object.keys(arr).forEach(item => {
        if (item === 'value') {
            allValues.push(arr[item]);
        };
        if (item === 'children') {
            arr[item].forEach(newItem => recursionValues(newItem));
        }
    })
}

recursionValues(test);

console.log(allValues);

//Суммируем все значения
const sum = allValues.reduce((a, b) => a + b, 0);
console.log(sum);