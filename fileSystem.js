const fs = require('fs');

fs.mkdir('folder1', (err) => {
    if(err) {
        console.log(err)
    }else{
        console.log(`folder has been created `)
    }
})

fs.writeFile('file2.js', 'some function data', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('the file has been created')
    }
})



fs.unlink('file2.js', (err) => {
    if(err){
        console.log(err)
    }else{

    }
})