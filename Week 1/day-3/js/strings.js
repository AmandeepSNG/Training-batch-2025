

/**
 Topics covered
 1. string
 2. String functions  
  1. String constructor
  2. length()
  3. charAt()
  4. concat()
  5. indexOf()
  6. lastIndexOf()
  7. match()
  8. replace()
  9. search()
  10. slice()
  11. split()
  12. substr()
  13. substring()
  14. toLowerCase()
  15. toUpperCase()
  16. trim()
  17. startsWith()
  18. endsWith()
  19. includes()
  20. padStart()
  21. padEnd()
  22. matchAll()
  23. match()

Sample questions
1. How do you find the length of a string in JavaScript?
2. How can you convert a string to uppercase in JavaScript?
3. What method would you use to check if a string starts with a specific substring?
4. How do you replace a substring within a string in JavaScript?
5. How can you split a string into an array of substrings?

Questions for each function:
1. String constructor
   - How do you create a new string using the String constructor?
   - What is the difference between a string literal and a string object?
   - How can you convert a number to a string using the String constructor?
   - Can you create a string from an array of character codes using the String constructor?
   - How do you create a string from a boolean value using the String constructor?

2. length()
   - How do you find the length of a string in JavaScript?
   - What will be the length of an empty string?
   - How can you use the length property to iterate over each character in a string?
   - Does the length property count spaces and special characters?
   - How do you find the length of a string that contains Unicode characters?

3. charAt()
   - How do you get the character at a specific index in a string?
   - What will be the result of calling charAt() with an index that is out of range?
   - How can you use charAt() to iterate over each character in a string?
   - What is the difference between charAt() and accessing a character using bracket notation?
   - How do you get the last character of a string using charAt()?

4. concat()
   - How do you concatenate two strings in JavaScript?
   - Can you concatenate more than two strings using the concat() method?
   - What is the difference between using concat() and the + operator for string concatenation?
   - How do you concatenate a string with a number using the concat() method?
   - Can you use concat() to concatenate an array of strings into a single string?

5. indexOf()
   - How do you find the index of a substring within a string?
   - What will be the result of calling indexOf() if the substring is not found?
   - How can you use indexOf() to find the position of the first occurrence of a character?
   - Can you specify a starting index for the search using indexOf()?
   - How do you find all occurrences of a substring within a string using indexOf()?

6. lastIndexOf()
   - How do you find the last occurrence of a substring within a string?
   - What will be the result of calling lastIndexOf() if the substring is not found?
   - How can you use lastIndexOf() to find the position of the last occurrence of a character?
   - Can you specify a starting index for the search using lastIndexOf()?
   - How do you find all occurrences of a substring within a string using lastIndexOf()?

7. match()
   - How do you use the match() method to find matches of a regular expression in a string?
   - What will be the result of calling match() if no matches are found?
   - How can you use match() to find all occurrences of a pattern in a string?
   - What is the difference between match() and exec() methods for regular expressions?
   - How do you use match() with a global regular expression?

8. replace()
   - How do you replace a substring within a string in JavaScript?
   - Can you use the replace() method to replace all occurrences of a substring?
   - How do you use a regular expression with the replace() method?
   - Can you use a function as the replacement argument in the replace() method?
   - How do you replace a substring with another substring only if it matches a specific pattern?

9. search()
   - How do you use the search() method to find the position of a regular expression match in a string?
   - What will be the result of calling search() if no match is found?
   - How can you use search() to find the position of the first occurrence of a pattern in a string?
   - What is the difference between search() and indexOf() methods?
   - How do you use search() with a global regular expression?

10. slice()
  - How do you extract a portion of a string using the slice() method?
  - Can you use negative indices with the slice() method?
  - What will be the result of calling slice() with only one argument?
  - How do you use slice() to extract a substring from the end of a string?
  - What is the difference between slice() and substring() methods?

11. split()
  - How do you split a string into an array of substrings?
  - Can you specify a limit on the number of splits using the split() method?
  - How do you use a regular expression as the separator in the split() method?
  - What will be the result of calling split() with an empty string as the separator?
  - How do you split a string into an array of characters using the split() method?

12. substr()
  - How do you extract a substring from a string using the substr() method?
  - Can you use negative indices with the substr() method?
  - What will be the result of calling substr() with only one argument?
  - How do you use substr() to extract a substring from the end of a string?
  - What is the difference between substr() and substring() methods?

13. substring()
  - How do you extract a substring from a string using the substring() method?
  - Can you use negative indices with the substring() method?
  - What will be the result of calling substring() with only one argument?
  - How do you use substring() to extract a substring from the end of a string?
  - What is the difference between substring() and slice() methods?

14. toLowerCase()
  - How do you convert a string to lowercase in JavaScript?
  - What will be the result of calling toLowerCase() on a string that is already in lowercase?
  - How can you use toLowerCase() to perform a case-insensitive comparison of two strings?
  - Does the toLowerCase() method affect the original string?
  - How do you convert only a portion of a string to lowercase?

15. toUpperCase()
  - How do you convert a string to uppercase in JavaScript?
  - What will be the result of calling toUpperCase() on a string that is already in uppercase?
  - How can you use toUpperCase() to perform a case-insensitive comparison of two strings?
  - Does the toUpperCase() method affect the original string?
  - How do you convert only a portion of a string to uppercase?

16. trim()
  - How do you remove whitespace from both ends of a string in JavaScript?
  - What will be the result of calling trim() on a string that has no whitespace at the ends?
  - How can you use trim() to normalize user input in a form?
  - Does the trim() method affect the original string?
  - How do you remove only leading or trailing whitespace from a string?

17. startsWith()
  - How do you check if a string starts with a specific substring in JavaScript?
  - Can you specify a starting position for the search using the startsWith() method?
  - What will be the result of calling startsWith() if the string does not start with the specified substring?
  - How can you use startsWith() to perform a case-insensitive check?
  - How do you check if a string starts with any of multiple substrings?

18. endsWith()
  - How do you check if a string ends with a specific substring in JavaScript?
  - Can you specify a length for the search using the endsWith() method?
  - What will be the result of calling endsWith() if the string does not end with the specified substring?
  - How can you use endsWith() to perform a case-insensitive check?
  - How do you check if a string ends with any of multiple substrings?

19. includes()
  - How do you check if a string contains a specific substring in JavaScript?
  - Can you specify a starting position for the search using the includes() method?
  - What will be the result of calling includes() if the substring is not found?
  - How can you use includes() to perform a case-insensitive check?
  - How do you check if a string includes any of multiple substrings?

20. padStart()
  - How do you pad the beginning of a string with a specific character in JavaScript?
  - Can you specify the total length of the resulting string using the padStart() method?
  - What will be the result of calling padStart() if the original string is already longer than the specified length?
  - How can you use padStart() to format numbers as strings with leading zeros?
  - How do you pad the beginning of a string with multiple characters using padStart()?

21. padEnd()
  - How do you pad the end of a string with a specific character in JavaScript?
  - Can you specify the total length of the resulting string using the padEnd() method?
  - What will be the result of calling padEnd() if the original string is already longer than the specified length?
  - How can you use padEnd() to format strings with trailing spaces?
  - How do you pad the end of a string with multiple characters using padEnd()?

22. matchAll()
  - How do you use the matchAll() method to find all matches of a regular expression in a string?
  - What will be the result of calling matchAll() if no matches are found?
  - How can you use matchAll() to find all occurrences of a pattern in a string?
  - What is the difference between matchAll() and match() methods for regular expressions?
  - How do you use matchAll() with a global regular expression?

23. match()
  - How do you use the match() method to find matches of a regular expression in a string?
  - What will be the result of calling match() if no matches are found?
  - How can you use match() to find all occurrences of a pattern in a string?
  - What is the difference between match() and exec() methods for regular expressions?
  - How do you use match() with a global regular expression?
 */