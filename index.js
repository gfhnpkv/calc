let answer = '0';
let check = '0';
let po = ''
const butom = document.querySelector('.box').addEventListener('click', function(event){
    
    const viv = event.target.innerText;
    console.log(viv);
    if(viv == '='){
        switch (po) {

            case '+':
                answer=check+answer
                break;

            case'-':
                answer=check-answer
                break;

            case'%':
                answer=check/answer
                break;

            case'x':
                answer=check*answer
                break;  

            default:
                break;
        }
        check='0'
        po=''
    }
    else{
    
        if (answer != '0' && parseInt(viv)<10)
        {
            answer+=viv;
        }
        else{
            if (answer == '0' &&  parseInt(viv)>0 && parseInt(viv)<10)
            {
            answer=viv;
            
            }
            else{
                switch (viv) {
                    case 'C':
                        answer='0';
                        check='0';
                        po=''
                        break;
                    
                    case '<-':
                        console.log('sup')
                        answer=answer.slice(0,-1);
                        break;
        
                    default:

                        check=answer
                        answer='0'
                        po=viv
                        break;
                
                }  
            }
        
        }
    }
    
    
    
    
    document.getElementById('num').innerHTML = answer;
    
});


