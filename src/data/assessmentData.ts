import type { Section } from '../types/assessment';

export const assessmentSections: Section[] = [
  {
    id: 'aptitude',
    title: 'Aptitude & Reasoning',
    questions: [
      {
        id: 'apt-1',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?',
        options: [
          { id: 'a', text: '3.6 km/hr' },
          { id: 'b', text: '7.2 km/hr' },
          { id: 'c', text: '8.4 km/hr' },
          { id: 'd', text: '10 km/hr' },
        ],
        correctOptionId: 'b',
        explanation: 'Speed = 600 m / (5 * 60 s) = 600 / 300 = 2 m/sec. Converting to km/hr: 2 * (18 / 5) = 36 / 5 = 7.2 km/hr.',
      },
      {
        id: 'apt-2',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 2/3 hours, it must travel at a speed of:',
        options: [
          { id: 'a', text: '300 kmph' },
          { id: 'b', text: '360 kmph' },
          { id: 'c', text: '600 kmph' },
          { id: 'd', text: '720 kmph' },
        ],
        correctOptionId: 'd',
        explanation: 'Distance = Speed * Time = 240 * 5 = 1200 km. Required time = 1 2/3 hours = 5/3 hours. Required speed = 1200 / (5/3) = 1200 * (3/5) = 720 kmph.',
      },
      {
        id: 'apt-3',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:',
        options: [
          { id: 'a', text: '50 km' },
          { id: 'b', text: '56 km' },
          { id: 'c', text: '70 km' },
          { id: 'd', text: '80 km' },
        ],
        correctOptionId: 'a',
        explanation: 'Let actual distance be x km. Time taken = x / 10. At 14 km/hr, (x + 20) / 14 = x / 10 => 10(x + 20) = 14x => 4x = 200 => x = 50 km.',
      },
      {
        id: 'apt-4',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:',
        options: [
          { id: 'a', text: '100 kmph' },
          { id: 'b', text: '110 kmph' },
          { id: 'c', text: '120 kmph' },
          { id: 'd', text: '130 kmph' },
        ],
        correctOptionId: 'c',
        explanation: 'Let speed of car be x kmph. Speed of train = 1.5x = (3/2)x kmph. Difference in time = 12.5 min = 5/24 hours. (75 / x) - (75 / 1.5x) = 5/24 => 25/x = 5/24 => x = 120 kmph.',
      },
      {
        id: 'apt-5',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?',
        options: [
          { id: 'a', text: '9 min' },
          { id: 'b', text: '10 min' },
          { id: 'c', text: '12 min' },
          { id: 'd', text: '20 min' },
        ],
        correctOptionId: 'b',
        explanation: 'Due to stoppages, it covers 54 - 45 = 9 km less per hour. Time taken to cover 9 km at 54 kmph = (9 / 54) * 60 minutes = 10 minutes.',
      },
      {
        id: 'apt-6',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'In a flight of 600 km, an aircraft was slowed down due to bad weather. Its average speed for the trip was reduced by 200 km/hr and the time of flight increased by 30 minutes. The duration of the flight is:',
        options: [
          { id: 'a', text: '1 hour' },
          { id: 'b', text: '2 hours' },
          { id: 'c', text: '3 hours' },
          { id: 'd', text: '4 hours' },
        ],
        correctOptionId: 'a',
        explanation: 'Let original duration be t hours. 600/t - 600/(t + 0.5) = 200 => 3/t - 3/(t + 0.5) = 1 => 2t^2 + t - 3 = 0 => (2t + 3)(t - 1) = 0 => t = 1 hour.',
      },
      {
        id: 'apt-7',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'A man complete a journey in 10 hours. He travels first half of the journey at the rate of 21 km/hr and second half at the rate of 24 km/hr. Find the total journey in km.',
        options: [
          { id: 'a', text: '220 km' },
          { id: 'b', text: '224 km' },
          { id: 'c', text: '230 km' },
          { id: 'd', text: '234 km' },
        ],
        correctOptionId: 'b',
        explanation: 'Let total journey be x km. (x / 2) / 21 + (x / 2) / 24 = 10 => x/42 + x/48 = 10 => 15x / 336 = 10 => x = 224 km.',
      },
      {
        id: 'apt-8',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'In covering a distance of 30 km, Abhay takes 2 hours more than Sameer. If Abhay doubles his speed, then he would take 1 hour less than Sameer. Abhay\'s speed is:',
        options: [
          { id: 'a', text: '5 kmph' },
          { id: 'b', text: '6 kmph' },
          { id: 'c', text: '6.25 kmph' },
          { id: 'd', text: '7.5 kmph' },
        ],
        correctOptionId: 'a',
        explanation: "Let Abhay's speed be x km/hr. Difference in time = 2 - (-1) = 3 hours. 30/x - 30/(2x) = 3 => 30/(2x) = 3 => 6x = 30 => x = 5 kmph.",
      },
      {
        id: 'apt-9',
        type: 'mcq',
        score: 1,
        difficulty: 'hard',
        question: 'Robert is travelling on his cycle and has calculated to reach point A at 2 P.M. if he travels at 10 kmph, he will reach there at 12 noon if he travels at 15 kmph. At what speed must he travel to reach A at 1 P.M.?',
        options: [
          { id: 'a', text: '8 kmph' },
          { id: 'b', text: '11 kmph' },
          { id: 'c', text: '12 kmph' },
          { id: 'd', text: '14 kmph' },
        ],
        correctOptionId: 'c',
        explanation: 'Let distance be x km. x/10 - x/15 = 2 hrs => x/30 = 2 => x = 60 km. Time taken at 10 kmph = 60/10 = 6 hrs. Departure time = 2 P.M. - 6 hrs = 8 A.M. To reach at 1 P.M. (5 hrs), speed = 60 / 5 = 12 kmph.',
      },
      {
        id: 'apt-10',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'A farmer travelled a distance of 61 km in 9 hours. He travelled partly on foot @ 4 km/hr and partly on bicycle @ 9 km/hr. The distance travelled on foot is:',
        options: [
          { id: 'a', text: '14 km' },
          { id: 'b', text: '15 km' },
          { id: 'c', text: '16 km' },
          { id: 'd', text: '17 km' },
        ],
        correctOptionId: 'c',
        explanation: 'Let distance on foot be x km. x/4 + (61 - x)/9 = 9 => (9x + 244 - 4x) / 36 = 9 => 5x + 244 = 324 => 5x = 80 => x = 16 km.',
      },
      {
        id: 'apt-11',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'By walking at 6/7 of his usual speed, a man is 12 minutes too late. The usual time taken by him to cover that distance is:',
        options: [
          { id: 'a', text: '1 hour' },
          { id: 'b', text: '1 hour 12 min' },
          { id: 'c', text: '1 hour 15 min' },
          { id: 'd', text: '1 hour 20 min' },
        ],
        correctOptionId: 'b',
        explanation: 'Let usual time be T. (7/6)T - T = 12 min => T/6 = 12 => T = 72 minutes = 1 hour 12 min.',
      },
      {
        id: 'apt-12',
        type: 'mcq',
        score: 1,
        difficulty: 'hard',
        question: 'A car travelling with 5/7 of its actual speed covers 42 km in 1 hr 40 min 48 sec. Find the actual speed of the car.',
        options: [
          { id: 'a', text: '17 6/7 km/hr' },
          { id: 'b', text: '25 km/hr' },
          { id: 'c', text: '30 km/hr' },
          { id: 'd', text: '35 km/hr' },
        ],
        correctOptionId: 'd',
        explanation: 'Time = 1 hr + 40/60 + 48/3600 = 42/25 hrs. Speed = 42 / (42/25) = 25 km/hr. Actual speed = 25 * (7/5) = 35 km/hr.',
      },
      {
        id: 'apt-13',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'Two boys starting from the same place walk at the rate of 5 kmph and 5.5 kmph respectively in the same direction. What time will they take to be 8.5 km apart?',
        options: [
          { id: 'a', text: '8.5 hours' },
          { id: 'b', text: '16 hours' },
          { id: 'c', text: '17 hours' },
          { id: 'd', text: '17.5 hours' },
        ],
        correctOptionId: 'c',
        explanation: 'Relative speed = 5.5 - 5 = 0.5 km/hr. Time to be 8.5 km apart = 8.5 / 0.5 = 17 hours.',
      },
      {
        id: 'apt-14',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'A car covers the first 160 km at 64 km/hr and the next 160 km at 80 km/hr. What is the average speed of the car?',
        options: [
          { id: 'a', text: '71.11 km/hr' },
          { id: 'b', text: '72 km/hr' },
          { id: 'c', text: '72.25 km/hr' },
          { id: 'd', text: '74 km/hr' },
        ],
        correctOptionId: 'a',
        explanation: 'Total distance = 160 + 160 = 320 km. Total time = 160/64 + 160/80 = 2.5 + 2 = 4.5 hours. Average speed = 320 / 4.5 = 71.11 km/hr.',
      },
      {
        id: 'apt-15',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'A thief is noticed by a policeman from a distance of 200 m. The thief starts running and the policeman chases him. The thief and the policeman run at the rate of 10 km and 11 km per hour respectively. What is the distance between them after 6 minutes?',
        options: [
          { id: 'a', text: '100 m' },
          { id: 'b', text: '150 m' },
          { id: 'c', text: '180 m' },
          { id: 'd', text: '200 m' },
        ],
        correctOptionId: 'a',
        explanation: 'Relative speed = 11 - 10 = 1 km/hr = 5/18 m/s. In 6 minutes (360 s), distance covered = (5/18) * 360 = 100 m. Remaining distance = 200 - 100 = 100 m.',
      },
    ],
  },
  {
    id: 'verbal',
    title: 'Verbal Ability',
    questions: [
      {
        id: 'verb-1',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        direction: 'Direction: In the following questions, choose the word which is the exact OPPOSITE of the given words.',
        question: 'Malodorous',
        options: [
          { id: 'a', text: 'acrid' },
          { id: 'b', text: 'pungent' },
          { id: 'c', text: 'fragrant' },
          { id: 'd', text: 'delicious' },
        ],
        correctOptionId: 'c',
        explanation: 'Malodorous means having an unpleasant smell. The opposite is fragrant (having a pleasant smell).',
      },
      {
        id: 'verb-2',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        direction: 'Direction: In the following questions, choose the word which is the exact OPPOSITE of the given words.',
        question: 'Ephemeral',
        options: [
          { id: 'a', text: 'transient' },
          { id: 'b', text: 'perpetual' },
          { id: 'c', text: 'fleeting' },
          { id: 'd', text: 'momentary' },
        ],
        correctOptionId: 'b',
        explanation: 'Ephemeral means lasting for a very short time. The opposite is perpetual (everlasting).',
      },
      {
        id: 'verb-3',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        direction: 'Direction: Choose the word that best expresses the SIMILAR meaning of the given word.',
        question: 'Candor',
        options: [
          { id: 'a', text: 'frankness' },
          { id: 'b', text: 'deception' },
          { id: 'c', text: 'hesitation' },
          { id: 'd', text: 'arrogance' },
        ],
        correctOptionId: 'a',
        explanation: 'Candor means openness and honesty in expression; frankness.',
      },
      {
        id: 'verb-4',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        direction: 'Direction: Find the grammatically correct sentence.',
        question: 'Choose the sentence with correct subject-verb agreement:',
        options: [
          { id: 'a', text: 'Neither the teacher nor the students was present in the auditorium.' },
          { id: 'b', text: 'Neither the teacher nor the students were present in the auditorium.' },
          { id: 'c', text: 'Neither the teacher or the students was present in the auditorium.' },
          { id: 'd', text: 'Neither the teacher nor the students has been present in the auditorium.' },
        ],
        correctOptionId: 'b',
        explanation: 'With "neither... nor", the verb agrees with the closer subject ("the students", which is plural, so "were").',
      },
      {
        id: 'verb-5',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        direction: 'Direction: Select the option that best explains the idiom.',
        question: 'To burn the midnight oil',
        options: [
          { id: 'a', text: 'To cause accidental fire' },
          { id: 'b', text: 'To work or study late into the night' },
          { id: 'c', text: 'To waste natural resources' },
          { id: 'd', text: 'To celebrate a night festival' },
        ],
        correctOptionId: 'b',
        explanation: '"To burn the midnight oil" means to study or work until very late at night.',
      },
      {
        id: 'verb-6',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        direction: 'Direction: Identify the part of the sentence with an error.',
        question: 'One of the committee members (A) / have expressed (B) / strong reservations about the proposal (C) / No error (D)',
        options: [
          { id: 'a', text: 'One of the committee members' },
          { id: 'b', text: 'have expressed' },
          { id: 'c', text: 'strong reservations about the proposal' },
          { id: 'd', text: 'No error' },
        ],
        correctOptionId: 'b',
        explanation: '"One of..." takes a singular verb. It should be "has expressed" instead of "have expressed".',
      },
      {
        id: 'verb-7',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        direction: 'Direction: Fill in the blank with the appropriate preposition.',
        question: 'She is proficient ______ three different programming languages.',
        options: [
          { id: 'a', text: 'with' },
          { id: 'b', text: 'in' },
          { id: 'c', text: 'at' },
          { id: 'd', text: 'by' },
        ],
        correctOptionId: 'b',
        explanation: 'The adjective "proficient" is followed by the preposition "in".',
      },
      {
        id: 'verb-8',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        direction: 'Direction: Select the appropriate one-word substitution.',
        question: 'A person who is unable to pay their debts',
        options: [
          { id: 'a', text: 'Insolvent' },
          { id: 'b', text: 'Pauper' },
          { id: 'c', text: 'Miser' },
          { id: 'd', text: 'Extravagant' },
        ],
        correctOptionId: 'a',
        explanation: 'An insolvent person is one who is unable to meet debts or liabilities.',
      },
      {
        id: 'verb-9',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        direction: 'Direction: Choose the correct spelt word.',
        question: 'Select the word with correct spelling:',
        options: [
          { id: 'a', text: 'Accomodation' },
          { id: 'b', text: 'Accommodation' },
          { id: 'c', text: 'Acommodation' },
          { id: 'd', text: 'Acomodation' },
        ],
        correctOptionId: 'b',
        explanation: 'Accommodation is spelled with double "c" and double "m".',
      },
      {
        id: 'verb-10',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        direction: 'Direction: Choose the antonym of the underlined word.',
        question: 'The speaker was praised for his succinct explanation of the policy.',
        options: [
          { id: 'a', text: 'concise' },
          { id: 'b', text: 'verbose' },
          { id: 'c', text: 'laconic' },
          { id: 'd', text: 'precise' },
        ],
        correctOptionId: 'b',
        explanation: 'Succinct means brief and clearly expressed. Verbose means using or expressed in more words than are needed.',
      },
      {
        id: 'verb-11',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        direction: 'Direction: Read the statement and answer the question based on inference.',
        question: 'Statement: "Although solar panels have become significantly more affordable, battery storage systems remain a financial obstacle for widespread grid independence." What can be inferred?',
        options: [
          { id: 'a', text: 'Solar panels are no longer cost-effective to produce.' },
          { id: 'b', text: 'High battery storage costs are slowing full independence from the electrical grid.' },
          { id: 'c', text: 'Grid independence has already been achieved by most households.' },
          { id: 'd', text: 'Batteries are no longer required for solar power setups.' },
        ],
        correctOptionId: 'b',
        explanation: 'The statement directly indicates that while solar panels are affordable, expensive battery storage remains a barrier to full grid independence.',
      },
      {
        id: 'verb-12',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        direction: 'Direction: Identify the relationship and choose the correct pair.',
        question: 'OASIS : DESERT ::',
        options: [
          { id: 'a', text: 'Island : Ocean' },
          { id: 'b', text: 'Mountain : Valley' },
          { id: 'c', text: 'Forest : Tree' },
          { id: 'd', text: 'River : Lake' },
        ],
        correctOptionId: 'a',
        explanation: 'An oasis is a fertile water area surrounded by a desert; similarly, an island is a body of land surrounded by an ocean.',
      },
      {
        id: 'verb-13',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        direction: 'Direction: Select the most appropriate word to complete the sentence.',
        question: 'The diplomat was widely commended for his _______ negotiations, managing to avert conflict without offending either party.',
        options: [
          { id: 'a', text: 'reckless' },
          { id: 'b', text: 'tactful' },
          { id: 'c', text: 'belligerent' },
          { id: 'd', text: 'complacent' },
        ],
        correctOptionId: 'b',
        explanation: 'Tactful means having or showing skill and sensitivity in dealing with others or with difficult issues.',
      },
      {
        id: 'verb-14',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        direction: 'Direction: Select the option that best explains the idiom.',
        question: 'To take with a grain of salt',
        options: [
          { id: 'a', text: 'To add mineral seasoning to a dish' },
          { id: 'b', text: 'To view something with a degree of skepticism or reservation' },
          { id: 'c', text: 'To express overwhelming gratitude' },
          { id: 'd', text: 'To accept criticism without resentment' },
        ],
        correctOptionId: 'b',
        explanation: '"To take with a grain of salt" means to remain skeptical and not take something at face value.',
      },
      {
        id: 'verb-15',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        direction: 'Direction: Choose the word which is the exact OPPOSITE of the given word.',
        question: 'Ubiquitous',
        options: [
          { id: 'a', text: 'Omnipresent' },
          { id: 'b', text: 'Rare' },
          { id: 'c', text: 'Pervasive' },
          { id: 'd', text: 'Universal' },
        ],
        correctOptionId: 'b',
        explanation: 'Ubiquitous means present, appearing, or found everywhere. The opposite is rare or scarce.',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical MCQs',
    questions: [
      {
        id: 'tech-1',
        type: 'mcq',
        score: 1,
        difficulty: 'hard',
        question: 'A token counter stores waiting tokens in a set and displays them, but customers complain the display order doesn\'t match the order they arrived. What is the cause?',
        options: [
          { id: 'a', text: 'The print function shuffles containers for security reasons' },
          { id: 'b', text: 'The add method files each token alphabetically as it arrives' },
          { id: 'c', text: 'Duplicate tokens pushed the earlier entries out of position' },
          { id: 'd', text: 'Sets don\'t preserve insertion order; a queue that must show arrival order needs a list' },
        ],
        correctOptionId: 'd',
        explanation: 'A mathematical set or standard hash set does not guarantee insertion order. To maintain arrival sequence (FIFO), a list or deque is required.',
      },
      {
        id: 'tech-2',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'A data analyst downloads population statistics from a government website and combines them with internal sales data. How should the government statistics be classified?',
        options: [
          { id: 'a', text: 'Primary data' },
          { id: 'b', text: 'Experimental data' },
          { id: 'c', text: 'Secondary data' },
          { id: 'd', text: 'Sensor data' },
        ],
        correctOptionId: 'c',
        explanation: 'Secondary data refers to data that was collected by someone other than the primary user (e.g. government censuses, published surveys).',
      },
      {
        id: 'tech-3',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'A chatbot refuses requests to generate ransomware code. Which mechanism enables this?',
        options: [
          { id: 'a', text: 'Embeddings' },
          { id: 'b', text: 'Safety guardrails' },
          { id: 'c', text: 'Prompt templates' },
          { id: 'd', text: 'Vector search' },
        ],
        correctOptionId: 'b',
        explanation: 'Safety guardrails and policy enforcement filters inspect inputs and outputs to prevent the generation of harmful, malicious, or unauthorized content.',
      },
      {
        id: 'tech-4',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'Which of the following database index structures is optimal for range queries on disk-based storage?',
        options: [
          { id: 'a', text: 'Hash Index' },
          { id: 'b', text: 'B+ Tree' },
          { id: 'c', text: 'Binary Search Tree' },
          { id: 'd', text: 'Bloom Filter' },
        ],
        correctOptionId: 'b',
        explanation: 'B+ Trees have all records linked sequentially at the leaf level, making range scans very fast with minimal disk I/O.',
      },
      {
        id: 'tech-5',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'What is the worst-case time complexity of searching in an unbalanced Binary Search Tree containing N nodes?',
        options: [
          { id: 'a', text: 'O(log N)' },
          { id: 'b', text: 'O(1)' },
          { id: 'c', text: 'O(N)' },
          { id: 'd', text: 'O(N log N)' },
        ],
        correctOptionId: 'c',
        explanation: 'When a BST becomes completely skewed (like a linked list), searching an element takes O(N) comparisons.',
      },
      {
        id: 'tech-6',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'Which HTTP status code should a server return when a client exceeds its designated API rate limit?',
        options: [
          { id: 'a', text: '403 Forbidden' },
          { id: 'b', text: '429 Too Many Requests' },
          { id: 'c', text: '503 Service Unavailable' },
          { id: 'd', text: '400 Bad Request' },
        ],
        correctOptionId: 'b',
        explanation: 'HTTP 429 Too Many Requests indicates the user has sent too many requests in a given amount of time (rate limiting).',
      },
      {
        id: 'tech-7',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'In React, which hook is used to cache the result of an expensive calculation between renders?',
        options: [
          { id: 'a', text: 'useCallback' },
          { id: 'b', text: 'useMemo' },
          { id: 'c', text: 'useRef' },
          { id: 'd', text: 'useEffect' },
        ],
        correctOptionId: 'b',
        explanation: 'useMemo caches the result of an expensive function call and only recalculates it when dependencies change.',
      },
      {
        id: 'tech-8',
        type: 'mcq',
        score: 1,
        difficulty: 'hard',
        question: 'Which of the following is NOT one of the Coffman conditions required for a deadlock to occur?',
        options: [
          { id: 'a', text: 'Mutual Exclusion' },
          { id: 'b', text: 'Preemption allowed' },
          { id: 'c', text: 'Hold and Wait' },
          { id: 'd', text: 'Circular Wait' },
        ],
        correctOptionId: 'b',
        explanation: 'The four conditions are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. If preemption is allowed, deadlock cannot occur.',
      },
      {
        id: 'tech-9',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'What is the primary function of a reverse proxy in web infrastructure?',
        options: [
          { id: 'a', text: 'To act on behalf of clients to access arbitrary internet sites' },
          { id: 'b', text: 'To intercept client requests and route them to one or more internal origin servers' },
          { id: 'c', text: 'To compile frontend assets into minified JavaScript' },
          { id: 'd', text: 'To store relational tables in memory without disk backups' },
        ],
        correctOptionId: 'b',
        explanation: 'A reverse proxy sits in front of web servers and forwards client requests to those servers, handling load balancing, SSL termination, and caching.',
      },
      {
        id: 'tech-10',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'Which Git command is used to apply the changes introduced by some existing commits onto the current branch?',
        options: [
          { id: 'a', text: 'git cherry-pick' },
          { id: 'b', text: 'git stash pop' },
          { id: 'c', text: 'git rebase --abort' },
          { id: 'd', text: 'git clean -f' },
        ],
        correctOptionId: 'a',
        explanation: 'git cherry-pick allows you to select specific commits from one branch and apply them to another branch.',
      },
      {
        id: 'tech-11',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'In database management systems, which property of ACID ensures that a transaction, once committed, will survive subsequent hardware crashes or power failures?',
        options: [
          { id: 'a', text: 'Atomicity' },
          { id: 'b', text: 'Consistency' },
          { id: 'c', text: 'Isolation' },
          { id: 'd', text: 'Durability' },
        ],
        correctOptionId: 'd',
        explanation: 'Durability guarantees that once a transaction has been committed, it will remain committed even in the event of a system crash, typically by persisting to non-volatile transaction write-ahead logs.',
      },
      {
        id: 'tech-12',
        type: 'mcq',
        score: 1,
        difficulty: 'hard',
        question: 'In operating systems, what condition occurs when an excessive amount of memory paging causes the operating system to spend more time swapping pages than executing user processes?',
        options: [
          { id: 'a', text: 'Paging' },
          { id: 'b', text: 'Thrashing' },
          { id: 'c', text: 'Segmentation' },
          { id: 'd', text: 'Starvation' },
        ],
        correctOptionId: 'b',
        explanation: 'Thrashing occurs when the virtual memory subsystem is in constant state of paging, severely degrading overall system performance.',
      },
      {
        id: 'tech-13',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'Which DNS record type is responsible for directly resolving a domain hostname to an IPv4 network address?',
        options: [
          { id: 'a', text: 'CNAME Record' },
          { id: 'b', text: 'A Record' },
          { id: 'c', text: 'AAAA Record' },
          { id: 'd', text: 'MX Record' },
        ],
        correctOptionId: 'b',
        explanation: 'An "A" (Address) record maps a hostname to a 32-bit IPv4 address. "AAAA" is used for 128-bit IPv6 addresses.',
      },
      {
        id: 'tech-14',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'Which collision resolution technique in hash tables chains multiple keys hashing to the same bucket into a linked list?',
        options: [
          { id: 'a', text: 'Linear Probing' },
          { id: 'b', text: 'Quadratic Probing' },
          { id: 'c', text: 'Separate Chaining' },
          { id: 'd', text: 'Double Hashing' },
        ],
        correctOptionId: 'c',
        explanation: 'Separate chaining stores collided entries in a dynamic linked list or red-black tree attached to each bucket.',
      },
      {
        id: 'tech-15',
        type: 'mcq',
        score: 1,
        difficulty: 'hard',
        question: 'According to Brewer\'s CAP theorem, which three guarantees can a distributed data store only deliver at most two of simultaneously?',
        options: [
          { id: 'a', text: 'Concurrency, Availability, Performance' },
          { id: 'b', text: 'Consistency, Availability, Partition Tolerance' },
          { id: 'c', text: 'Capacity, Accuracy, Portability' },
          { id: 'd', text: 'Coherence, Authentication, Persistence' },
        ],
        correctOptionId: 'b',
        explanation: 'The CAP theorem states that any distributed data system can simultaneously provide at most two out of Consistency, Availability, and Partition Tolerance.',
      },
    ],
  },
  {
    id: 'coding-medium',
    title: 'Coding-Medium',
    questions: [
      {
        id: 'code-med-1',
        type: 'coding',
        title: 'Bookstore Distinct Arrangements',
        score: 5,
        difficulty: 'medium',
        problemStatement: `A bookstore's display case can hold a set of distinct books in any order, and the store wants to know exactly how many distinct arrangements are possible for a given set of books. Each additional book multiplies the number of possible arrangements by one more factor, compounding one book at a time; a set of 1 has exactly 1 arrangement, a set of 2 has 2, a set of 3 has 6, and so on.

Given the number of books, print the number of possible arrangements. A set of 0 books has exactly one arrangement; the empty one.`,
        inputFormat: [
          'Line 1: num_books ; number of distinct books',
        ],
        outputFormat: [
          'Line 1: the number of possible arrangements',
        ],
        constraints: [
          '0 \u2264 num_books \u2264 12',
        ],
        sampleTestCases: [
          {
            id: 'tc-1',
            input: '5',
            output: '120',
            explanation: 'For 5 books, the number of distinct permutations is 5! = 5 \u00d7 4 \u00d7 3 \u00d7 2 \u00d7 1 = 120.',
          },
          {
            id: 'tc-2',
            input: '0',
            output: '1',
            explanation: 'A set of 0 books has exactly one arrangement; the empty one.',
          },
        ],
        hiddenTestCases: [
          {
            id: 'tc-h1',
            input: '1',
            output: '1',
            isHidden: true,
          },
          {
            id: 'tc-h2',
            input: '3',
            output: '6',
            isHidden: true,
          },
          {
            id: 'tc-h3',
            input: '7',
            output: '5040',
            isHidden: true,
          },
          {
            id: 'tc-h4',
            input: '10',
            output: '3628800',
            isHidden: true,
          },
          {
            id: 'tc-h5',
            input: '12',
            output: '479001600',
            isHidden: true,
          },
        ],
        starterCode: {
          python: `import sys

def solve():
    lines = sys.stdin.read().split()
    if not lines:
        return
    num_books = int(lines[0])
    
    # Calculate arrangements (factorial)
    result = 1
    for i in range(1, num_books + 1):
        result *= i
        
    print(result)

if __name__ == '__main__':
    solve()
`,
          java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int numBooks = scanner.nextInt();
        
        long result = 1;
        for (int i = 1; i <= numBooks; i++) {
            result *= i;
        }
        
        System.out.println(result);
    }
}
`,
          cpp: `#include <iostream>
using namespace std;

int main() {
    int num_books;
    if (!(cin >> num_books)) return 0;
    
    long long result = 1;
    for (int i = 1; i <= num_books; ++i) {
        result *= i;
    }
    
    cout << result << endl;
    return 0;
}
`,
          javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim();
    if (!input) return;
    const numBooks = parseInt(input, 10);
    
    let result = 1;
    for (let i = 1; i <= numBooks; i++) {
        result *= i;
    }
    
    console.log(result);
}

solve();
`,
        },
      },
      {
        id: 'code-med-2',
        type: 'coding',
        title: 'Maximum Contiguous Subarray Sum',
        score: 5,
        difficulty: 'medium',
        problemStatement: `Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum and print its sum.

For example, given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], the contiguous subarray [4, -1, 2, 1] has the largest sum = 6.`,
        inputFormat: [
          'Line 1: space-separated integers representing the array elements',
        ],
        outputFormat: [
          'Line 1: the maximum contiguous subarray sum',
        ],
        constraints: [
          '1 \u2264 array.length \u2264 10^5',
          '-10^4 \u2264 array[i] \u2264 10^4',
        ],
        sampleTestCases: [
          {
            id: 'tc-med2-1',
            input: '-2 1 -3 4 -1 2 1 -5 4',
            output: '6',
            explanation: 'The subarray [4, -1, 2, 1] has the largest sum = 6.',
          },
          {
            id: 'tc-med2-2',
            input: '1',
            output: '1',
            explanation: 'Single element array produces sum = 1.',
          },
        ],
        hiddenTestCases: [
          {
            id: 'tc-med2-h1',
            input: '5 4 -1 7 8',
            output: '23',
            isHidden: true,
          },
          {
            id: 'tc-med2-h2',
            input: '-1',
            output: '-1',
            isHidden: true,
          },
          {
            id: 'tc-med2-h3',
            input: '1 2 3',
            output: '6',
            isHidden: true,
          },
        ],
        starterCode: {
          python: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if not tokens:
        return
    nums = [int(x) for x in tokens]
    
    max_so_far = nums[0]
    curr_max = nums[0]
    for i in range(1, len(nums)):
        curr_max = max(nums[i], curr_max + nums[i])
        max_so_far = max(max_so_far, curr_max)
        
    print(max_so_far)

if __name__ == '__main__':
    solve()
`,
          java: `import java.util.Scanner;
import java.util.ArrayList;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Integer> list = new ArrayList<>();
        while (sc.hasNextInt()) {
            list.add(sc.nextInt());
        }
        if (list.isEmpty()) return;
        
        int maxSoFar = list.get(0);
        int currMax = list.get(0);
        for (int i = 1; i < list.size(); i++) {
            currMax = Math.max(list.get(i), currMax + list.get(i));
            maxSoFar = Math.max(maxSoFar, currMax);
        }
        System.out.println(maxSoFar);
    }
}
`,
          cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int val;
    vector<int> nums;
    while (cin >> val) {
        nums.push_back(val);
    }
    if (nums.empty()) return 0;
    
    int maxSoFar = nums[0];
    int currMax = nums[0];
    for (size_t i = 1; i < nums.size(); ++i) {
        currMax = max(nums[i], currMax + nums[i]);
        maxSoFar = max(maxSoFar, currMax);
    }
    cout << maxSoFar << endl;
    return 0;
}
`,
          javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split(/\\s+/);
    if (!input || input.length === 0 || input[0] === '') return;
    const nums = input.map(x => parseInt(x, 10));
    
    let maxSoFar = nums[0];
    let currMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], currMax + nums[i]);
        maxSoFar = Math.max(maxSoFar, currMax);
    }
    console.log(maxSoFar);
}

