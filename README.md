# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). 


### Screenshot

![expenses-chart](./design/active-states.jpg)


### Links

- Solution URL: [GitHub](https://github.com/JuliAlchemDev/FM-expenses-chart)
- Live Site URL: [Netlify](https://fm-expenses-chart-julialchem.netlify.app)


## My process

I started by analyzing the design and defining **CSS custom properties** for colors, spacing, and typography to keep everything consistent.  
The project was structured with separate CSS files for resets, variables, and components, ensuring clarity and maintainability.  

Using **semantic HTML** and the **BEM methodology**, I built the layout to be clean and easy to scale.  
For the logic, I implemented **data fetching from a local JSON file** using `async/await`, dynamically creating elements in the DOM.  
This approach allowed me to update the chart data without touching the HTML structure.

In CSS, I focused on **responsiveness and alignment** using Grid and relative units (`rem`).  
I also applied **absolute positioning with `transform: translate()`** to center tooltips accurately above each bar.  
To highlight the highest value, I used conditional logic in JavaScript to apply a modifier class, and in CSS, I styled it differently for visual emphasis.  

Finally, I debugged spacing and hover states with **DevTools**, refining small UX details like tooltips, hover transitions, and color contrasts to make the chart interactive and user-friendly.




### What I learned

- How to **fetch and display data dynamically** from a local JSON file using `async/await`.  
- The difference between **direct selectors** and the **`:is()` pseudo-class** in CSS.  
- How to **center absolutely positioned elements** with `transform: translate(-50%, -50%)`.  
- Improved understanding of **CSS Grid alignment** and **responsive units (`rem`)**.  
- Learned to use **CSS custom properties** to manage color themes and spacing consistently.  
- Practiced **BEM naming** to keep styles modular and clear.  
- Debugged visual issues using **browser DevTools** to inspect computed styles.  
- Reinforced how small details like **hover states** and **tooltips** improve UX.


### Built with

- Semantic HTML5 
- CSS Grid & Flexbox
- CSS custom properties
- JavaScript (ES6+, fetch, async/await)
- Mobile-first workflow
- BEM methodology
- Responsive design with rem and media queries
- Figma design as reference

## Author

- Linkedin - [Julia Alkhimova](https://www.linkedin.com/in/julialkhimova/)
- Frontend Mentor - [@JuliAlchemDev](https://www.frontendmentor.io/profile/JuliAlchemDev)
