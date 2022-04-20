

export const questions = [
    "How old are you?",
    "How often do you exercise?",
    "How much are you eating in a day?",
    'How much are you sleeping in a day?',
    "How are you feeling today?",
]

export const option1 = [
    "I’m 15 - 18 years old",
    "Often and regularly",
    "I feel I eat too much",
    'I sleep enough (6+ hours)',
]

export const option2 = [
    "I’m older than 18",
    "Very little or never",
    "I’m eating enough",
    'I sleep less than 6 hours',
]

export const ques = [

    {
    q: "How old are you?",
    c: [
        {
        txt: "I’m 15 - 18 years old",
        num: 0,
        },

        {
        txt: "I’m older than 18",
        num: 0,
        }
    ],
    a: 0,
    selected: ""
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
        a: 0,
        selected: ""
        },

        {
            q: "How much are you eating in a day?",
            c: [
                {
                txt: "I feel I eat too much",
                num: -1,
                },
        
                {
                txt: "I’m eating enough",
                num: 1,
                },

                {
                txt: "I feel I don’t eat enough",
                num: -1,
                }
            ],
            a: 0,
            selected: ""
            },

        {
        q: 'How much are you sleeping in a day?',
        c: [
            {
            txt: "I feel I eat too much",
            num: 1,
            },
    
            {
            txt: "I’m eating enough",
            num: -1,
            }
        ],
        a: 0,
        selected: ""
        },

        {
            q: "How are you feeling today?",
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
            a: 0,
            selected: ""
            },

         

    






]

