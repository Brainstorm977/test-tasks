//Исходное задание

var animals = [{
        kind: 'cat',
        age: 3,
        withOwner: true
    },
    {
        kind: 'cat',
        age: 2,
        withOwner: false
    },
    {
        kind: 'dog',
        age: 5
    },
    {
        kind: 'cat',
        age: 1
    },
    {
        kind: 'parrot',
        age: 2,
        withOwner: true
    },
    {
        kind: 'cat',
        age: 6
    }
];
for (let i = 1; i < animals.length; i++) {
    const animal = animals[i];
    if (!animal.withOwner) animal.withOwner = false;
}

var nobodysCatList = [];
for (let i = 1; i < animals.length; i++) {
    const animal = animals[i];
    if (!animal.withOwner && animal.age >= 2) nobodysCatList.push(animal);
}
console.log(nobodysCatList);

//Решение

// 1. Необходимо присвоить значение false свойству "withOwner" всем животным, у которых его нет
// В приведенном решении используется цикл для проверки свойства withOwner, и если оно false - то присваивается false.
// Во-первых цикл должен идти с 0-го индекса, так как сейчас первый объект в массиве не проверяется.
// Во-вторых - в задании сказано присвойть false тем объектам, у кого отсуствует свойство withOwner, то есть undefined.
// Более корректный код на мой взгляд будет выглядеть так:

var animals = [{
        kind: 'cat',
        age: 3,
        withOwner: true
    },
    {
        kind: 'cat',
        age: 2,
        withOwner: false
    },
    {
        kind: 'dog',
        age: 5
    },
    {
        kind: 'cat',
        age: 1
    },
    {
        kind: 'parrot',
        age: 2,
        withOwner: true
    },
    {
        kind: 'cat',
        age: 6
    }
];
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    if (animal.withOwner === undefined) animal.withOwner = false;
}
console.log(animals);

//2. Получить список всех кошек без хозяев, которым больше 2х лет
//Во-первых нет проверки сортировки именно обектов "cat".
//Во-вторых код считает верным и возраст == 2, а в задании сказано "больше 2 лет"
//В третьих - начинать надо с 0-го элемента массива
// Исправленный код:

var nobodysCatList = [];
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    if (animal.kind === 'cat') {
        if (!animal.withOwner && animal.age > 2) nobodysCatList.push(animal);
    }
}
console.log(nobodysCatList);