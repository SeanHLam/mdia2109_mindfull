

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
    i: "/brownyexplain.svg" , 
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
        i: "/brownyrun.svg",
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
            i: "/brownyEating.svg",
            a: 0,
            selected: ""
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
        i: "/brownysleep.svg",
        a: 0,
        selected: ""
        },

        {
            q: "How are you feeling today?",
            c: [
                
                {
                txt: "Great",
                num: 2,
                ig: "/superHappy.svg"
                },

                {
                txt: "Good",
                num: 1,
                ig: "/happy.svg"
                },
        
                {
                    txt: "Okay",
                    num: 0,
                    ig:"/neutral.svg"
                },
                
                {
                txt: "Bad",
                num: -1,
                ig:"/sad.svg"
                },

                {
                txt: "Awful",
                num: -2,
                ig: "/superSad.svg"
                },
            ],
            i: "/brownyexplain.svg" , 
            a: 0,
            selected: ""
            },

]

var options = []

var value = []

var mindScore = 0


export function GetOptions(){
	return options;
}

export function StoreAn(qno,mnum,txt){
    ques[qno].a = mnum
    ques[qno].selected = txt
    value[qno] = ques[qno].a
    options[qno] = ques[qno].selected
    console.log(value, options)
  }




