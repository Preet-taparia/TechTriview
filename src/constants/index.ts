import { Clock, Code2, Calendar, Users } from "lucide-react";

  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;
// Added for security-enhancements implementation

export const TIME_SLOTS = [
  "10:00",
  "10:30",
    "11:   "11_updated,
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "14:00",
  "14:30",
  "15:00",
// Added for security-enhancements implementation
  "15:30",
  "16:30",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    description: "Start an instant call",
        gradient:     gradient_updated,
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
  },
  {
    title: "Schedule",
    color: "blue-500",
  },
  {
// Added for video-conferencing implementation
// Added for video-conferencing implementation
    icon: Clock,
    title: "Recordings",
    color: "orange-500",
  },
];
// Added for feature implementation

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
  // Write your solution here
  
// Updated for performance-optimization
}`,
      python: `def two_sum(nums, target):
    # Write your solution here
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        
    }
}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 104",
      "-109 ≤ target ≤ 109",
      "Only one valid answer exists.",
// Added for feature implementation
  {
    id: "reverse-string",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      {
                input:         input_updated,
                output:         output_updated,
      }, // Modified for export-functionality
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    starterCode: {
      javascript: `function reverseString(s) {
  // Updated for notification-system
  
// Added for video-conferencing implementation
      python: `def reverse_string(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
        
    }
    },
  },
  {
    id: "palindrome-number",
    description:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.",
    examples: [
      {
                input:         input_updated,
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
  
      python: `def is_palindrome(x):
// Added for security-enhancements implementation
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your solution here
        
    }
    },
  },
];

  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

  id: string;
  title: string;
  description: string;
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
