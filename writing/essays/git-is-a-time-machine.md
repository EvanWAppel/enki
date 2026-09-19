# Git Is a Time Machine, and You Are the Historian

We talk about version control as though it were a safety net, a place to save your work so you don't lose it, and that's true and it's the least interesting thing about it. A safety net catches you when you fall. Git does something stranger and more valuable: it lets you go back and read the mind of the person who was here before you. Usually that person is you, a year ago, and you will not recognize them.

Git is a time machine. And a time machine is only as good as the record it keeps of the times you traveled through.

Here is the scene that makes the case, and every working engineer has lived it. Something is broken. You trace it to a line of code that makes no sense: a strange conditional, an off-by-one guard, a workaround that looks like a mistake. Your instinct is to delete it, because it's obviously wrong. But you've been burned before, so you run `git blame`, and you find the commit, and you read the message. And the message is one of two things. Either it says *fix bug*, and now you're alone in the dark, with no idea whether that line is load-bearing or leftover, so you either break production or leave a bug in out of fear. Or it says: *guard against empty response from the vendor API; they return 200 with no body on rate-limit, see incident #4471.* And suddenly you are not alone. Someone reached across a year to tell you exactly why the strange line is not strange at all. The line is a scar, and the message is the story of the wound.

That's what a commit history actually is. Not a log. A narrative: the running story of why a system is the way it is, told by the only people who could possibly know, at the only moment they still knew. Every commit is a note left for a stranger who will arrive with a question you can answer now and never again. The stranger is real. The stranger is coming. The stranger is, more often than not, you.

Which reframes the whole discipline, because it means the audience for your commit message is not the machine and not your reviewer this afternoon. It's a person in the future, under pressure, trying to understand a decision they weren't in the room for. That person doesn't need to know *what* changed. The diff already tells them what changed, in perfect detail. They need to know *why*. Why this, why now, why not the obvious alternative. The what is free; Git captures it automatically. The why exists only in your head, and it evaporates the moment you move to the next ticket, and the commit message is the one chance anyone has to catch it before it's gone.

So writing history well is not bureaucracy and it's not neatness for its own sake. It's an act of accountability, and a small act of care aimed at people you'll never meet. It says: I was here, I made a choice, and I owed the next person an explanation. A commit that says only *fix* is a door slammed on that person. A commit that tells them why is a hand held out across time.

You are not just writing code. You are keeping the record of why the code is what it is: the historian of a country only you visited. Write the history so a stranger can read it. The stranger is counting on you.

The stranger is you.
