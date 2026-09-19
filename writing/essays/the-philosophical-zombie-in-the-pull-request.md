# The Philosophical Zombie in the Pull Request

There is a thought experiment philosophers have kept in a drawer for decades called the philosophical zombie. The idea is precise and a little chilling: imagine a being identical to a person in every outward respect. It walks, talks, flinches when you poke it, tells you it had a bad morning. From the outside it is indistinguishable from a conscious human. But inside — nothing. No experience, no one home, no light behind the eyes. It produces all the behavior of understanding with none of the understanding. It's a term of art, a real one, and I've started to see it everywhere that isn't a philosophy seminar.

I see it in pull requests.

For most of the history of software, writing code forced you to understand it. This was not a virtue we chose; it was a tax we couldn't avoid. To make the machine do a thing you had to hold the thing in your head — the data flowing through, the edge that breaks it, the reason *this* and not *that*. Understanding wasn't a bonus feature of the work. It was the toll you paid to produce any output at all. You could not ship what you had not, in some real sense, reasoned your way to.

That toll is now optional. Output has become nearly free. And when the toll on a road is lifted, the road fills with people who were never willing to pay it.

The danger of this moment is not the machine that thinks. We can argue about whether it thinks; that argument will outlive all of us and resolve nothing. The danger is much closer and much more human: the engineer who *stops* thinking, and doesn't notice, because the artifact of thought keeps appearing on the screen. The pull request looks right. The tests are green — or green enough. The commit lands. And nobody, anywhere in the chain, has actually arrived at the conclusion the code embodies. The behavior of understanding, with none of the understanding. A philosophical zombie in the diff.

I want to be careful here, because this is easy to hear as a lament about tools, and it isn't. The tools are extraordinary and I use them daily. The point is about ownership, and ownership was always the real job — the tools just made it possible to fake. When output was expensive, you couldn't fake understanding, because you couldn't produce output without it. Now you can. So understanding stops being automatic and becomes a *choice*, and the whole question of professional integrity narrows to whether you keep making that choice when nothing forces you to.

Accountability is the answer, and accountability has a texture you can feel. It's the moment before you approve the merge where you ask: could I defend this? Not — did the machine produce it. Could *I* stand up in the incident review, when it's failing in production, and explain not just what it does but why it does it that way and what I considered and rejected. If the answer is no, you haven't reviewed the code. You've laundered it. You've put your name on a conclusion you never reached.

The zombie asks nothing of you. That's what makes it seductive and what makes it dangerous. It will keep handing you plausible work forever, and it will never once care whether the work is true.

Somebody has to care. In the end that's the whole of the profession, and it always was. Be the one who's home.
