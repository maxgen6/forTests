//arr - массив
//1 - по возрастанию, 2 - по убыванию
'use strict';

const arraySort = (arr , i) => {
    if (i === 1){
        arr.sort((a, b) => {
            return(a - b);
        });
    } else if(i === 2){
        arr.sort((a, b) => {
            return(b - a);
        })
    }

    console.log(arr);
}

arraySort([1, 5, 2, 120, 3, 4, 11, 7], 2);
