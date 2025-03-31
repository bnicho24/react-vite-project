import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


const RatingPageCopy = () => {
  const numbers = [0,1,2,3,4,5];

  const ratingDatas = [{
    category: "Students",
    questions: ["Questions #1","Questions #2","Questions #3","Questions #4","Questions #5"]
  },
  {
    category: "Teachers",
    questions: ["Questions #1","Questions #2","Questions #3","Questions #4","Questions #5"]
  }
]

  
     const [isActiveNumber, setIsActiveNumber] = useState({});
     const [activeAccordion, setActiveAccordion] = useState("item-0"); 
    // useEffect(() => {
    //   const initialState = {}; 
    //   for (let i = 0; i < ratingDatas?.questionNames?.length; i++) {
    //     initialState[i] = 0;  
    //   }
    //   setIsActiveNumber(initialState);
    // }, []);
    useEffect(() => {
      const initialState = {}; 
      ratingDatas.forEach((ratingData, ratingIndex) => {
        ratingData.questions.forEach((_, questionIndex) => {
          initialState[`${ratingIndex}-${questionIndex}`] = 0; 
        });
      });
      setIsActiveNumber(initialState);
    }, []);

    const handleClick = (e, pageNumber, ratingIndex, questionIndex) => {
      e.preventDefault(); 
      
      // const pageNumber = e.target.innerText;
      console.log('pageNumber:', pageNumber);
      setIsActiveNumber((prevState) => ({
        ...prevState,
        [`${ratingIndex}-${questionIndex}`]:pageNumber,
      }))
    };
    const handlePrevClick = (e, ratingIndex, questionIndex) => {
      e.preventDefault();
     const prevNumber = isActiveNumber[`${ratingIndex}-${questionIndex}`] - 1

     if(prevNumber >= 0) {
      setIsActiveNumber((prevState) => ({
        ...prevState,
        [`${ratingIndex}-${questionIndex}`]:prevNumber,
      }))
      console.log('prev number',prevNumber )
     }
    }
    const handleNextClick = (e, ratingIndex, questionIndex) => {
      e.preventDefault();

      const nextNumber = isActiveNumber[`${ratingIndex}-${questionIndex}`] + 1;
      if(nextNumber <= 5) {
        setIsActiveNumber((prevState) => ({
          ...prevState,
          [`${ratingIndex}-${questionIndex}`]:nextNumber,
        }))
        console.log('prev number',nextNumber )
      }
    }

    const calculateWidth = (ratingIndex) => {

      const categoryRatings = ratingDatas[ratingIndex].questions.map((_, questionIndex) => {
        return isActiveNumber[`${ratingIndex}-${questionIndex}`] || 0;
      }).filter(rating => rating > 0);

      if (categoryRatings.length === 0) {
        return '0%';
      }

      const totalRating = categoryRatings.reduce((a, val) => a + val, 0);
      const width = 20 + (totalRating - 1) * 20; 
      const totalWidth = width / categoryRatings.length;
      return `${Math.min(totalWidth, 100)}%`;
    };
    
  return (
    <>
   
      <Accordion type="single" collapsible value={activeAccordion} onValueChange={setActiveAccordion}>
        { ratingDatas.map((ratingData, ratingIndex) => (
          <AccordionItem value={`item-${ratingIndex}`} key={ratingIndex}>
          <AccordionTrigger className="accordion-btn px-6 flex justify-between items-center">
            <div>{ratingData.category}</div>
            <div className="ratings">
                <div className="empty-stars"></div>
                <div className="full-stars" 
                style={{ width: calculateWidth(ratingIndex) }}></div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <ul className="space-y-1 list-none list-inside ">
            { ratingData.questions.map((questionName, questionIndex) => (
              <li className="list-item p-3 m-0 border-b-1" key={questionIndex}>
                <div className="question-item flex justify-between gap-3 items-center">
                  <div className="">{questionIndex + 1}. {questionName}</div>
                  <div className="rating-box">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href="#" onClick={(e) => handlePrevClick(e, ratingIndex, questionIndex)} />
                        </PaginationItem>
                        
                          { numbers.map((pageNumber, index) => (
                            <PaginationItem key={index}  className={isActiveNumber[`${ratingIndex}-${questionIndex}`] == pageNumber ? 'selected' : "" }>
                            <PaginationLink 
                            href="#" 
                            onClick={(e) => handleClick(e, pageNumber, ratingIndex, questionIndex)}
                            >
                            {pageNumber}
                          </PaginationLink>
                          </PaginationItem>
                          ))

                          }
                        <PaginationItem>
                          <PaginationNext href="#" onClick={(e) => handleNextClick(e, ratingIndex, questionIndex)} />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </div>
              </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        )

        ) }
      </Accordion>
    </>
  );
};

export default RatingPageCopy;
