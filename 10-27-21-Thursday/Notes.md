# Notes

## Today

Screenshot and write down details for the [🎥 chat app video](https://app.prntscr.com/en/index.html)

Cal -> first 3 minutes
Allison -> second 3 minutes
Ai -> last 3 minutes

## Screenshot notes

6m9s: Finish chat message functionality

6m18s: Add premade CSS file from video's repo

6m35s: Instead empty `div` to scroll down to after sending messages

6m40s: Added ref property to empty `div`

6m42s: Create ref with `useRef()`

6m49s: Go to `sendMessage()` and reference the empty `div` with `.current.scrollIntoView{ behavior: "smooth" }}` to finish scrolling down functionality.

6m56s: Go to `Firestore/rules` to edit rules

7m15s: Add rule forbidding users from seeing messages unless they are signed-in

7m48s: Overview of rules

7m52s: Clearing view of rules

8m: Run local server for testing

8m6s: `cd functions` and then run `npm i bad-words` for the profanity filter

8m11s: Start cloud function to handle profanity filter

8m17s: Add code for profanity filter

8m21s: Clearer view of profanity filter code

8m23s: Run this to enable this cloud function
