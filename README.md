# HowMuchDoesItCostChromeExtension

A chrome extension that displays the opportunity cost of a purchase alongside it's original price.

The Chrome Extension as it currently functions parses HTML looking for dollar signs (it's not elegant). Then it uses Regex to yank out the "price" and apply compound interest to it (5% interest for 10 years) to get opportunity cost. 

From there, I put the opportunity cost in with the original cost for comparison.

#### Improvements

Finding price by looking for dollar signs is not a great way to do things. It is adequate, but in the future I'd love to convert this extension to Typescript and make sure all prices are numbers to avoid grievous errors.

Next up would be attempting to format the prices going in so they don't inadvertendly spill out of the component they came from. I'd love to do that with React, but I recognize not every site uses that. So in the end, I'd probably be best off doing some flex box magic to improve the situation without fully solving it. 


Beyond the above two considerations, there's the fact that finding prices is tremendously valuable data. It'd be fascinating to find some way to give users interesting information about the prices they view (like how much they've "saved" by not buying items). 
