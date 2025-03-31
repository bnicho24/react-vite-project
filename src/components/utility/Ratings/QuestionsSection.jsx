import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const QuestionsSection = (props) => {
  const {
    questionIndex,
    questionName,
    numbers,
    rangeValue,
    handleClick,
    handleNextClick,
    handlePrevClick,
    categoryIndex
  } = props;
  return (
    <>
      <li className="list-item p-3 m-0 border-b-1" key={questionIndex}>
        <div className="question-item flex justify-between gap-3 items-center">
          <div className="">
            {questionIndex + 1}. {questionName}
          </div>
          <div className="rating-box">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) =>
                      handlePrevClick(e, categoryIndex, questionIndex)
                    }
                  />
                </PaginationItem>

                {numbers.map((pageNumber, index) => (
                  <PaginationItem
                    key={index}
                    className={
                      rangeValue[`${categoryIndex}-${questionIndex}`] ==
                      pageNumber
                        ? "selected"
                        : ""
                    }
                  >
                    <PaginationLink
                      href="#"
                      onClick={(e) =>
                        handleClick(e, pageNumber, categoryIndex, questionIndex)
                      }
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) =>
                      handleNextClick(e, categoryIndex, questionIndex)
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </li>
    </>
  );
};

export default QuestionsSection;
