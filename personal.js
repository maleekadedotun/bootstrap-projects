    function valu(){
        nom =document.getElementById('law').value;
        non =document.getElementById('barrister').value;
        ans =parseInt(law) * Number(barrister);
        document.getElementById('ans').value =ans;
    }
     let firstname = 'Adebayo';
     middlename = 'Maleek';
     lastname = 'Adedotun';
     eulogyname = 'Ayanfe';
    
     //concatenate
         let fullName = firstname +' '+ middlename;
         result = fullName + ' ' + lastname;
         dozier = result + ' '+ eulogyname;

         console.log(result);
         
        console.log(dozier);

        //getting method
        console.log(dozier.toUpperCase());
        console.log(dozier.toLowerCase());

        //getting characters
        console.log(fullName[8]);

        //strings lenght
        console.log(fullName.length);

        let index = firstname.indexOf('y');
        console.log(index);

        

        let malt = dozier.indexOf('a')
        console.log(malt)

        //array
        let ninjas = ['Adeola','Sunmi','Ajiwe']

        // console.log(ninjas)
        console.log(ninjas.length)


         let ages = [20, 30, 35, 40];
        console.log(ages[3])

        let random = ['shun' ,'kong',20 ,30];
        //  console.log(random)
        
         //aray method
        //  let text =random.join('-')
        //   console.log(text)

        // let text = ninjas.indexOf('Ajiwe')  
        // let text = ninjas.concat(['ken', 'ben'])
        let text = ninjas.push('ken')  
        //  text = ninjas.pop()  
         console.log(text)
    
        // console.log(text)
         
        //aray numbers
        let radius =10;
        const pie = 3.14;
            //math operators + - * / % **
            //  let text = radius % 3;
            // let text = radius * pie;
            // let text =  pie * 10**2



            // order operation of B I D M A S
            //  let text = 5 * (10-7)**2
            //  console.log(text)

            likes = 10;
            
        //   likes += 1
            //  likes++
            // likes--
            // likes /=2
            //    likes *=2

        //   console.log(likes)'

        let rest = 'The blog has '+ likes  + ' likes'
        console.log(rest)


        let age =null;
          
        console.log(age, age + 3, `This age is ${age}`);