solve();
`,
        },
      },
    ],
  },
  {
    id: 'coding-hard',
    title: 'Coding-Hard',
    questions: [
      {
        id: 'code-hard-1',
        type: 'coding',
        title: 'Odd and Even Attendance Rearrangement',
        score: 5,
        difficulty: 'medium',
        problemStatement: `A training center assigns identification numbers from 1 to N to participants registered for a large event. Before printing the final attendance sheet, the organizers decide to arrange these identification numbers using a special rule. All odd identification numbers from 1 to N are written first in increasing order. After that, all even identification numbers from 1 to N are written in increasing order.

For example, when N = 10, the final arrangement becomes: 1 3 5 7 9 2 4 6 8 10. The number of participants can be extremely large, so constructing the entire arrangement is not practical. Given N and a position K, determine the identification number that appears at the K-th position in this arrangement. Positions are numbered starting from 1.`,
        inputFormat: [
          'The only line contains two space-separated integers:',
          'N -> the largest identification number.',
          'K -> the position whose value must be determined.',
        ],
        outputFormat: [
          'Print a single integer representing the identification number at the K-th position.',
        ],
        constraints: [
          '1 \u2264 K \u2264 N \u2264 10^12',
        ],
        sampleTestCases: [
          {
            id: 'tc-hard-1',
            input: '10 3',
            output: '5',
            explanation: 'For N = 10, the arranged sequence is 1, 3, 5, 7, 9, 2, 4, 6, 8, 10. The value at position 3 is 5.',
          },
          {
            id: 'tc-hard-2',
            input: '7 5',
            output: '2',
            explanation: 'For N = 7, the odd values occupy the first four positions: 1, 3, 5, 7. The even values follow as 2, 4, 6. Therefore, position 5 contains 2.',
          },
        ],
        hiddenTestCases: [
          {
            id: 'tc-hard-h1',
            input: '4 4',
            output: '4',
            isHidden: true,
          },
          {
            id: 'tc-hard-h2',
            input: '15 8',
            output: '15',
            isHidden: true,
          },
          {
            id: 'tc-hard-h3',
            input: '100 60',
            output: '20',
            isHidden: true,
          },
          {
            id: 'tc-hard-h4',
            input: '1000000000 500000001',
            output: '2',
            isHidden: true,
          },
          {
            id: 'tc-hard-h5',
            input: '11 6',
            output: '11',
            isHidden: true,
          },
        ],
        starterCode: {
          java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextLong()) return;
        long n = scanner.nextLong();
        long k = scanner.nextLong();
        
        long oddCount = (n + 1) / 2;
        if (k <= oddCount) {
            System.out.println(2 * k - 1);
        } else {
            System.out.println(2 * (k - oddCount));
        }
    }
}
`,
          python: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if len(tokens) < 2:
        return
    n = int(tokens[0])
    k = int(tokens[1])
    
    odd_count = (n + 1) // 2
    if k <= odd_count:
        print(2 * k - 1)
    else:
        print(2 * (k - odd_count))

