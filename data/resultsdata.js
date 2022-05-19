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
            txt: "You don't exercise too much"
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
          txt: "You're getting enough sleep ever day"
         },

         {
            txt: "You're not sleeping enough"
         },
      ]
   },

   {
      option:[
         {
          txt: "You feel great!"
         },

         {
            txt: "You are feeling happy!"
         },

         {
            txt: "You are doing okay"
         },

         {
            txt: "You are feeling sad"
         },

         {
            txt: "You are not feeling good"
         },
      ]
   },

]

export const Results = [
   {icon: faBasketball,
      choices:[
         {
            text1: `You are doing very well. Keep it going!`,
            text2:`Exercising is a key part of staying healthy physically and mentally.`
         },

         {
            text1: `It's always good to try and exercise more`,
            text2:`If you don't have a lot of time, start small with short walks every day`
         },
      ] },

      {icon: faHamburger,
         choices:[
            {
               text1: `Overeating can be a symptom of stress`,
               text2:`Try and be more mindful about what and when you're eating`
            },
   
            {
               text1: `It's great that you're eating well!
               `,
               text2:`Remember to also take nutrition into consideration when eating.`
            },

            {
               text1: `Undereating can lead to a lot of different health issues`,
               text2:`Try to set some reminders to let yourself eat`
            },

         ] },

         {icon: faMoon,
            choices:[
               {
                  text1: `You're sleeping a healthy amount!`,
                  text2:`Sleeping helps with processing emotional information and improving physical health.`
               },
      
               {
                  text1: `Not getting enough sleep can be bad for your mental and physical health`,
                  text2:`Try setting up a curfew for yourself and put all devices away in bed`
               },
            ] },

            {icon: faSeedling,
               choices:[
                  {
                     text1: `We're glad to see you happy!`,
                     text2:`Staying positive will boost your mental health.`
                  },
         
                  {
                     text1: `We're glad to see you happy!`,
                     text2:`Staying positive will boost your mental health.`
                  },

                  {
                     text1: `We're glad to see you happy!`,
                     text2:`Staying positive will boost your mental health.`
                  },

                  {
                     text1: `We're glad to see you happy!`,
                     text2:`Staying positive will boost your mental health.`
                  },

                  {
                     text1: `We're glad to see you happy!`,
                     text2:`Staying positive will boost your mental health.`
                  },
               ] },


]


export const ButtLinks = [

    {
       path: "/resource",
       name: "Learn more"
    },

    {
        path: "/activities",
        name: "Activities"
     },

     {
        path: "/about",
        name: "About the team"
     },

     {
        path: "/home",
        name: "Back to home"
     }

     

]


