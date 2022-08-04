import React from "react";


function DiaryPage({feeling, quoteText, quoteAuthor}) {
  console.log(feeling);
  console.log(quoteText);
  console.log(quoteAuthor);

  return ( 
  
    <div>
    <p>{feeling}</p>
      <p>{quoteText}</p>
      <p> {quoteAuthor}</p>
      
      
    </div>
    
    

    
           
        
    
  
  

  )
}

export default DiaryPage;
