const axios = require("axios");

module.exports = {

    getCategories: async () => {
        try {
            var response = await axios.get("https://opentdb.com/api_category.php");
            return response.data;
        } catch (error) {
            throw new Error("Unable to fetch categories", error);
        };

    },

/*     getQuestions: async (category, difficulty, questions) => {
        var url;
        if(category === "0" && difficulty === "any") {
            url = `https://opentdb.com/api.php?amount=${questions}&encode=url3986`;
        } else if(category === "0") {
            url = `https://opentdb.com/api.php?amount=${questions}&difficulty=${difficulty}&encode=url3986`;
        } else if(difficulty === "any") {
            url = `https://opentdb.com/api.php?amount=${questions}&category=${category}&encode=url3986`;
        } else {
            url = `https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&encode=url3986`;
        };

        try {
            var response = await axios.get(url);
            return response.data.results;
        } catch (error) {
            throw new Error("Unable to fetch questions", error);
        }

    }, */

    getQuestions: async (questionArray) => {
        var questionArray = [
            "How many touchdowns were scored in the NFL in 2018?",
            "How many volcanic eruptions were there in 2001?",
            "At its founding in 1800, how many books were in the Libaray of Congress?",
            "How many medals has the United States won in the Winter Olympics?",
            "At the moment, how many wild Tigers exist in the world?"
        ]

        return questionArray;
    }, 

    questionAnswers: async (answerArray) => {
        var answerArray = [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]

        return answerArray;
    },




    shuffleArray: (questionArray) => {
    
        for(var i =0; i < questionArray.length; i++) {
            questionArray[i] = questionArray[i];
        } 

        for(let i = questionArray.length - 1; i >= 0; i--) {
            
            const j = Math.floor(Math.random() * (i + 1));
            [questionArray[i], questionArray[j]] = [questionArray[j], questionArray[i]];
            
        }
        return questionArray;
        
    }


};