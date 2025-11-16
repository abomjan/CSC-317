# Assignment 4 Submission

## Student Information
- **Name:** Adarsha Bomjan
- **Student ID:** 924841447

## Links
- **GitHub Repository:** https://github.com/abomjan/CSC-317
- **Live GitHub Pages:** https://abomjan.github.io/CSC-317/Assignments/4/

## Implementation Description

This assignment implements an interactive calculator application using HTML, CSS, and JavaScript. The calculator features basic arithmetic operations (addition, subtraction, multiplication, division), along with advanced functionality including modulus operation, sign toggle, and percentage calculations. I used HTML for the structural layout, CSS with Flexbox for creating a responsive button grid and iOS-style design, and vanilla JavaScript for handling all user interactions and calculations. The interface supports both click and keyboard input, displays real-time results, and includes error handling for invalid operations like division by zero. The calculator maintains operation history and properly handles decimal numbers.

## Challenges and Solutions

1. **Challenge:** Implementing keyboard support for calculator input
   - **Solution:** Initially struggled with event listeners and capturing keyboard events correctly. Had to learn about `keydown` events and mapping keyboard keys to calculator functions. Used `event.key` to detect which key was pressed and created a switch statement to handle different inputs (numbers, operators, Enter for equals, Escape for clear).

2. **Challenge:** Finding the correct JavaScript syntax for operations
   - **Solution:** Spent time debugging issues with operator precedence and string-to-number conversions. Learned to use `parseFloat()` properly and had to understand when to use `===` vs `==`. Also struggled with proper use of template literals and arrow functions but eventually got comfortable with ES6 syntax.

3. **Challenge:** GitHub Pages deployment showing 404 error
   - **Solution:** Discovered that I needed to access the correct URL path including `/assignments/4/` rather than just the root URL. Also learned about proper GitHub Pages configuration in repository settings.

4. **Challenge:** Handling edge cases like consecutive operators or decimal points
   - **Solution:** Implemented validation logic to prevent multiple decimal points in one number and to handle operator changes before calculation.

## Additional Features

- Keyboard support for full calculator functionality
- Sign toggle (+/-) button for negative numbers
- Modulus operation (%) for finding remainders
- Clear entry (CE) vs Clear all (C) functionality
- Responsive design that works on mobile devices
- Visual feedback on button clicks with hover effects

## Resources and Acknowledgments

- MDN Web Docs for JavaScript event handling and DOM manipulation references
- W3Schools for CSS Flexbox/Grid layout tutorials
- Stack Overflow for debugging parseFloat() and keyboard event issues
- Claude AI for assistance with syntax errors and deployment troubleshooting
- CSC317 course materials and lecture notes