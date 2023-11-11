const express = require("express");
const router = express.Router();
require("../db/conn");

const Query = require("../model/querySchema")

module.exports = router;

router.get("/", (req, res) => {
    res.status(201).json({message: `Hello World from the Server in query.js`});
});

router.post("/create-query", async (req, res) => {
    const { email, query } = req.body

    // Validate input
    if (!email || !query ) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }
    try {
        // Create and save the query using async/await
        await Query.create({ email, query });

        // Return a 201 status code with a success message
        res.status(201).json({ message: "Query created successfully" });

    } catch (error) {
        // Return a 500 status code for internal server error with a meaningful message
        res.status(500).json({ message: "Internal Server Error" });

        // Log the error for debugging purposes
        console.log(error);
    }
});

router.get("/get-query", async (req, res) => {
    try {
      // Using find without any conditions to get all documents
      const allQueries = await Query.find({});
  
      if (allQueries.length > 0) {

        // Use destructuring to extract properties from the found document
        const queryData = allQueries.map(({ email, query }) => ({ email, query }));

        // Returning a 200 status code with an array of all queries
        return res.status(200).json(queryData);
      } else {
        // Returning a 404 status code if no queries are found
        return res.status(404).json({ message: "No queries found" });
      }
    } catch (error) {
      // Returning a 500 status code for internal server error
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  });
  