# Third-Party APIs: Work Day Scheduler

To add important events to a daily planner

## Installation

    Tools used to create page
        Visual Studio Code
        GitHub
        Git Bash
        Google Chrome
        Moment js

## User Story

AS AN employee with a busy schedule

I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria 

GIVEN I am using a daily planner to create a schedule
  

    WHEN I open the planner
    THEN the current day is displayed at the top of the calendar
 
    WHEN I scroll down
    THEN I am presented with time blocks for standard business hours
    
    WHEN I view the time blocks for that day
    THEN each time block is color-coded to indicate whether it is in the past, present, or future
    
    WHEN I click into a time block
    THEN I can enter an event
    
    WHEN I click the save button for that time block
    THEN the text for that event is saved in local storage
   
    WHEN I refresh the page
    THEN the saved events persist

    ![content](./content/Work-Day-Page.jpg)

## Challenges 

    The two major obstacles I got over were the event listeners and adding data to the local storage. I was able to find solutions for both of these issues. They do not seem to elegant in the way I wrote the code but it is functional. 

    The one issue I was not able to solve within the time frame was pulling from local storage upon page refresh. 