import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import RatingStars from "@/components/utility/Ratings/RatingStars";
import QuestionsSection from "@/components/utility/Ratings/QuestionsSection";
// import { ClearRatingContext } from "@/context/clearRatingContext";
import { Button } from "@/components/ui/button";
import SummaryChart from "@/components/utility/SummaryChart/SummaryChart";

const RatingPage = () => {
  const numbers = [0, 1, 2, 3, 4, 5];

  const ratingDatas = [
    {
      category: "Students",
      questions: [
        "Questions #1",
        "Questions #2",
        "Questions #3",
        "Questions #4",
        "Questions #5",
      ],
    },
    {
      category: "Teachers",
      questions: [
        "Questions #1",
        "Questions #2",
        "Questions #3",
        "Questions #4",
        "Questions #5",
      ],
    },
  ];

  const [rangeValue, setRangeValue] = useState({});
  const [activeAccordion, setActiveAccordion] = useState("item-0");

  const [summaryValue, setSummaryValue] = useState([]);

  // useEffect(() => {
  //   const initialState = {};
  //   for (let i = 0; i < ratingDatas?.questionNames?.length; i++) {
  //     initialState[i] = 0;
  //   }
  //   setRangeValue(initialState);
  // }, []);
 
  
  useEffect(() => {
    HandlingInitialState();
  }, []);

  const handleClick = (e, pageNumber, categoryIndex, questionIndex) => {
    e.preventDefault();

    // const pageNumber = e.target.innerText;
    
    setRangeValue((prevState) => ({
      ...prevState,
      [`${categoryIndex}-${questionIndex}`]: pageNumber,
    }));
    console.log("RangeValue:", rangeValue);

    //getting summery chart click values
    // const questionKey = ratingDatas[categoryIndex].questions[questionIndex];
  
    setSummaryValue((prevSummary) => {
      const updatedSummary = prevSummary.map((item) => {
        //update
        if (item.category === ratingDatas[categoryIndex].category) {
          return {
            ...item,
            [`question${questionIndex + 1}`]: pageNumber,
          };
        }
        return item;
      });
      //add
      if (!updatedSummary.some((item) => item.category === ratingDatas[categoryIndex].category)) {
        updatedSummary.push({
          category: ratingDatas[categoryIndex].category,
          [`question${questionIndex + 1}`]: pageNumber,
        });
      }

      return updatedSummary;
    });
  };
  
  const handlePrevClick = (e, categoryIndex, questionIndex) => {
    e.preventDefault();
    const prevNumber = rangeValue[`${categoryIndex}-${questionIndex}`] - 1;

    if (prevNumber >= 0) {
      setRangeValue((prevState) => ({
        ...prevState,
        [`${categoryIndex}-${questionIndex}`]: prevNumber,
      }));
      console.log("prev number", prevNumber);

      //getting summery chart prev values
      const questionKey = ratingDatas[categoryIndex].questions[questionIndex];
      setSummaryValue((preRating)=> ({
        ...preRating,
        [questionKey]: prevNumber,
      }))
    }
  };

  const handleNextClick = (e, categoryIndex, questionIndex) => {
    e.preventDefault();

    const nextNumber = rangeValue[`${categoryIndex}-${questionIndex}`] + 1;
    if (nextNumber <= 5) {
      setRangeValue((prevState) => ({
        ...prevState,
        [`${categoryIndex}-${questionIndex}`]: nextNumber,
      }));
      console.log("prev number", nextNumber);

      //getting summery chart prev values
      const questionKey = ratingDatas[categoryIndex].questions[questionIndex];
      setSummaryValue((preRating)=> ({
        ...preRating,
        [questionKey]: nextNumber,
      }))
    }
  };

  const calculateWidth = (categoryIndex) => {
    const categoryRatings = ratingDatas[categoryIndex].questions
      .map((_, idx) => {
        return rangeValue[`${categoryIndex}-${idx}`] || 0;
      })
      .filter((rating) => rating > 0);

    if (categoryRatings.length === 0) {
      return "0%";
    }

    const totalRating = categoryRatings.reduce((a, val) => a + val, 0);
    console.log('totalRating', totalRating)
    const width = 20 + (totalRating - 1) * 20;
    const totalWidth = width / categoryRatings.length;
    return `${Math.min(totalWidth, 100)}%`;
  };

  const handleClearRating = () => {
    HandlingInitialState();
  }
  
  const HandlingInitialState = () => {
    const initialState = {};
    ratingDatas.forEach((ratingData, categoryIndex) => {
      ratingData.questions.forEach((_, questionIndex) => {
        initialState[`${categoryIndex}-${questionIndex}`] = 0;
      });
    });
    setRangeValue(initialState);
  }
  console.log('summaryValue', summaryValue)
  return (
    <>
    {/* <ClearRatingContext.Provider> */}
      <Accordion
        type="single"
        collapsible
        value={activeAccordion}
        onValueChange={setActiveAccordion}
      >
        {ratingDatas.map((ratingData, categoryIndex) => (
          <AccordionItem value={`item-${categoryIndex}`} key={categoryIndex}>
            <AccordionTrigger className="accordion-btn px-6 flex justify-between items-center">
              <div>{ratingData.category}</div>

              <RatingStars
                calculateWidth={calculateWidth}
                index={categoryIndex}
              />

            </AccordionTrigger>
            <AccordionContent className="bg-white data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <ul className="space-y-1 list-none list-inside ">

                {ratingData.questions.map((questionName, questionIndex) => (
                  <QuestionsSection
                    questionName={questionName}
                    questionIndex={questionIndex}
                    numbers={numbers}
                    rangeValue={rangeValue}
                    categoryIndex={categoryIndex}
                    handleClick={handleClick}
                    handlePrevClick={handlePrevClick}
                    handleNextClick={handleNextClick}
                  />
                ))}

              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex justify-end items-center gap-2">
        <SummaryChart chartData={summaryValue}  />
      
      <Button className="mt-3 cursor-pointer" type="submit" onClick={handleClearRating}>Clear Ratings</Button>
      </div>

      
      {/* </ClearRatingContext.Provider> */}
    </>
  );
};

export default RatingPage;
