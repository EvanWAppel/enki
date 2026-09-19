# In Praise of the Boring Pipeline

I want to say a word for the boring pipeline, because nobody else will. The boring pipeline gets no praise. It gets no praise precisely because it is doing its job, and the reward for a job well done, in infrastructure, is invisibility. The boring pipeline is the one you have never once thought about, which is the highest compliment a piece of infrastructure can receive, and the reason it will never receive it.

We have the incentives exactly backwards, and it's worth being honest about why.

The clever architecture gets the demo. It gets the conference talk, the blog post, the diagram with the satisfying number of boxes and the arrows that cross in ways that look like intelligence. The engineer who builds the intricate, novel, many-mooded system is *visible*: you can see the cleverness, you can point at it, you can put it on a slide. The engineer who builds the thing so simple and so solid that it never pages anyone is invisible, because there is nothing to point at. Their monument is an absence: the incidents that didn't happen, the weekends nobody lost, the on-call shift that was quiet. You cannot photograph an absence. So we photograph the cleverness instead, and slowly we teach a generation of engineers that cleverness is the point.

But sit with the actual experience of operating systems for a while and something inverts. Glory-seeking architecture starts to read not as skill but as *smell*. Why does this need five services? Why is there a message queue between two functions that could be one function? Why did someone reach for the distributed, eventually-consistent, exquisitely-tuned solution to a problem that a cron job and a well-named table would have put to bed? Sometimes the answer is that the problem genuinely demanded it. Often the answer is that the engineer was solving a different problem than the stated one: the problem of being seen to be sophisticated. And that problem gets solved on the company's dime, in complexity the next person has to carry.

Boring is not the absence of skill. Boring is a skill, and a harder one than clever, because clever is what you reach for when you can't yet see the simple version and boring is what's left when you finally can. It takes more understanding to remove a component than to add one. Anyone can make a system more complicated; that's the direction things drift on their own. Making it *simpler*, finding the version with fewer moving parts that does the same work and fails in fewer ways: that's the move that requires you to actually understand the problem all the way down, past the part where it's interesting, into the part where it's just true.

I've come to trust the engineers who are a little bored by their own systems. Not bored by the work. Bored by the *architecture*, in the good way, the way you're bored by a bridge that has simply held for forty years. They've earned the boredom. They chose it, over the more flattering option, and they chose it on purpose, and the choosing cost them the demo and the talk and the slide.

The best infrastructure is the kind nobody notices. If you've built one, nobody will thank you, and that's how you'll know it worked.

Boring is a feature. You have to be good enough to earn it.