if __name__ == '__main__':
    solve()
`,
          cpp: `#include <iostream>
using namespace std;

int main() {
    long long n, k;
    if (!(cin >> n >> k)) return 0;
    
    long long odd_count = (n + 1) / 2;
    if (k <= odd_count) {
        cout << (2 * k - 1) << endl;
    } else {
        cout << (2 * (k - odd_count)) << endl;
    }
    return 0;
}
`,
          javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split(/\\s+/);
    if (input.length < 2) return;
    const n = BigInt(input[0]);
    const k = BigInt(input[1]);
    
    const oddCount = (n + 1n) / 2n;
    if (k <= oddCount) {
        console.log((2n * k - 1n).toString());
    } else {
        console.log((2n * (k - oddCount)).toString());
    }
}

solve();
`,
        },
      },
      {
        id: 'code-hard-2',
        type: 'coding',
        title: 'Longest Common Subsequence Length',
        score: 5,
        difficulty: 'hard',
        problemStatement: `Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. (e.g., "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.`,
        inputFormat: [
          'Line 1: text1 and text2 as space-separated strings (or two lines)',
        ],
        outputFormat: [
          'Print a single integer representing the length of the longest common subsequence.',
        ],
        constraints: [
          '1 \u2264 text1.length, text2.length \u2264 1000',
          'text1 and text2 consist of only lowercase English characters.',
        ],
        sampleTestCases: [
          {
            id: 'tc-hard2-1',
            input: 'abcde ace',
            output: '3',
            explanation: 'The longest common subsequence is "ace" and its length is 3.',
          },
          {
            id: 'tc-hard2-2',
            input: 'abc abc',
            output: '3',
            explanation: 'The longest common subsequence is "abc" and its length is 3.',
          },
        ],
        hiddenTestCases: [
          {
            id: 'tc-hard2-h1',
            input: 'abc def',
            output: '0',
            isHidden: true,
          },
          {
            id: 'tc-hard2-h2',
            input: 'oxcpqrsvwf shmtulskrw',
            output: '2',
            isHidden: true,
          },
        ],
        starterCode: {
          python: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if len(tokens) < 2:
        return
    s1, s2 = tokens[0], tokens[1]
    m, n = len(s1), len(s2)
    
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
                
    print(dp[m][n])

if __name__ == '__main__':
    solve()
`,
          java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNext()) return;
        String s1 = sc.next();
        if (!sc.hasNext()) return;
        String s2 = sc.next();
        
        int m = s1.length(), n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        System.out.println(dp[m][n]);
    }
}
`,
          cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s1, s2;
    if (!(cin >> s1 >> s2)) return 0;
    
    int m = s1.length(), n = s2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    cout << dp[m][n] << endl;
    return 0;
}
`,
          javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split(/\\s+/);
    if (input.length < 2) return;
    const s1 = input[0];
    const s2 = input[1];
    
    const m = s1.length, n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    console.log(dp[m][n]);
}

solve();
`,
        },
      },
    ],
  },
];
