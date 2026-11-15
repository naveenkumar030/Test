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
        question: 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?',
        options: [
          { id: 'a', text: '(1/3)' },
          { id: 'b', text: '(1/8)' },
          { id: 'c', text: '(2/8)' },
          { id: 'd', text: '(1/16)' },
        ],
        correctOptionId: 'b',
        explanation: 'Each number is divided by 2 to get the next number: 1/4 ÷ 2 = 1/8.',
      },
      {
        id: 'apt-2',
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
        explanation: "A's 1 day work = 1/15, B's 1 day work = 1/20. Together = 7/60. In 4 days = 28/60 = 7/15. Remaining = 1 - 7/15 = 8/15.",
      },
      {
        id: 'apt-3',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?',
        options: [
          { id: 'a', text: '65 sec' },
          { id: 'b', text: '89 sec' },
          { id: 'c', text: '100 sec' },
          { id: 'd', text: '150 sec' },
        ],
        correctOptionId: 'b',
        explanation: 'Speed = 240/24 = 10 m/s. Total distance = 240 + 650 = 890 m. Time = 890 / 10 = 89 sec.',
      },
      {
        id: 'apt-4',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'Introducing a boy, a girl said, "He is the son of the daughter of the father of my uncle." How is the boy related to the girl?',
        options: [
          { id: 'a', text: 'Brother' },
          { id: 'b', text: 'Nephew' },
          { id: 'c', text: 'Uncle' },
          { id: 'd', text: 'Son-in-law' },
        ],
        correctOptionId: 'a',
        explanation: "Father of uncle is grandfather. Daughter of grandfather is mother/aunt. Son of daughter is brother/cousin. Here, brother is the exact relation.",
      },
      {
        id: 'apt-5',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'In a certain code, MONKEY is written as XDJMNL. How is TIGER written in that code?',
        options: [
          { id: 'a', text: 'QDFHS' },
          { id: 'b', text: 'SDFHS' },
          { id: 'c', text: 'SHFDQ' },
          { id: 'd', text: 'UJHFS' },
        ],
        correctOptionId: 'a',
        explanation: 'Reverse letter order minus 1: Y-1=X, E-1=D, K-1=J, N-1=M, O-1=N, M-1=L. For TIGER: R-1=Q, E-1=D, G-1=F, I-1=H, T-1=S => QDFHS.',
      },
      {
        id: 'apt-6',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'Two dice are tossed. The probability that the total score is a prime number is:',
        options: [
          { id: 'a', text: '1/6' },
          { id: 'b', text: '5/12' },
          { id: 'c', text: '1/2' },
          { id: 'd', text: '7/12' },
        ],
        correctOptionId: 'b',
        explanation: 'Prime sums: 2, 3, 5, 7, 11. Total pairs = 1 + 2 + 4 + 6 + 2 = 15. Probability = 15/36 = 5/12.',
      },
      {
        id: 'apt-7',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'By selling an article for $240, a man gains 20%. At what price should he sell it to gain 30%?',
        options: [
          { id: 'a', text: '$260' },
          { id: 'b', text: '$280' },
          { id: 'c', text: '$300' },
          { id: 'd', text: '$250' },
        ],
        correctOptionId: 'a',
        explanation: 'Cost price = 240 / 1.20 = $200. New selling price = 200 * 1.30 = $260.',
      },
      {
        id: 'apt-8',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'If the first and third terms of the G.P are 8 and 512, find the second term.',
        options: [
          { id: 'a', text: '128' },
          { id: 'b', text: '64' },
          { id: 'c', text: '256' },
          { id: 'd', text: 'None of the above' },
        ],
        correctOptionId: 'b',
        explanation: 'In a Geometric Progression, b^2 = a * c. So b^2 = 8 * 512 = 4096 => b = √4096 = 64.',
      },
      {
        id: 'apt-9',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'Find the unit digit of 87 * 76 * 39 * 5 .',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '4' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctOptionId: 'd',
        explanation: 'Multiplying an even number (76 ends in 6) by 5 always yields a product with 0 in the units place.',
      },
      {
        id: 'apt-10',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'Find the number of possible pairs of two numbers, which are greater than or equal to 13 and have H.C.F. and L.C.M. of 39 and 8619 respectively.',
        options: [
          { id: 'a', text: '4' },
          { id: 'b', text: '1' },
          { id: 'c', text: '6' },
          { id: 'd', text: '8' },
        ],
        correctOptionId: 'a',
        explanation: 'Let numbers be 39x and 39y where gcd(x, y) = 1. Product = 39 * 8619 => 39x * 39y = 39 * 8619 => xy = 221 = 13 * 17. Pairs (1, 221) and (13, 17) give valid pairs of numbers greater than or equal to 13.',
      },
      {
        id: 'apt-11',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: '700 gms of sugar juice solution has 60% sugar in it. How much sugar should be added to make it 80% in the solution?',
        options: [
          { id: 'a', text: '600 gms' },
          { id: 'b', text: '450 gms' },
          { id: 'c', text: '700 gms' },
          { id: 'd', text: '750 gms' },
        ],
        correctOptionId: 'c',
        explanation: 'Initial non-sugar (water) = 40% of 700 = 280 gms. In the new solution, 280 gms represents 20% of the total solution. Total new weight = 280 / 0.20 = 1400 gms. Sugar added = 1400 - 700 = 700 gms.',
      },
      {
        id: 'apt-12',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'At what time between 4 and 5 o\'clock will the hands of a clock be at right angle?',
        options: [
          { id: 'a', text: '38 2/11 min past 4' },
          { id: 'b', text: '5 5/11 min past 4' },
          { id: 'c', text: 'Both a and b' },
          { id: 'd', text: '40 min past 4' },
        ],
        correctOptionId: 'c',
        explanation: 'Right angles occur twice an hour: at 5 5/11 min past 4 and 38 2/11 min past 4.',
      },
      {
        id: 'apt-13',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is:',
        options: [
          { id: 'a', text: '10 min' },
          { id: 'b', text: '12 min' },
          { id: 'c', text: '15 min' },
          { id: 'd', text: '25 min' },
        ],
        correctOptionId: 'b',
        explanation: 'Part filled by A and B in 1 minute = (1/20 + 1/30) = 5/60 = 1/12. So the tank will be filled in 12 minutes.',
      },
      {
        id: 'apt-14',
        type: 'mcq',
        score: 1,
        difficulty: 'medium',
        question: 'A sum of money placed at compound interest doubles itself in 5 years. In how many years will it amount to eight times itself at the same rate?',
        options: [
          { id: 'a', text: '15 years' },
          { id: 'b', text: '12 years' },
          { id: 'c', text: '20 years' },
          { id: 'd', text: '25 years' },
        ],
        correctOptionId: 'a',
        explanation: 'If a principal doubles in 5 years (P * 2^1 in 5 yrs), it becomes 8 times (2^3) in 3 * 5 = 15 years.',
      },
      {
        id: 'apt-15',
        type: 'mcq',
        score: 1,
        difficulty: 'easy',
        question: 'A man can row upstream at 8 kmph and downstream at 13 kmph. The speed of the stream is:',
        options: [
          { id: 'a', text: '2.5 kmph' },
          { id: 'b', text: '4.2 kmph' },
          { id: 'c', text: '5 kmph' },
          { id: 'd', text: '10.5 kmph' },
        ],
        correctOptionId: 'a',
        explanation: 'Speed of stream = 1/2 * (Downstream speed - Upstream speed) = 1/2 * (13 - 8) = 2.5 kmph.',
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
    ],
  },
];
