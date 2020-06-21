const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }

//     console.log(`Папка создана`);
// });

const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, `Hello NodeJS`, (err) => {
//     if (err) {
//         throw err
//     }

//     console.log(`файл создан`);

//     fs.appendFile(filePath, `\nHello Again!`, (err) => {
//         if (err) {
//             throw err
//         }
    
//         console.log(`файл обновлен`);
//     })
// })

fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err
    }

    console.log(`Content:`, content);

    const data = Buffer.from(content);

    console.log(`Content -> data:`, data.toString());
});

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }

    console.log(`Content:`, content);
});