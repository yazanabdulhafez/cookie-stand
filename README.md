# cookie-stand

## Problem Domain

Your friend Pat has come up with a business idea by combining two signature Seattle icons: Pat has developed a recipe for a coffee-time confection called Salmon Cookies. These cookies made into the shape of a salmon that has just a hint of fishy goodness.

Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications.

Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

* The minimum number of customers per hour.
* The maximum number of customers per hour.
* The average number of cookies purchased per customer.

Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application.

Pat needs you to take a leading role in doing the design work and construction of a public-facing page, too. They already have a logo image picked out (below), but Pat is requesting your assistance in the design of the documents, color scheme, fonts, and any additional images for the public facing site.

![A salmon](./img/salmon.png)

So, in addition to building an application that calculates daily sales projections for each location (on a page called sales.html), you also need to create a public-facing page (on the homepage index.html) that is colorful, eye-catching, readable, useful, and informative.

You’ve got a lot to do. Plan your work, and work your plan.

## extend parts

### first branch

Sales Data
Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:

Stores the min/max hourly customers, and the average cookies per customer, in object properties
Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
Store the results for each location in a separate array… perhaps as a property of the object representing that location
Display the values of each array as unordered lists in the browser
Calculating the sum of these hourly totals; your output for each location should look like this:

Seattle

* 6am: 16 cookies
* 7am: 20 cookies
* 8am: 35 cookies
* 9am: 48 cookies
* 10am: 56 cookies
* 11am: 77 cookies
* 12pm: 93 cookies
* 1pm: 144 cookies
* 2pm: 119 cookies
* 3pm: 84 cookies
* 4pm: 61 cookies
* 5pm: 23 cookies
* 6pm: 42 cookies
* 7pm: 57 cookies
* Total: 875 cookies

### second branch

Instructions

1. Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

2. Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

3. Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

4. Display each stores data in a table format . Break each column by the hour and complete each row with a “Daily Location Total”.

* Each cookie stand location should have a separate render() method that creates and appends its row to the table
* The header row and footer row are each created in their own stand-alone function
NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

## Lab08b

Continue working on the functionality of your sales.html page if you do not have it working 100% yet, including the row of totals across the bottom.

Pat has provided you 7 additional images that they would like to see on the home page of the site. These images are located in your daily class GitHub repo: class-08/lab-b/assets/.

Your public-facing index.html page should include the following:

1. locations with addresses,
2. hours open
3. contact information
4. Anything else you feel neccesary.
5. A link to your sales.html page
Be sure to also include a link to your index.html page on your sales.html pages as well.

Feel free to make this information up. Get creative, have fun, but remember to be professional.
