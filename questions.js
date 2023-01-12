// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "What is three-fifths of 50?",
  answer: "30",
  options: [
    "25",
    "30",
    "20",
    "35"
  ]
},
  {
  numb: 2,
  question: " 1/3 of 1/3 of 450 equals?",
  answer: "50",
  options: [
    "50",
    "40",
    "45",
    "35"
  ]
},
  {
  numb: 3,
  question: "Melinda, 12 years old, is three times as old as Liza. How old will she be when she's twice as old as Liza?",
  answer: "16",
  options: [
    "16",
    "24",
    "20",
    "18"
  ]
},
  {
  numb: 4,
  question: "A bakery had 3 pies cut into eighths. Three-quarters of all pieces were sold. How many were not sold?",
  answer: "6",
  options: [
    "12",
    "16",
    "6",
    "8"
  ]
},
  {
  numb: 5,
  question: "How many times the hands of a clock coincide in a day?",
  answer: "22",
  options: [
    "24",
    "22",
    "20",
    "21"
  ]
},
  {
    numb: 6,
    question: "Look at this series: 7, 10, 8, 11, 9, 12, … What number should come next?",
    answer: "10",
    options: [
      "12",
      "10",
      "11",
      "7"
    ]
  },
   {
    numb: 7,
    question: "Which number logically follows this series? 4 6 9 6 14 6 __",
    answer: "19",
    options: [
      "20",
      "22",
      "19",
      "6"
    ]
  },
   {
    numb: 8,
    question: "Vincent has a paper route. Each morning, he delivers 37 newspapers to customers in his neighborhood. It takes Vincent 50 minutes to deliver all the papers. If Vincent is sick or has other plans, his friend Thomas, who lives on the same street, will sometimes deliver the papers for him.",
    answer: "Vincent and Thomas live in the same neighborhood",
    options: [
      "It takes Thomas more than 50 minutes to deliver the papers",
      "Vincent and Thomas live in the same neighborhood",
      "It is dark outside when Vincent begins his deliveries",
      "Thomas would like to have his own paper route"
    ]
  },
   {
    numb: 9,
    question: "Tanya is older than Eric.Cliff is older than Tanya.Eric is older than Cliff.If the first two statements are true,the third statement is",
    answer: "False",
    options: [
      "False",
      "True",
      "Uncertain",
      "Cannot be determined"
    ]
  },
   {
    numb: 10,
    question: "Which word does NOT belong with the others?",
    answer: "27:9",
    options: [
      "27:9",
      "216:32",
      "72:24",
      "45:5"
    ]
  },
  {
    numb: 11,
    question: "From the given options, find the pair which is similar to the given pair: 8:4",
    answer: "ounce",
    options: [
      "inch",
      "ounce",
      "yard",
      "centimeter"
    ]
  },
  {
    numb: 12,
    question: "Three times the first of three consecutive odd integers is 3 more than twice the third. The third integer is:",
    answer: "15",
    options: [
      "9",
      "11",
      "13",
      "15"
    ]
  },
  {
    numb: 13,
    question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
    answer: "4",
    options: [
      "4",
      "8",
      "none of these",
      "10"
    ]
  },
  {
    numb: 14,
    question: "Which one of the following is not a prime number??",
    answer: "91",
    options: [
      "71",
      "91",
      "31",
      "61"
    ]
  },
  {
    numb: 15,
    question: "	B2CD, _____, BCD4, B5CD, BC6D",
    answer: "BC3D",
    options: [
      "B2C2D",
      "BC3D",
      "B2C3D",
      "BCD7"
    ]
  },
  {
    numb: 16,
    question: "Which of the following is a prime number ?",
    answer: "97",
    options: [
      "33",
      "93",
      "81",
      "97"
    ]
  },
  {
    numb: 17,
    question: "FAG, GAF, HAI, IAH, ____",
    answer: "JAK",
    options: [
      "JAK",
      "HAL",
      "HAK",
      "BAC"
    ]
  },
  {
    numb: 18,
    question: "Arrange the words given below in a meaningful sequence. 1. Word	2. Paragraph	3. Sentence 4. Letters	5. Phrase",
    answer: "4, 1, 5, 3, 2",
    options: [
      "4, 1, 5, 2, 3",
      "4, 1, 3, 5, 2",
      "4, 2, 5, 1, 3",
      "4, 1, 5, 3, 2"
    ]
  },
  {
    numb: 19,
    question: "Y is in the East of X which is in the North of Z. If P is in the South of Z, then in which direction of Y, is P?",
    answer: "None of These",
    options: [
      "North",
      "South",
      "South-East",
      "None of These"
    ]
  },
  {
    numb: 20,
    question: "A disease always has",
    answer: "Cause",
    options: [
      "Cure",
      "Cause",
      "Germs",
      "Patient"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];