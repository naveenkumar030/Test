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
        question: 'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:',
        options: [
          { id: 'a', text: '45 km/hr' },
          { id: 'b', text: '50 km/hr' },
          { id: 'c', text: '54 km/hr' },
          { id: 'd', text: '55 km/hr' },
        ],
        correctOptionId: 'b',
        explanation: 'Speed of train relative to man = (125 / 10) m/sec = 12.5 m/sec = 12.5 * (18 / 5) = 45 km/hr. Since both are in the same direction, Speed of train = 45 + 5 = 50 km/hr.',
      },
      {
        id: 'apt-2',
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
        id: 'apt-3',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is:',
        options: [
          { id: 'a', text: '7/15' },
          { id: 'b', text: '8/15' },
          { id: 'c', text: '1/10' },
          { id: 'd', text: '11/15' },
        ],
        correctOptionId: 'b',
        explanation: "A's 1 day work = 1/15, B's 1 day work = 1/20. Together in 1 day = 1/15 + 1/20 = 7/60. In 4 days = 4 * 7/60 = 7/15. Remaining work = 1 - 7/15 = 8/15.",
      },
      {
        id: 'apt-4',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:',
        options: [
          { id: 'a', text: '15' },
          { id: 'b', text: '16' },
          { id: 'c', text: '18' },
          { id: 'd', text: '25' },
        ],
        correctOptionId: 'b',
        explanation: 'Let C.P. of each article be Re. 1. C.P. of x articles = Rs. x, S.P. of x articles = Rs. 20. Profit = 20 - x. Profit % = ((20 - x)/x) * 100 = 25 => 20 - x = x/4 => 5x/4 = 20 => x = 16.',
      },
      {
        id: 'apt-5',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:',
        options: [
          { id: 'a', text: 'Rs. 650' },
          { id: 'b', text: 'Rs. 690' },
          { id: 'c', text: 'Rs. 698' },
          { id: 'd', text: 'Rs. 700' },
        ],
        correctOptionId: 'c',
        explanation: 'S.I. for 1 year = Rs. (854 - 815) = Rs. 39. S.I. for 3 years = Rs. (39 * 3) = Rs. 117. Principal = Rs. (815 - 117) = Rs. 698.',
      },
      {
        id: 'apt-6',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'The compound interest on Rs. 30,000 at 7% per annum is Rs. 4,347. The period (in years) is:',
        options: [
          { id: 'a', text: '2 years' },
          { id: 'b', text: '2.5 years' },
          { id: 'c', text: '3 years' },
          { id: 'd', text: '4 years' },
        ],
        correctOptionId: 'a',
        explanation: 'Amount = 30000 + 4347 = Rs. 34,347. 30000 * (1 + 7/100)^n = 34347 => (107/100)^n = 34347 / 30000 = 11449 / 10000 = (107/100)^2. Therefore, n = 2 years.',
      },
      {
        id: 'apt-7',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:',
        options: [
          { id: 'a', text: '39, 30' },
          { id: 'b', text: '41, 32' },
          { id: 'c', text: '42, 33' },
          { id: 'd', text: '43, 34' },
        ],
        correctOptionId: 'c',
        explanation: 'Let marks be (x + 9) and x. x + 9 = 56/100 * (2x + 9) => 25(x + 9) = 14(2x + 9) => 25x + 225 = 28x + 126 => 3x = 99 => x = 33. The marks are 42 and 33.',
      },
      {
        id: 'apt-8',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit\'s age. After further 8 years, how many times would he be of Ronit\'s age?',
        options: [
          { id: 'a', text: '2 times' },
          { id: 'b', text: '2 1/2 times' },
          { id: 'c', text: '2 3/4 times' },
          { id: 'd', text: '3 times' },
        ],
        correctOptionId: 'a',
        explanation: "Let Ronit's present age be x years. Father's present age = x + 3x = 4x years. After 8 years: 4x + 8 = 2.5(x + 8) => 1.5x = 12 => x = 8. Present ages: Ronit = 8, Father = 32. After further 8 years (16 yrs total): Ronit = 24, Father = 48. Ratio = 48 / 24 = 2 times.",
      },
      {
        id: 'apt-9',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all three pipes are opened. A, B and C discharge chemical solutions P, Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?',
        options: [
          { id: 'a', text: '5/11' },
          { id: 'b', text: '6/11' },
          { id: 'c', text: '7/11' },
          { id: 'd', text: '8/11' },
        ],
        correctOptionId: 'b',
        explanation: 'Part filled by (A + B + C) in 1 min = 1/30 + 1/20 + 1/10 = 11/60. Part filled by C in 1 min = 1/10 = 6/60. Proportion of solution R = (6/60) / (11/60) = 6/11.',
      },
      {
        id: 'apt-10',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.',
        options: [
          { id: 'a', text: '2 hours' },
          { id: 'b', text: '3 hours' },
          { id: 'c', text: '4 hours' },
          { id: 'd', text: '5 hours' },
        ],
        correctOptionId: 'c',
        explanation: 'Speed downstream = (13 + 4) = 17 km/hr. Time taken = Distance / Speed = 68 / 17 = 4 hours.',
      },
      {
        id: 'apt-11',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B\'s share?',
        options: [
          { id: 'a', text: 'Rs. 500' },
          { id: 'b', text: 'Rs. 1500' },
          { id: 'c', text: 'Rs. 2000' },
          { id: 'd', text: 'Rs. 2500' },
        ],
        correctOptionId: 'c',
        explanation: "Let shares be 5x, 2x, 4x, 3x. 4x - 3x = 1000 => x = 1000. B's share = 2x = 2 * 1000 = Rs. 2000.",
      },
      {
        id: 'apt-12',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'In what ratio must a grocer mix two varieties of tea worth Rs. 60 a kg and Rs. 65 a kg so that by selling the mixture at Rs. 68.20 a kg he may gain 10%?',
        options: [
          { id: 'a', text: '3 : 2' },
          { id: 'b', text: '3 : 4' },
          { id: 'c', text: '3 : 5' },
          { id: 'd', text: '4 : 5' },
        ],
        correctOptionId: 'a',
        explanation: 'Cost Price of mixture = (100 / 110) * 68.20 = Rs. 62 per kg. By Alligation rule: Ratio = (65 - 62) / (62 - 60) = 3 : 2.',
      },
      {
        id: 'apt-13',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'The H.C.F. of two numbers is 11 and their L.C.M. is 7700. If one of the numbers is 275, then the other is:',
        options: [
          { id: 'a', text: '279' },
          { id: 'b', text: '283' },
          { id: 'c', text: '308' },
          { id: 'd', text: '318' },
        ],
        correctOptionId: 'c',
        explanation: 'Product of two numbers = H.C.F. * L.C.M. Other number = (11 * 7700) / 275 = 308.',
      },
      {
        id: 'apt-14',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?',
        options: [
          { id: 'a', text: '0' },
          { id: 'b', text: '1' },
          { id: 'c', text: '10' },
          { id: 'd', text: '19' },
        ],
        correctOptionId: 'd',
        explanation: 'Average of 20 numbers = 0 => Sum of 20 numbers = 0. It is quite possible that 19 of these numbers are positive and if their sum is a, the 20th number is -a. Hence, at most 19 numbers can be greater than zero.',
      },
      {
        id: 'apt-15',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?',
        options: [
          { id: 'a', text: '1/3' },
          { id: 'b', text: '3/4' },
          { id: 'c', text: '7/19' },
          { id: 'd', text: '8/21' },
        ],
        correctOptionId: 'a',
        explanation: 'Total balls = 8 + 7 + 6 = 21. Neither red nor green means the ball drawn must be blue. Number of blue balls = 7. Probability = 7 / 21 = 1/3.',
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
