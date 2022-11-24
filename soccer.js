$(document).ready(() =>{
    $('#btn').on('click' , () =>{
        let value = $('#input').val();
        let text = [];
        let arr = [];






        for(let i=0 ; i<value ; i++){
        
            // Team Names
            function makeid() {
                var txt = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                let rand = Math.floor((Math.random()*2)+2)
                for (var i = 0; i < rand; i++){
                    txt += possible. charAt(Math.floor(Math.random() * possible. length));
                }
                
                return txt;
            }
            text.push(makeid());
            $('#names').html(text.join("<br>"));

            
            // Team Scores
            let rand = Math.floor((Math.random()*9)+1);
            arr.push(rand);

            $('#scores').html(arr.join("<br>"));
        }

        // Array field with numbers less than input
        let array = []
        while( value-1 >= 0 ){
            array.push(value-1);
            value--;
        }
                



        // array pairing the main array elements 2 by 2

        let arr2 = []
        let len = array.length;
        for(let i=0; i<len; i++){
            for(let j=i+1; j<len; j++){
                arr2.push([array[i], array[j]]);
            }
            
        }
        // let arr2 = arrr2.reverse();
        console.log(arr2);

        // DEFINING WEEKS



        
        let length = arr2.length;
        let weeks = new Set();


        for(let i=0; i<length; i++){
            
            for(let j=i+1; j<length; j++){
                if(arr2[i][0] != arr2[j][0] && arr2[i][0] != arr2[j][1]&& arr2[i][1] != arr2[j][0]&& arr2[i][1] != arr2[j][1] ){
                    let arry = arr2[i];
                    if (weeks.has(arry)){
                        return false;
                    }
                    weeks.add([arr2[i], arr2[j]]);
                }  
            }
            
        }
        // let i = 0;
        // while(i < arr2.length){
            
        //     let j = arr2.length;
        //     // let count0 = 0;
        //     // count0++;
        //     i++;
        //     j--;
        //     // if(arr2[i][0] != arr2[j][0] && arr2[i][0] != arr2[j][1]&& arr2[i][1] != arr2[j][0]&& arr2[i][1] != arr2[j][1] && !weeks.includes(arr2[i])&& !weeks.includes(arr2[j]) ){
        //     weeks.push([arr2[i],arr2[j]]);

        //     // return(weeks);
        // }
        // console.log(weeks);
        // let makeWeeks = num =>{
        //     weeks.push(arr2[num] , arr2[num-1])
        //     const newNum = num-1;
        //     if(newNum > 0){
        //         return([arr2[newNum] , makeWeeks(newNum-1)]);
        //     }
        // }
        // let makeWeeks = num =>{
        //     if (num < 1) return [];
        //     return [arr2[num], ...makeWeeks(arr2[num-1])];
        //   }
        // weeks.push(makeWeeks(arr2.length));
        console.log(weeks);

        // for ( i =0 ; i<weeks.length ; i++){
        //     let dup = weeks.filter((e,weeks,i) => weeks.indexof(e) != i);
        //     return dup;
        // }console.log(dup);
        
        // let week = weeks.reverse();

        
        // console.log(weeks);
        

        
        arr2.forEach( item =>{
            let plus = arr[item[0]]+arr[item[1]];
            console.log(arr[item[0]]);
            console.log(arr[item[1]]);

            let rand1 = Math.floor((Math.random()*plus)+1);
            console.log(rand1);


            // printing the results


            let names =[];

            names.push(text[item[1]] , text[item[0]]);
            $('#result').append(' نام تیم ها :   ');
            $('#result').append(names.join('  ,  '));
            $('#result').append(' نتیجه :  ');



            if (arr[item[0]] > arr[item[1]]){
                if(rand1 <= arr[item[1]]){
                    $('#result').append('  تیم دوم برنده است'  +"<br>")
                    console.log('Team 2 is the winner') ;
                }else if (rand1 > arr[item[1]]) {
                    $('#result').append(' تیم اول برنده است' +"<br>")
                    console.log('Team 1 is the winner') ;
                }
            } else if(arr[item[0]] < arr[item[1]]){
                if(rand1 <= arr[item[0]]){
                    $('#result').append(' تیم اول برنده است' +"<br>")
                    console.log('Team 1 is the winner') ;
                }else if (rand1 > arr[item[0]]) {
                    $('#result').append('  تیم دوم برنده است'  +"<br>")
                    console.log('Team 2 is the winner') ;
                }
            } else {
                $('#result').append(' نتیجه مساوی است'+"<br>")
                console.log('They are equal.') ;
            }
        })
    })


    
});



     
        

