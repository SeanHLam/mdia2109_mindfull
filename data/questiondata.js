import { useState, useEffect } from 'react';

export const ques = [

    {
        q: "How old are you?",
        c: [
            {
                txt: "13 - 18 years old",
                num: 0,
            },

            {
                txt: "older than 18",
                num: 0,
            }
        ],
        i: "/brownyYoung.png",
        a: 0,
        selected: "",
        ic: 0
    },

    {
        q: "How often do you exercise?",
        c: [
            {
                txt: "Often and regularly",
                num: 1,
            },

            {
                txt: "Very little or never",
                num: -1,
            }
        ],
        i: "/brownyrun.svg",
        a: 0,
        selected: "",
        ic: 0
    },

    {
        q: "How much are you eating in a day?",
        c: [
            {
                txt: "I feel like I eat too much",
                num: -1,
            },

            {
                txt: "I feel like I’m eating enough",
                num: 1,
            },

            {
                txt: "I feel like I don’t eat enough",
                num: -1,
            }
        ],
        i: "/brownyEating.svg",
        a: 0,
        selected: "",
        ic: 0
    },

    {
        q: 'How much are you sleeping in a day?',
        c: [
            {
                txt: "I sleep enough (6+ hours)",
                num: 1,
            },

            {
                txt: "I sleep less than 6 hours",
                num: -1,
            }
        ],
        i: "/brownySleep.svg",
        a: 0,
        selected: "",
        ic: 0
    },

    {
        q: "How are you feeling today?",
        c: [

            {
                txt: "Great",
                num: 2,
                ig: "/Great.png",
                sel: "/Greatsel.png"
            },

            {
                txt: "Good",
                num: 1,
                ig: "/happy.png",
                sel: "/happysel.png"
            },

            {
                txt: "Okay",
                num: 0,
                ig: "/neutral.png",
                sel: "/neutralsel.png"
            },

            {
                txt: "Bad",
                num: -1,
                ig: "/sad.png",
                sel: "/sadsel.png"
            },

            {
                txt: "Awful",
                num: -2,
                ig: "/awful.png",
                sel: "/awfulsel.png"
            },
        ],
        i: "/brownyexplain.svg",
        a: 0,
        selected: "",
        ic: 0
    },

]

export var options = []




var value = []

export var mindScore = 3

var test = 3

export var optionnum = [1, 1, 1, 1, 1]

export function addMind() {
    for (var i = 0; i < value.length; i++) {
        if (value[i] != null) {
            mindScore += value[i]

            if (mindScore > 5) {
                mindScore = 5
            }

            if (mindScore < 1) {
                mindScore = 1
            }
            if (typeof window !== 'undefined') {
                localStorage.setItem("score", JSON.stringify(mindScore))
            }

        }
    }
    console.log(mindScore)
}


export function GetOptions() {
    return options;

}




export function StoreAn(qno, mnum, txt, qIndex) {
    ques[qno].a = mnum
    ques[qno].selected = txt
    ques[qno].ic = qIndex
    value[qno] = ques[qno].a
    options[qno] = ques[qno].selected
    optionnum[qno] = ques[qno].ic
    test += value[qno]

    if (test > 5) {
        test = 5
    }

    if (test < 1) {
        test = 1
    }
    if (typeof window !== 'undefined') {
        localStorage.setItem("options", JSON.stringify(optionnum))
        localStorage.setItem("score", JSON.stringify(mindScore))
    }


    console.log(value, options, optionnum, test)

}

if (typeof window !== "undefined") {
    var val = localStorage.getItem("options");
    if (val) {
        optionnum = JSON.parse(val);
        mindScore = JSON.parse(localStorage.getItem("score"))
    }
}



















