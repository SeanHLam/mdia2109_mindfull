import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking, faHamburger, faMoon, faSeedling, faBasketball } from '@fortawesome/free-solid-svg-icons'




export const Resimg = [
   "/result1.png",
   "/result2.png",
   "/result3.png",
   "/result4.png",
   "/result5.png",
]

export const Summary = [
   {
      option:[
         {
          txt: "You are between 15 and 18 years old"
         },

         {
            txt: "You are over 18 years old"
         },
      ]
   },

   {
      option:[
         {
          txt: "You exercise often"
         },

         {
            txt: "You don't exercise often"
         },
      ]
   },

   {
      option:[
         {
          txt: "You feel like you eat too much"
         },

         {
            txt: "You feel like you're eating enough"
         },

         {
            txt: "You feel like you're not eating enough"
         },
      ]
   },

   {
      option:[
         {
          txt: "You're getting enough sleep every day"
         },

         {
            txt: "You're not sleeping a healthy amount"
         },
      ]
   },

   {
      option:[
         {
          txt: "You're feeling great!"
         },

         {
            txt: "You're feeling happy!"
         },

         {
            txt: "You're feeling okay"
         },

         {
            txt: "You're feeling sad"
         },

         {
            txt: "You're not feeling that great today"
         },
      ]
   },

]

export const Results = [
   {icon: faBasketball,
      choices:[
         {
            text1: `Exercising is a key part of staying healthy, physically and mentally!`,
            text2:`Try thinking of new ways to stay active to keep you engaged.`
         },

         {
            text1: `It's always good to try and exercise more!`,
            text2:`If you don't have a lot of time, start small with short walks every day.`
         },
      ] },

      {icon: faHamburger,
         choices:[
            {
               text1: `Overeating can be a symptom of being over stressed.`,
               text2:`Try and be more mindful about what and how often you're eating.`
            },
   
            {
               text1: `It's great that you're eating well!
               `,
               text2:`Remember to also take nutrition info into consideration when eating.`
            },

            {
               text1: `Undereating can lead to a lot of health issues.`,
               text2:`Try to set some reminders to let yourself eat.`
            },

         ] },

         {icon: faMoon,
            choices:[
               {
                  text1: `Sleeping helps with processing emotional information and improving physical health!`,
                  text2:`Consider the way you're sleeping to make sure you're not hurting your body.`
               },
      
               {
                  text1: `Not getting enough sleep can effect for your mental and physical health.`,
                  text2:`Try setting up a curfew for yourself and put all devices away before bed.`
               },
            ] },

            {icon: faSeedling,
               choices:[
                  {
                     text1: `Keeping a good attitude will elavate your mantal health!`,
                     text2:`Try and brighten up someone else's day!`
                  },
         
                  {
                     text1: `We're glad to see you happy!`,
                     text2:`Keep up your positive thinking through the day!`
                  },

                  {
                     text1: `It's common to feel neutral on some days.`,
                     text2:`Think of something you can do to lift your mood today!`
                  },

                  {
                     text1: `Having some sad days is completely normal!`,
                     text2:`Make some time for yourself to start feeling better.`
                  },

                  {
                     text1: `Negative moods can contribute to over stress and health problems.`,
                     text2:`Try making a list of things that bring you down to help visualize your troubles!`
                  },
               ] },


]


export const ButtLinks = [

    {
       path: "/resource",
       name: "Resources"
    },

    {
        path: "/activities",
        name: "Activities"
     },

     {
        path: "/about",
        name: "About the Team"
     },

     {
        path: "/home",
        name: "Back to Home"
     }

     

]


